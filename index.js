const docBody = document.body;
const divContainer = document.createElement("div");
const div = document.createElement("div");

divContainer.classList.add("container");
div.classList.add("square");

//making a board

const btnBoard = document.querySelector("button");

btnBoard.addEventListener('click', function() {
    let numSquares = prompt("Enter number of squares");
    console.log(numSquares);
});

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        divContainer.appendChild(div.cloneNode(true));
    }
}

docBody.appendChild(divContainer);

//hovering

const squares = document.querySelectorAll('.square');

squares.forEach(function(square) {
    square.addEventListener('mouseover', function() {
        this.classList.add('colored');
    });
});




