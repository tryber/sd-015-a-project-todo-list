const list = document.getElementById('lista-tarefas');
const taskAdded = document.getElementById('texto-tarefa'); 
const addTaskButton = document.getElementById('criar-tarefa');

function getInputToList() {
    const newTask = document.createElement('li');
    newTask.innerText = taskAdded.value;

    
    list.appendChild(newTask);
    newTask.addEventListener('click', selection)
    newTask.addEventListener('dblclick', dbselection)
    taskAdded.value = '';
}

// consultado o repositorio https://github.com/tryber/sd-015-a-project-todo-list/pull/1/commits/0253bcab60342d2066b58d112dab124ebd6ac5cf
function selection (ev) {
    if (document.querySelector('.select')) {
        document.querySelector('.select').classList.remove('select');
    }
    ev.target.classList.add('select');
}

function dbselection (ev) {
    if (ev.target.className.includes('completed')) {
        document.querySelector('.completed').classList.remove('completed');
    } else {
    ev.target.classList.add('completed');
    }
}

addTaskButton.addEventListener('click', getInputToList);