const gridContainer = document.querySelector('.grid-container');

createGrid(16);

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGrid);

const color = document.querySelector('.color');
color.addEventListener('click', trailMouseColor);

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', trailMouseRainbow);

const colorpicker = document.querySelector('.colorpicker')
colorpicker.addEventListener('input', colorPicker);

const eraser = document.querySelector('.eraser')
eraser.addEventListener('click', trailMouseWhite);

const newCanvas = document.querySelector('.new')
newCanvas.addEventListener('click', promptUser);

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
    trailMouseColor();
}

function trailMouseColor() {
    const grids = document.querySelectorAll('.grid-box');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = colorpicker.value);
    });
}

function trailMouseRainbow() {
    const grids = document.querySelectorAll('.grid-box');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`);
    });
}

function trailMouseWhite() {
    const grids = document.querySelectorAll('.grid-box');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = 'white');
    });
}

function colorPicker() {
    const grids = document.querySelectorAll('.grid-box');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', (event) => event.target.style.backgroundColor = colorpicker.value)
    });
}

function resetGrid() {
    const grids = document.querySelectorAll('.grid-box');
    grids.forEach(grid => grid.style.backgroundColor = 'white');
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

