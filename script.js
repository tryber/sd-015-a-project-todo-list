function createTask() {
  const button = document.querySelector('#criar-tarefa');
  const input = document.querySelector('#texto-tarefa');
  const ol = document.querySelector('#lista-tarefas');

  function addTask() {    
    let task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = input.value;
    ol.appendChild(task);
    input.value = '';
    task.addEventListener('click', changeColor);
    task.addEventListener('dblclick', taskCompleted);
  }

  button.addEventListener('click', addTask);

}

  

createTask();

function changeColor(event) {
  let item = document.querySelector('.selected');
  if (item) {
    item.classList.remove('selected');
  } 
  event.target.classList.add('selected');

    /* event.target.removeAttribute('style');
  } else {
    for (let index = 0; index < item.length; index += 1) {
      if (item[index].style.backgroundColor){
        item[index].removeAttribute('style');
      }
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  } */
}

function taskCompleted() {
  event.target.classList.toggle('completed');
}

function clearButton() {
  let button = document.getElementById('apaga-tudo');  

  button.addEventListener('click', clearList);

  function clearList() {
    const li = document.querySelectorAll('.task');
    const ol = document.querySelector('#lista-tarefas'); 
    for (let index = 0; index < li.length; index += 1) {
      ol.removeChild(li[index]);
    }
  }
}

clearButton();

function removeTaskCompletedButton() {
  const button = document.getElementById('remover-finalizados');

  button.addEventListener('click', removeTaskCompleted);

  function removeTaskCompleted() {
    const li = document.querySelectorAll('.task');
    const ol = document.querySelector('#lista-tarefas');
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].classList.contains('completed')) {
        ol.removeChild(li[index]);
      }
    }    
  }
}

removeTaskCompletedButton();

function saveTasks() {
  const button = document.querySelector('#salvar-tarefas');  

  button.addEventListener('click', saveLocal);

  function saveLocal() {
    const li = document.querySelectorAll('.task');
    let liArray = [];
    let liClassArray = [];
    for (let index = 0; index < li.length; index += 1) {
      let textLi = li[index].innerHTML;
      let classLi = li[index].className;
      liArray.push(textLi);
      liClassArray.push(classLi);
    }
    localStorage.setItem('task', liArray);
    localStorage.setItem('classTask', liClassArray);
  } 
}

saveTasks();

window.onload = function () {
  let taskLoad = localStorage.getItem('task');
  let taskClassLoad = localStorage.getItem('classTask');
  if (taskLoad != undefined && taskClassLoad != undefined) {
    let listTaskLoad = taskLoad.split(',');
    let listTaskClassLoad = taskClassLoad.split(',');
    for (let index = 0; index < listTaskLoad.length; index += 1) {
      const li = document.createElement('li');
      li.innerHTML = listTaskLoad[index];
      li.className = listTaskClassLoad[index];
      const ol = document.querySelector('#lista-tarefas');

      ol.appendChild(li);
    }
  }
}

function moveUpTask() {
  const button = document.querySelector('#mover-cima');

  function moveUp() {
    const li = document.querySelectorAll('.task');
    const ol = document.querySelector('#lista-tarefas');
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].classList.contains('selected')) {
        if (index != 0) {
          let previousLi = li[index].previousElementSibling;
          ol.insertBefore(li[index], previousLi);
        }
      } 
    }
  }

  button.addEventListener('click', moveUp);
}

moveUpTask();

function moveDownTask() {
  const button = document.querySelector('#mover-baixo');

  function moveDown() {
    const li = document.querySelectorAll(".task");
    const ol = document.querySelector('#lista-tarefas');
    for (let index = 0; index < li.length; index += 1) {
      if(li[index].classList.contains('selected')) {
        if(index != li.length - 1) {
          let nextLi = li[index].nextElementSibling;
          ol.insertBefore(li[index], nextLi.nextElementSibling);
        }
      }
    }
  }

  button.addEventListener('click', moveDown);
}

moveDownTask();

function removeTaskSelectedButton() {
  const button = document.getElementById('remover-selecionado');

  button.addEventListener('click', removeTaskSelected);

  function removeTaskSelected() {
    const li = document.querySelectorAll('.task');
    const ol = document.querySelector('#lista-tarefas');
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].classList.contains('selected')) {
        ol.removeChild(li[index]);
      }
    }    
  }
}

removeTaskSelectedButton();