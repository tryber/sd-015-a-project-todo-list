const btnTarefa = document.querySelector('#criar-tarefa');
const task = document.querySelector('#texto-tarefa');
const list = document.getElementById('lista-tarefas');
const selected = document.getElementsByClassName('selected');
const removeTask = document.getElementById('apaga-tudo');
const done = document.getElementsByClassName('completed');
const btnRemove = document.getElementById('remover-finalizados');
// const listChild = document.getElementById('lista-tarefas').children;
function changClass(e) {
  if (selected[0]) {
    selected[0].classList.remove('selected');
  }
  e.target.classList.add('selected');
}

function taskDone(t) {
  const e = t.target;
  if (e.className.includes('completed')) {
    e.classList.remove('completed');
  } else {
    e.classList.add('completed');
  }
}

function creatTask() {
  btnTarefa.addEventListener('click', () => {
    const creaTask = document.createElement('li');
    creaTask.innerText = task.value;
    creaTask.className = 'tasks';
    creaTask.addEventListener('click', changClass);
    creaTask.addEventListener('dblclick', taskDone);
    list.appendChild(creaTask);
  });
}
creatTask();

function removeTasks() {
  removeTask.addEventListener('click', () => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
}

removeTasks();

function removeDone() {
  btnRemove.addEventListener('click', () => {
    while (done.length > 0) {
      done[0].remove();
    }
  });
}
removeDone();
