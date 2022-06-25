const grid = document.querySelector('#grid');

for (i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    let letter = String.fromCharCode(97 + i); // retrieve the character for a-p
    rowDiv.classList.add(`${letter}`);
    grid.appendChild(rowDiv);

    for (a = 0; a < 16; a++) { //for each row, add 16 column divs
        const columnDiv = document.createElement('div');
        columnDiv.classList.add(`${a}`);
        columnDiv.classList.add("cell");
        // columnDiv.textContent = `${letter}${a}`

        columnDiv.addEventListener('mouseover', () => {
            columnDiv.classList.toggle('paint');
        });
        rowDiv.appendChild(columnDiv);
    }
}