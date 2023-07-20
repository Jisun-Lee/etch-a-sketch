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
      e.style.backgroundColor = `${color}`;
    })
  })
}

function colorSelection() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((e) => {
    e.addEventListener('click', () => {
      if (e.value == 'grayscale') {
        return;
      } else {
      currentColor = `${e.value}`;
      draw(currentColor);
      }
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