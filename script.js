const gridContainer = document.querySelector('.grid-container');

function createGrid(row, column) {
    let i = 0;
    while (i < row) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);
        i++;

        let j = 0;
        while (j < column) {
            const grid = document.createElement('div');
            grid.classList.add('grid-box');
            gridRow.appendChild(grid);
            j++;
        }
    }
}

function resetGrid() {
    grids.forEach(grid => grid.style.backgroundColor = 'white');
}

createGrid(16, 16);
const grids = document.querySelectorAll('.grid-box');
grids.forEach(grid => {
    grid.addEventListener('mouseover', () => grid.style.backgroundColor = 'blue');
});

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGrid);