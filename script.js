const DEFAULT_SIZE = 16;

const container = document.querySelector('.container');
const input = document.querySelector('input');
const output = document.querySelector('output');
//const toggle = document.getElementById('eraser-toggle');

//shows default slider value
output.innerHTML = `${input.value} x ${input.value}`; 

//default grid on load
window.addEventListener('load', gridSetup(DEFAULT_SIZE));

//clears and draws new grid every time slider is moved
input.addEventListener('input', function () {
  output.innerHTML = `${input.value} x ${input.value}`;
  clearScreen();
  gridSetup(input.value);
});

function gridSetup(x) {
    for (let i = 0; i < x * x; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    }
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
  draw();
  }

function clearScreen() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  gridSetup(input.value);
}

function draw() {
  const gridElements = document.querySelectorAll('.box');
  gridElements.forEach((e) => {
    e.addEventListener ('mouseover', () => {
      e.classList.add('black');
    })
  })
}