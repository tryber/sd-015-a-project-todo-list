function addTask() {
    let taskList = document.getElementById("lista-tarefas");
    let newTaskValue = document.getElementById("texto-tarefa").value;
    let newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(newTaskValue));
    taskList.appendChild(newLi).id = "tarefa" + getListSize();
    resetInputValue()
    addEventClickToTask()
}

function resetInputValue() {
    document.getElementById("texto-tarefa").value = '';
}

function getListSize() {
    return document.querySelectorAll("li").length
}

function addEventClickToTask() {
    for (let i = 0; i < getListSize(); i += 1) {
        document.querySelectorAll('li')[i].addEventListener('click', selectTask);
        document.querySelectorAll('li')[i].addEventListener('dblclick', changeTaskCondition);
    }
}

function clearSelectedTasks() {
    for (let i = 0; i < getListSize(); i += 1) {
        document.querySelectorAll('li')[i].style.background = "white";
        document.querySelectorAll('li')[i].classList.remove('selected');
    }
}

function selectTask(task) {
    clearSelectedTasks()
    document.getElementById(task.target.id).classList.add('selected');
    task.target.style.background = 'rgb(128, 128, 128)';
}

function changeTaskCondition(task) {
    if (task.target.classList[0] != 'completed' && task.target.classList[1] != 'completed') {
    document.getElementById(task.target.id).classList.add('completed');
    task.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
    else {
        if (task.target.classList[0] === 'completed') {
            task.target.style.textDecoration = '';
            document.getElementById(task.target.id).classList.remove('completed');
        }
        else if (task.target.classList[1] === 'completed') {
            task.target.style.textDecoration = '';
            document.getElementById(task.target.id).classList.remove('completed');
        }
    }
}

function clearList() {
    let listSize = getListSize()
    for (let i = 0; i < listSize; i += 1) {
        document.querySelectorAll('li')[0].parentNode.removeChild(document.querySelectorAll('li')[0])
    }
}

function removeCompleted() {
    let completedTasks = document.querySelectorAll('.completed')
    let completedCount = completedTasks.length
    let listSize = getListSize()
    for (let i = 0; i < completedCount; i += 1) {
        document.querySelectorAll('.completed')[0].parentNode.removeChild(document.querySelectorAll('.completed')[0])
    }
    for (let i = 0; i < (listSize - completedCount); i += 1) {
        document.querySelectorAll('li')[i].id = ('tarefa' + (i+1))
        console.log(document.querySelectorAll('li')[i].id)
    }
}

function saveTasks() {
    localStorage.clear();
    for (let i = 0; i < getListSize(); i += 1) {
        localStorage.setItem("tarefa"+(i+1),(document.querySelector("#tarefa" + (i + 1)).innerHTML))
        if (document.querySelector("#tarefa" + (i + 1)).classList[0] === 'completed' || document.querySelector("#tarefa" + (i + 1)).classList[1] === 'completed')
            localStorage.setItem("tarefastatus"+(i+1),'completed')
        else {
            localStorage.setItem("tarefastatus"+(i+1),'incompleted')
        }
    }
}

function moveTaskUp() {
    let selectedTask = document.querySelector(".selected")
    if (selectedTask === null) {
        return alert('Selecione uma tarefa para mover para cima.')
    }
    let oldPosition = selectedTask.id.match(/\d/g) // https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
    let newPosition = oldPosition-1
    if (newPosition === 0) {
        alert('A tarefa já é o primeiro item da lista.')
    }
    else {
        document.querySelector('#tarefa' + newPosition).id = "tarefa" + oldPosition
        document.querySelector('.selected').id = "tarefa" + newPosition
        refreshTasks()
    }
}

function moveTaskDown() {
    let selectedTask = document.querySelector(".selected")
    if (selectedTask === null) {
        return alert('Selecione uma tarefa para mover para baixo.')
    }
    let oldPosition = parseInt(selectedTask.id.match(/\d/g)) // https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
    let newPosition = parseInt(oldPosition) + 1
    if (oldPosition === getListSize()) {
        alert('A tarefa já é o último item da lista')
    }
    else {
        document.querySelector('#tarefa' + newPosition).id = ("tarefa" + oldPosition)
        document.querySelector('.selected').id = "tarefa" + newPosition
        refreshTasks()
    }
}

function refreshTasks() {
    sessionStorage.clear();
    for (let i = 0; i < getListSize(); i += 1) {
        sessionStorage.setItem("tarefa"+(i+1),(document.querySelector("#tarefa" + (i + 1)).innerHTML))
        if (document.querySelector("#tarefa" + (i + 1)).classList[0] === 'completed' || document.querySelector("#tarefa" + (i + 1)).classList[1] === 'completed')
            sessionStorage.setItem("tarefastatus"+(i+1),'completed')
        else {
            sessionStorage.setItem("tarefastatus"+(i+1),'incompleted')
        }
            sessionStorage.setItem('itemselecionado', document.querySelector(".selected").id);
    }
    clearList()
    for (let i = 0; i < (sessionStorage.length/2-1); i += 1) {
        let taskList = document.getElementById("lista-tarefas");
        let newTaskValue = sessionStorage.getItem('tarefa' + (i+1));
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(newTaskValue));
        taskList.appendChild(newLi).id = "tarefa" + getListSize();
    }
    for (let i = 0; i < (getListSize()); i += 1) {
        if (sessionStorage.getItem("tarefastatus" + (i+1)) === 'completed')  {
            document.querySelector("#tarefa" + (i + 1)).classList.add('completed');
            document.querySelector("#tarefa" + (i + 1)).style.textDecoration = 'line-through solid rgb(0, 0, 0)';
        }
        if (("tarefa" + (i + 1)) === sessionStorage.getItem('itemselecionado')) {
            console.log('OK')
            document.querySelector("#tarefa" + (i + 1)).classList.add('selected');
            document.querySelector("#tarefa" + (i + 1)).style.background = 'rgb(128, 128, 128)';
        }
    }
    addEventClickToTask();
    sessionStorage.clear();
}

function removeSelectedTask() {
    let selectedTask = document.querySelector('.selected')
    let listSize = getListSize()
        document.querySelector('.selected').parentNode.removeChild(document.querySelector('.selected'))
    for (let i = 0; i < (listSize - 1); i += 1) {
        document.querySelectorAll('li')[i].id = ('tarefa' + (i+1))
    }
}

window.onload = function() {
    for (let i = 0; i < (localStorage.length/2); i += 1) {
        let taskList = document.getElementById("lista-tarefas");
        let newTaskValue = localStorage.getItem('tarefa' + (i+1));
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(newTaskValue));
        taskList.appendChild(newLi).id = "tarefa" + getListSize();
    }
    for (let i = 0; i < (getListSize()); i += 1) {
        if (localStorage.getItem("tarefastatus" + (i+1)) === 'completed')  {
            document.querySelector("#tarefa" + (i + 1)).classList.add('completed');
            document.querySelector("#tarefa" + (i + 1)).style.textDecoration = 'line-through solid rgb(0, 0, 0)';
        }
    }
    addEventClickToTask()
}