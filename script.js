const buttonAdd = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const header = document.querySelector('header');
const textBox = document.createElement('input');
const buttonDeleted = document.querySelector('#apaga-tudo');
const finishedButton = document.querySelector('#remover-finalizados');

function inputTxt() {
  textBox.setAttribute('type', 'text');
  textBox.id = 'texto-tarefa';
  header.appendChild(textBox);
}
inputTxt();

function addTask() {
  buttonAdd.addEventListener('click', function eventeClick() {
    const itemList = document.createElement('li');
    itemList.innerText = document.getElementById('texto-tarefa').value;
    ol.appendChild(itemList);
    document.getElementById('texto-tarefa').value = null;
  });
}
addTask();

function selectedTask(task) {
  const selected = document.querySelector('.selected');
  if (!selected) {
    task.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    task.target.classList.add('selected');
  }
}
ol.addEventListener('click', selectedTask);

function completedTask(e) {
  if (!e.target.classList.contains('completed')) {
    e.target.classList.add('completed');
  } else {
    e.target.classList.remove('completed');
  }
}
ol.addEventListener('dblclick', completedTask);

function deletedTask() {
  buttonDeleted.addEventListener('click', function eventeClick() {
    ol.textContent = ' ';
  });
}
deletedTask();

function deletedTaskSelected() {
  finishedButton.addEventListener('click', () => {
    const allCompleted = document.querySelectorAll('.completed');
    for (let index = 0; index < allCompleted.length; index += 1) {
      allCompleted[index].remove();
    }
  });
}
deletedTaskSelected();
