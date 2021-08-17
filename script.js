let inputTasks = document.getElementById("texto-tarefa");
let createTask = document.getElementById("criar-tarefa");
let taskList = document.getElementById("lista-tarefas");
let body = document.querySelector('body');
let loadlist = window

createTask.addEventListener("click", addTask);
body.addEventListener('click', checkItem);
body.addEventListener("dblclick", checkItem2);
document.getElementById("apaga-tudo").addEventListener("click", eraseList);
document.getElementById("remover-finalizados").addEventListener("click", removeCheck);
document.getElementById("salvar-tarefas").addEventListener("click", saveList);
document.getElementById("mover-cima").addEventListener("click", upList);
document.getElementById("mover-baixo").addEventListener("click", downList);
document.getElementById("remover-selecionado").addEventListener("click", removeSelected);

function addTask (){
    let taskValue = inputTasks.value;
    let newTask = document.createElement("li");
    newTask.innerHTML = taskValue;
    taskList.appendChild(newTask);
    inputTasks.value = "";
}

function addSelected(element){
    let tasks = Array.from(taskList.children);
    for (let i = 0; i < tasks.length; i += 1){
        let actualTask = tasks[i];
        if(actualTask.classList.contains("selected")){
            actualTask.classList.remove("selected");
        }
    }
    element.classList.add("selected");
}

function checkItem(originEvent) {
  const element = originEvent.target;
  if (element.parentNode.id === 'lista-tarefas') {
    addSelected(element);
  }
}

function markCompleted(element) {
  if (element.classList.contains('completed')) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}

function checkItem2(originEvent) {
  let element = originEvent.target;
  if (element.parentNode.id === "lista-tarefas") {
    markCompleted(element);
  }
}

function eraseList(){
    taskList.innerText = "";
}

function removeCheck(){
  let arrayList = Array.from(taskList.children);
    for(let i = 0; i < arrayList.length; i += 1){
        if(arrayList[i].classList.contains("completed")){
            taskList.removeChild(arrayList[i]);
        }
    }
}

function loadList() {
  taskList.innerHTML = localStorage.getItem('tasks');
}
window.onload = loadList;

function saveList() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

function upList() {
  let arrayList = Array.from(taskList.children);
  for( let i = 1; i < arrayList.length; i += 1) {
    if(arrayList[i].classList.contains("selected")) {
      taskList.insertBefore(arrayList[i], arrayList[i-1]);
    }
  }
}

function downList() {
  let arrayList = Array.from(taskList.children);
  for( let i = 0; i < arrayList.length; i += 1) {
    if(arrayList[i].classList.contains("selected")) {
      taskList.insertBefore(arrayList[i], arrayList[i+2]);
    }
  }
}

function removeSelected(){
  let arrayList = Array.from(taskList.children);
    for(let i = 0; i < arrayList.length; i += 1){
        if(arrayList[i].classList.contains("selected")){
            taskList.removeChild(arrayList[i]);
        }
    }
}
