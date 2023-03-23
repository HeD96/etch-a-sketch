const docBody = document.body;
const divContainer = document.createElement("div");
const div = document.createElement("div");

divContainer.classList.add("container");
div.classList.add("square");

docBody.appendChild(divContainer);

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        divContainer.appendChild(div.cloneNode(true));
    }
}


//create body reference
//create container div
//create squares divs