const DEFAULT_GRIDSIZE = 16;
let rainbowMode = false;

// Reset the grid and remove all draw markings
function reset() {
    const columns = grid.children;
    for (r = 0; r < columns.length; r++) { // loop through each column in the grid
        let cells = columns[r].children; // store the cells in each column

        for (c = 0; c < cells.length; c++) {
            let cell = cells[c];
            cell.classList.remove("paint"); //if it's on, remove it
            cell.removeAttribute("style");
            cell.style.filter = "brightness(110%)";
        }
    }
}

// TODO: get this working
function toggleRainbowMode() {
    (rainbowMode) ? rainbowMode = false : rainbowMode = true;
}

function getRandomRGB() {
    let values = new Array(3);
    for (i = 0; i < 3; i++) {
        values[i] = Math.floor(Math.random() * 254) + 1;
    }

    return values;
}
function getUserGridSize() {
    gridSize = prompt("Enter your preferred grid size (x by x):");

    if (gridSize > 100) {
        alert("Maximum grid size is 100 x 100. Please enter a smaller number.");
        getUserGridSize();
    } else if (gridSize < 0) {
        alert("Please enter a number greater than 0.");
        getUserGridSize();
    } else if (isNaN(gridSize)) {
        alert("Please enter a valid value.");
        getUserGridSize();
    } else {
        generate(gridSize);
    }
}

function darken(value) {
    let currentBrightness = value.substring(value.indexOf("(") + 1, value.indexOf("%"));
    let newBrightness = currentBrightness - 10;
    if (newBrightness < 0) {
        newBrightness = 0;
    }

    return "brightness(" + newBrightness + "%)";
}

function generate(gridSize) {
    const grid = document.querySelector('#grid');

    // remove all child nodes before building
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (i = 0; i < gridSize; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add(`${i}`);
        grid.appendChild(columnDiv);

        for (a = 0; a < gridSize; a++) { //for each row, add "gridsize" column divs
            const rowDiv = document.createElement('div');
            rowDiv.classList.add(`${a}`);
            rowDiv.classList.add("cell");
            rowDiv.style.filter = "brightness(110%)";
            // rowDiv.textContent = `${i}${a}`

            rowDiv.addEventListener('mouseover', () => {
                // Paint with default color
                // rowDiv.classList.add('paint');

                // Paint with rainbow
                // let values = getRandomRGB();
                // rowDiv.setAttribute('style', `background: rgb(${values[0]}, ${values[1]}, ${values[2]})`);

                // Gradually darken over time
                rowDiv.classList.add('paint');
                rowDiv.style.filter = darken(rowDiv.style.filter);

                // Rough tracing
                // rowDiv.addEventListener('mouseenter', () => {
                //     rowDiv.classList.add('paint');
                // });

                // rowDiv.addEventListener('mouseleave', () => {
                //     rowDiv.classList.remove('paint');
                // });
            });

            columnDiv.appendChild(rowDiv);
        }
    }
}

generate(DEFAULT_GRIDSIZE);