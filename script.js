const gridContainer = document.getElementById('container');
gridContainer.setAttribute("style", "height: 600px; width: 600px; display: flex; flex-direction: colum; align-items: center; margin: auto; border: 7px solid black; border-radius: 5px");

function colorRandomizer() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const cellColor = `rgb(${r}, ${g}, ${b})`;
    return cellColor;
}
console.log(colorRandomizer())

function createGrid(container, rows = 16, cols = 16) {
    const cellContainer = document.getElementById('container');
    for(let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cellContainer.style.display = 'grid';
        cellContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        cellContainer.style.gridTemplateRows = `repeat(${ rows}, 1fr)`;
        cellContainer.style.width = '600px';
        cellContainer.style.height = '600px';
        cell.classList.add('grid-item');
        cell.style.width = '100%';
        cell.style.height = '100%';
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = colorRandomizer();
        });
       /* cell.style.border = 'black solid 2px';*/    // Border added to confirm cells were created
        cellContainer.appendChild(cell);
        
    }
}

createGrid('container');
