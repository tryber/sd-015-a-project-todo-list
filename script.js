const inputText = document.getElementById("texto-tarefa");
const tasksList = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");

function includingTasks(){
    const task = document.createElement("li");
    task.innerHTML = inputText.value;
    task.addEventListener("click", colorCheck);
    task.addEventListener("dblclick", lineThrough);
    
    tasksList.appendChild(task);
    inputText.value = "";
}
buttonAdd.addEventListener("click", includingTasks);

function colorCheck(event){
    //limpar os outros itens da lista
    const itens = tasksList.getElementsByTagName("li");
    for(let index = 0; index < itens.length; index += 1){
        itens[index].style.backgroundColor = "transparent";
    }

    
    const clickedTask = event.target
    clickedTask.style.backgroundColor = "rgb(128,128,128)";

}

function lineThrough(event){
    const item = event.target;
    if(item.className.includes(" completed")){
        item.className = item.className.replace(" completed","");
    }else {
        item.className += " completed";
    }
}
