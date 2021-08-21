window.onload = function() {
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listOfTasks = document.querySelector('#lista-tarefas')
button.addEventListener('click', addTask)
function addTask() {
    let task = document.createElement('li');
    task.innerHTML = input.value;
    input.value = '';
    listOfTasks.appendChild(task);
    task.addEventListener('dblclick', done)
}
listOfTasks.addEventListener('click', greyColor);
function greyColor(event) {
    let allTask = document.getElementsByTagName('li')
    if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected')
    }
    event.target.classList.add('selected')
    
    
}
function done(event) {
    if (event.target.classList.contains('completed')) {
        document.querySelector('.completed').classList.remove('completed');
    } else {
    event.target.classList.add('completed');
    }
  
}
}
