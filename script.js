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
            grid.classList.add('grid-column');
            gridRow.appendChild(grid);
            j++;
        }
    }
}

createGrid(16, 16);