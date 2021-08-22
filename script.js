//Requisitos 5, 6, 7, 9, 10 e 11
function createAndDeleteTasks () {
    const buttonCreate = document.getElementById("criar-tarefa");
    const input = document.getElementById("texto-tarefa");
    const fatherItem = document.getElementById("lista-tarefas");
    const buttonClean = document.getElementById("apaga-tudo")
    const buttonFinish = document.getElementById("remover-finalizados")
    const buttonRemoveSelected = document.getElementById("remover-selecionado")

    buttonCreate.addEventListener("click", function (){
        let newItem = document.createElement("li");
        newItem.innerText = input.value;
        newItem.className ="tasks"
        newItem.addEventListener("click", function (event){
            let selected = document.getElementsByClassName("selected")
            for (let i = 0; i < selected.length; i += 1){
                selected[i].classList.remove("selected")
            }
            event.target.classList.add("selected")
        })
        newItem.addEventListener("dblclick", function(event){
            if (event.target.className === "tasks completed selected"){
                event.target.className = "tasks"
            } else {
                event.target.className = "tasks completed"
            }
           })
        fatherItem.appendChild(newItem);
        input.value = "";
    })
    buttonClean.addEventListener("click", function(){
        while (fatherItem.hasChildNodes()) {  
            fatherItem.removeChild(fatherItem.firstChild);
          }
    })
    buttonFinish.addEventListener("click", function(){
        let itemList = document.querySelectorAll(".completed")
        for (let i = 0; i < itemList.length; i += 1) {
            if (itemList[i].className = "completed") {
                fatherItem.removeChild(itemList[i])
            }
        }
    })
    buttonRemoveSelected.addEventListener("click", function() {
        let selectItem = document.querySelector(".selected")
        fatherItem.removeChild(selectItem)
    })
}

window.onload = function() {
    createAndDeleteTasks()
}





