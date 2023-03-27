const bodyDiv = document.body;
const containerDiv = document.createElement('div');
const squareDiv = document.createElement('div');
const btn = document.querySelector('button');

containerDiv.classList.add("container");
squareDiv.classList.add("square");

bodyDiv.appendChild(containerDiv);

StartingBoard();

btn.addEventListener('click', function() {

    ClearingBoard();
    CreatingNewBoard();
});

squareDiv.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'black';
})

function StartingBoard() {

    containerDiv.style.cssText = "grid-template-columns:repeat(16, 1fr);grid-template-rows: repeat(16, 1fr)";

    for (let i = 1; i <= 256; i++) {
        containerDiv.appendChild(squareDiv.cloneNode(true));
    }
}

function ClearingBoard() {
    containerDiv.innerHTML = '';
}

function CreatingNewBoard() {

    // if (gridRows > 100) {
    //     alert("Choose the number less than 100");
    // }

    let gridRows = prompt('How many rows?');
    const squareNum = Math.pow(gridRows, 2);

    // containerDiv.style.cssText = "grid-template-columns:repeat(" + gridRows + ", minmax(0, 1fr));grid-template-rows: repeat(" + gridRows + ", minmax(0, 1fr)";
    containerDiv.style.cssText = "grid-template-columns:repeat(" + gridRows + ", 1fr);grid-template-rows: repeat(" + gridRows + ", 1fr)";

    for (let i = 1; i <= squareNum; i++) {
        containerDiv.appendChild(squareDiv.cloneNode(true));
    }
}