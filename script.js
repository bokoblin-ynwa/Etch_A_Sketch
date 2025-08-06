const gridContainer = document.getElementById('container');
const rows = 16;
const cols = 16;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

const pixles = document.getElementsByClassName("")