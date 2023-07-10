const DEFAULT_SIZE = 16;

const container = document.querySelector('.container');
const input = document.querySelector('input');
const output = document.querySelector('output');
output.innerHTML = `${input.value} x ${input.value}`; //shows default slider value

//default grid on load
window.addEventListener('load', gridDraw(DEFAULT_SIZE));

//draws new grid every time slider is moved
input.addEventListener('input', function () {
  output.innerHTML = `${input.value} x ${input.value}`;
  clearScreen();
  gridDraw(input.value);
});

function gridDraw(x) {
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
  for (i = 0; i < x * x; i++) {
    const box = document.createElement('div');
    container.appendChild(box);
    //box.className = `box${i}`;
    //box.innerText = `${i}`; //temp #s div boxes so I can see changes
    box.addEventListener('mouseover', function() {
      box.classList.add('shift');
    })
  }
}

function clearScreen() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  gridDraw(input.value);
}


































/*const boxes = [];

// creates the div boxes.
for (let i = 1; i <= 256; i++) {
  const divBox = {
    id: i,
    name: `divBox${i}`,
  };
  boxes.push(divBox.name);
}

console.log(boxes);
*/