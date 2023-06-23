const container = document.querySelector(".container");

for (i = 0; i < 16 * 16; i++) {
  const box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
  box.innerText = `${i}`;
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