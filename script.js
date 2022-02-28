const gridContainer = document.querySelector('.grid-container');

createGrid(16);

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGrid);

const black = document.querySelector('.black');
black.addEventListener('click', trailMouseBlack);

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', trailMouseRainbow);

function createGrid(number) {
    let i = 0;
    while (i < number) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);
        i++;

        let j = 0;
        while (j < number) {
            const grid = document.createElement('div');
            grid.classList.add('grid-box');
            gridRow.appendChild(grid);
            j++;
        }
    }
    trailMouseBlack();
}

function trailMouseBlack() {
    const grids = document.querySelectorAll('.grid-box');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = 'black');
    });
}

function trailMouseRainbow() {
    const grids = document.querySelectorAll('.grid-box');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`);
    });
}



function resetGrid() {
    const grids = document.querySelectorAll('.grid-box');
    grids.forEach(grid => grid.style.backgroundColor = 'white');
    promptUser();
}

function promptUser() {
    let a = 0;
    do {
        a = prompt("How many boxes for each side?");
    } while (a > 100 || a < 1);

    removeGrid();
    createGrid(a);
}

function removeGrid() {
    const grids = document.querySelectorAll('.grid-box');
    const gridRows = document.querySelectorAll('.grid-row');
    grids.forEach(grid => {
        grid.remove();
    })
    gridRows.forEach(gridRow => {
        gridRow.remove();
    })
}

function randomColors() {
    return Math.floor(Math.random() * 255) + 1;
}