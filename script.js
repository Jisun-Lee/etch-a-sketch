const DEFAULT_SIZE = 16;

const container = document.querySelector('.container');
const input = document.querySelector('input');
const output = document.querySelector('output');
output.innerHTML = input.value; //default slider value

window.addEventListener('load', gridDraw(DEFAULT_SIZE));

input.addEventListener('input', function () {
  output.innerHTML = input.value;
  clearScreen();
  gridDraw(input.value);
  console.log(input.value);
});

function gridDraw(x) {
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
  console.log(x);
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

//resets grid for resizing
function clearScreen() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
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