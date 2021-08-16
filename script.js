const inputText = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const createButton = document.getElementById('criar-tarefa');
const clearButton = document.getElementById('apaga-tudo');
const clearFinishedButton = document.getElementById('remover-finalizados');
const buttonSave = document.getElementById('salvar-tarefas')
let taskItens = document.getElementsByTagName('li');

//Function to create new task according to inputed text, clearing what the user typed and adding event listener to change background color when clicked
function createTask() {
    const task = document.createElement('li');
    taskList.appendChild(task);
    task.innerHTML = inputText.value;
    inputText.value = '';
    task.addEventListener('click', colorClick);
    task.addEventListener('dblclick', lineThrough);
    task.style.backgroundColor = 'white';
    task.className = 'to-do';
}

//Adding event listener to the button
createButton.addEventListener('click', createTask);

//Setting rgb(128, 128, 128) to the background color of the current clicked item and reset the others to white 
function colorClick(listItem) {
    for(let index = 0; index < taskItens.length; index = index + 1) {
        taskItens[index].style.backgroundColor = 'white';
    }
    listItem.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

//Function to set text decoration to 'line-through' using class name when double clicked
function lineThrough (dblClicked) {
    if(dblClicked.target.className === 'to-do') {
        dblClicked.target.className = 'completed';
    } else if(dblClicked.target.className === 'completed') {
        dblClicked.target.className = 'to-do';
    }
}

//Function to clear all the 'li' elements when the user clicks on the button 'apaga tudo'
function clearAll() {
    for(let index = (taskItens.length) - 1; index >= 0; index = index - 1) {
        taskList.removeChild(taskItens[index]);
    }
}

clearButton.addEventListener('click', clearAll);

//Function to clear all the 'li' elements with the class 'completed'
function clearFinished() {
    for(let index = (taskItens.length) - 1; index >= 0; index = index - 1) {
        if(taskItens[index].className === 'completed') {
            taskList.removeChild(taskItens[index]);
        }
    }
}

clearFinishedButton.addEventListener('click', clearFinished);

//Function to save tasks on local storage
function saveTasks() {
    for(let index = 0; index < taskItens.length; index = index + 1) {
        let setTask = 'task' + (index + 1);
        let taskClassKey = 'classname' + (index + 1);
        let value = taskItens[index].innerHTML;
        let taskClass = taskItens[index].className;
        localStorage.setItem(setTask, value);
        localStorage.setItem(taskClassKey, taskClass);
    }
    localStorage.setItem('numberOfTasks', taskItens.length);
}

buttonSave.addEventListener('click', saveTasks);

//Function to get tasks from local storage and append them to the ordered list using the classname to keep the functionality
window.onload = function getItens() {
    let numberOfTasks = localStorage.getItem('numberOfTasks');
    for(let index = 0; index < numberOfTasks; index += 1) {
        const getTask = document.createElement('li');
        let currentTask = 'task' + (index + 1);
        let currentTaskKey = 'classname' + (index + 1);
        getTask.innerHTML = localStorage.getItem(currentTask);
        getTask.className = localStorage.getItem(currentTaskKey);
        taskList.appendChild(getTask);
        getTask.addEventListener('click', colorClick);
        getTask.addEventListener('dblclick', lineThrough);
    }
}
