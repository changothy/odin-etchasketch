const DEFAULT_GRIDSIZE = 16;

function reset(){
    gridSize = prompt("Enter your preferred grid size (x by x):");

    if (gridSize > 100) {
        alert("Maximum grid size is 100 x 100. Please enter a smaller number.");
        reset();
    } else if (gridSize < 0) {
        alert("Please enter a number greater than 0.");
        reset();
    } else if (isNaN(gridSize)) {
        alert("Please enter a valid value.");
        reset();
    } else {
        generate(gridSize);
    }
}

function generate(gridSize){
    const grid = document.querySelector('#grid');

    // remove all child nodes before building
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(`${i}`);
        grid.appendChild(rowDiv);

        for (a = 0; a < gridSize; a++) { //for each row, add 16 column divs
            const columnDiv = document.createElement('div');
            columnDiv.classList.add(`${a}`);
            columnDiv.classList.add("cell");
            // columnDiv.textContent = `${i}${a}`

            columnDiv.addEventListener('mouseover', () => {
                columnDiv.classList.add('paint');
            });

            // columnDiv.addEventListener('mouseenter', () => {
            //     columnDiv.classList.add('paint');
            // });

            // columnDiv.addEventListener('mouseleave', () => {
            //     columnDiv.classList.remove('paint');
            // });

            rowDiv.appendChild(columnDiv);
        }
    }
}

generate(DEFAULT_GRIDSIZE);