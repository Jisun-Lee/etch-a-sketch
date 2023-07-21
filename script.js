const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';

let currentColor = DEFAULT_COLOR;

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
input.addEventListener('input', function () {
  output.innerHTML = `${input.value} x ${input.value}`;
  clearScreen();
  colorSelection();
  draw(currentColor);
});

function gridSetup(x) {
  for (let i = 0; i < x * x; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
  }
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
}

function draw(color) {
  color = currentColor;
  const gridElements = document.querySelectorAll('.box');

  gridElements.forEach((e) => {
    
    e.addEventListener('mouseover', () => {
      const rgbGrays = getGray(10); //array of RGB grayscale values
      const classListArr = Array.from(e.classList);
      const grayLevel = classListArr.map(Number); //number array of current class values
      let highestValue = 0;

      if (color =='grayscale') {
        for (i = 0; i < grayLevel.length; i++) {
          if (isNaN(grayLevel[i])) {
            highestValue = 0;
          } else if (grayLevel[i] > highestValue) {
            highestValue = grayLevel[i];
          } 
        }
        if (highestValue <= (10-1)) {
          e.classList.add(`${highestValue + 1}`);
          e.style.backgroundColor = rgbGrays[(highestValue+1)];
        }
      } else if (color == 'rainbow') {
        //set background color to randomly generated RGB color
      } else {
        e.style.backgroundColor = `${color}`;
      }
    })
  })
}

function colorSelection() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((e) => {
    e.addEventListener('click', () => {
      currentColor = `${e.value}`;
      draw(currentColor);
      console.log(currentColor);
      })
  })
}

function clearScreen() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  gridSetup(input.value);
  console.log(currentColor);
  if (currentColor === 'white') {
    currentColor = DEFAULT_COLOR;
  } 
  draw(currentColor);
}

function getGray(numShades) {
  const shades = [];
  let increment = (255/(numShades));

  for (i = 0; i < numShades; i++) {
    let intensity = i * increment;
    let grayValue = `rgb(${intensity}, ${intensity}, ${intensity})`;
    shades.push(grayValue);
  }
  shades.reverse();
  return shades;
}