const grid = document.querySelector('#grid');

for (i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    let letter = String.fromCharCode(97 + i);
    rowDiv.classList.add(`${letter}`);
    grid.appendChild(rowDiv);
    for (a = 0; a < 16; a++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add(`${a}`);
        // columnDiv.textContent = `${letter}${a}`
        rowDiv.appendChild(columnDiv);
    }
}