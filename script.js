const DEFAULT_SIZE = 16;

const container = document.querySelector('.container');
const slider = document.getElementById('slider');
const output = document.getElementById('demo');
output.innerHTML = slider.value; //default slider value

window.addEventListener('load', gridDraw(DEFAULT_SIZE));

slider.oninput = function() {
  let gridSize = slider.value;
  output.innerHTML = gridSize;
  gridDraw(gridSize);
}

function gridDraw(sliderInput) {
  for (i = 0; i < sliderInput * sliderInput; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
    box.innerText = `${i}`; //temp #s div boxes so I can see changes
    box.addEventListener('mouseover', function() {
      box.classList.add('shift');
    })
  }
}

//resets grid for resizing
function resetGrid() {

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