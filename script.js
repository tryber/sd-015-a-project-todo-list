const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ol")
const listElements = list.children;
const buttonRemove = document.querySelector("#apaga-tudo")
const buttonRemoveDone = document.querySelector("#remover-finalizados")

button.addEventListener("click", addFromInputToList);

function addFromInputToList(event) {
    let item = input.value;
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    list.appendChild(listItem)
    list.addEventListener("click", colorChanger)
    list.addEventListener("dblclick", completedItem)
    input.value = "";
}


function colorChanger(event) {
    let actualListElement = event.target

    for(index = 0; index < listElements.length; index += 1) {
        listElements[index].style.backgroundColor = "white"
    }
    
    if (actualListElement.style.backgroundColor === 'rgb(128,128,128)') {
        actualListElement.removeAttribute("style")
    } else {
        actualListElement.style.backgroundColor = 'rgb(128,128,128)'
    }
    
}

function completedItem(event) {
    let actualListElement = event.target
    if (actualListElement.className.includes("completed")) {
        actualListElement.classList.remove("completed")
    } else {
        actualListElement.className = "completed"
    }
}

buttonRemove.addEventListener("click", removeChild);

function removeChild(event) {
    for (let index = listElements.length; index > 0; index -= 1) {
        list.removeChild(listElements[0])
    }
}

buttonRemoveDone.addEventListener("click", removeDone);

function removeDone(event) {
    let doneItems = document.querySelectorAll(".completed");
    for (index = 0; index < doneItems.length; index += 1) {
        list.removeChild(doneItems[index])
    }
}