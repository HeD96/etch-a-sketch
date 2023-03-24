//create body reference
//create container div
//create squares divs

const bodyDiv = document.body;
const containerDiv = document.createElement('div');
const squareDiv = document.createElement('div');

containerDiv.classList.add("container");
squareDiv.classList.add("square");

bodyDiv.appendChild(containerDiv);

StartingBoard();

function StartingBoard() {
    for (let i = 1; i <= 256; i++) {
        containerDiv.appendChild(squareDiv.cloneNode(true));
    }
}