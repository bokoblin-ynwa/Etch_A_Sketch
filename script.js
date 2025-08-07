const gridContainer = document.getElementById('container');
gridContainer.setAttribute("style", "height: 600px; width: 600px; background-color:rgb(94, 233, 246); display: flex; flex-direction: colum; align-items: center; margin: auto; border: 7px solid black;");


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
       /* cell.style.border = 'black solid 2px';*/    // Border added to confirm cells were created
        cellContainer.appendChild(cell);
        
    }
}

createGrid('container');