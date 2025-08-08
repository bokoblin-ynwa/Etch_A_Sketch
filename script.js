const gridContainer = document.getElementById('container');
gridContainer.setAttribute("style", "height: 600px; width: 600px; display: flex; flex-direction: colum; align-items: center; margin: auto; border: 7px solid black; border-radius: 5px");
const colorBtn = document.getElementById('colBtn');
const blackBtn = document.getElementById('blkBtn');
const sizeBtn = document.getElementById('cellBtn');

function colorRandomizer() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const cellColor = `rgb(${r}, ${g}, ${b})`;
    return cellColor;
}
console.log(colorRandomizer())

function createGrid(container, size = 16) {
    const cellContainer = document.getElementById('container');
    for(let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cellContainer.style.display = 'grid';
        cellContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        cellContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        cellContainer.style.width = '600px';
        cellContainer.style.height = '600px';
        cell.classList.add('grid-item');
        cell.style.width = '100%';
        cell.style.height = '100%';
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = colorRandomizer();
        });
        cellContainer.appendChild(cell);
        blackBtn.addEventListener("click", () => {
            cell.addEventListener('mouseover', function(){
                cell.style.backgroundColor = "black"
            });
        });
        colorBtn.addEventListener("click", () => {
            cell.addEventListener('mouseover', function () {
                cell.style.backgroundColor = colorRandomizer()
            });
        });
    }
}

createGrid('container');

function greaterGrid() {
    gridContainer.textContent=""
    const newSize = prompt("please enter a number up to 100, no greater!:");
    if (newSize === null) {
        return;
    }
    if (isNaN(newSize) || newSize <= 0) {
        alert("Please enter a valid number");
        return;
    }
    if (newSize > 100) {
        alert("Please enter a valid number, maximum value is 100");
        return;
    }
    createGrid(container, newSize)
}
sizeBtn.addEventListener("click", function() {
    greaterGrid()
});
