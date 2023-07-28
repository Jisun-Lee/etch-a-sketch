const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';

let newColor = DEFAULT_COLOR;

const container = document.querySelector('.container');
const input = document.querySelector('input');
const output = document.querySelector('output');
const gridElements = document.querySelectorAll('.box');
const black = document.querySelector('.black');
const rainbow = document.querySelector('.rainbow');
const gray = document.querySelector('.gray');
const erase = document.querySelector('.erase');

//default load screen
window.addEventListener('load', () => {
  //shows default slider value
  output.innerHTML = `${input.value} x ${input.value}`; 
  colorSelection();
  gridSetup(DEFAULT_SIZE);
  draw(DEFAULT_COLOR);
});

//clears and draws new grid every time slider is moved
//checks for any button clicks first for newColor --
//default newColor will be black, otherwise uses whatever is 
//stored in newColor variable by colorSelection()
input.addEventListener('input', function () {
  output.innerHTML = `${input.value} x ${input.value}`;
  clearScreen();
  colorSelection();
  draw(newColor);
});

//each loop creates a single div box, class="box", appends to .container
//repeats for x*x times
//arranges grid in a square to fit container div
function gridSetup(x) {
  for (let i = 0; i < x * x; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
  }
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
}

//uses forEach to iterate over each grid box to listen for mouseover
//depending on the newColor selection, will implement different code
function draw() {
  const gridElements = document.querySelectorAll('.box');

  gridElements.forEach((e) => {
    
    e.addEventListener('mouseover', () => {

      const checkClass = Array.from(e.classList);
      const numericalClassArr = checkClass.map(Number);


      switch (newColor) {

        case 'grayscale':
          const grayRGBValues = getGrayArr();
          const newGray = getGray(numericalClassArr);
          e.classList.add(`${newGray+1}`);
          e.style.backgroundColor = grayRGBValues[(newGray)];
          break;
        case 'rainbow':
          console.log(getRainbow());
          e.style.backgroundColor = `${getRainbow()}`;
          break;
        case 'erase':
          do {
            e.classList.remove(e.classList.item(1));
          } while (e.classList.length > 1);

          e.style.backgroundColor = 'white';
        default:
          e.style.backgroundColor = `${newColor}`;
      }
    });
  });
}

function colorSelection() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((e) => {
    e.addEventListener('click', () => {
      newColor = `${e.value}`;-
      console.log(newColor);
      })
  })
}

function clearScreen() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  if (newColor === 'white') {
    newColor = DEFAULT_COLOR;
  } 
  draw(newColor);  
  gridSetup(input.value);
}

function getGrayArr(numShades = 10) {
  const shades = [];
  let increment = (255/(numShades+1));

  for (i = 1; i <= numShades; i++) {
    let intensity = i * increment;
    let grayValueArr = `rgb(${intensity}, ${intensity}, ${intensity})`;
    shades.push(grayValueArr);
  }
  return shades.reverse();
}

function getGray(oldGrays, highestValue = 0) {
  for (i = 0; i < oldGrays.length; i++) {
    if (isNaN(oldGrays[i])) {
      continue;
    } else if (highestValue == 9) {
      break;
    } else if (oldGrays[i] >= highestValue) {
      highestValue = i;
    } 
  }
  return highestValue;
}

function getRainbow() {
  randomRGB = () => Math.floor(Math.random() * 255);
  
  let red = randomRGB();
  let green = randomRGB();
  let blue = randomRGB();

  randomColor = `rgb(${red}, ${green}, ${blue})`

  return randomColor;
}