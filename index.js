//base elements creation

const bodyDiv = document.body;

const containerDiv = document.createElement('div');
containerDiv.classList.add("container");

const squareDiv = document.createElement('div');
squareDiv.classList.add("square");

bodyDiv.appendChild(containerDiv);

//button function

const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    ClearingBoard();
    CreatingNewBoard();
});

//initial board

StartingBoard();

//main functionality

function StartingBoard() { //default 16x16 board

    for (let i = 1; i <= 256; i++) {
        containerDiv.appendChild(squareDiv.cloneNode(true));
    }

    containerDiv.style.cssText = "grid-template-columns:repeat(16, 1fr);grid-template-rows: repeat(16, 1fr)";

    StartPainting();
}

function CreatingNewBoard() { //new custom board
    
    let gridRows = prompt('How many rows?');
    const squareNum = Math.pow(gridRows, 2);

    for (let i = 1; i <= squareNum; i++) {
        containerDiv.appendChild(squareDiv.cloneNode(true));
    }

    containerDiv.style.cssText = "grid-template-columns:repeat(" + gridRows + ", 1fr);grid-template-rows: repeat(" + gridRows + ", 1fr)";

    StartPainting();
}

function ClearingBoard() { //clear the board
    containerDiv.innerHTML = '';
}

function StartPainting() { //painting
    let paintSquares = document.querySelectorAll('.square');

    paintSquares.forEach(function(square) {
    square.addEventListener('mousemove', function() {
        this.style.backgroundColor = 'black';
    });
});
}
