let gridSize = 16;

const container = document.querySelector('.container');
const slider = document.getElementById('slider');
const output = document.getElementById('demo');
output.innerHTML = slider.value; //default slider value

slider.oninput = function() {
  let gridSize = slider.value;
  output.innerHTML = gridSize;
  
  for (i = 0; i < gridSize * gridSize; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  container.appendChild(box);
  box.innerText = `${i}`;
  box.addEventListener('mouseover', function() {
    box.classList.add('shift');
  })
}
}

console.log(slider.value);































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