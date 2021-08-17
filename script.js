const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const removeButton = document.querySelector('#apaga-tudo');
const removeCompletedButton = document.querySelector('#remover-finalizados');

function clickGray(event) {
  const li = event.target;
  // pinte todas as li`s diferentes da target de branco
  for (let i = 0; i < document.querySelectorAll('#listItem').length; i++){
    if (document.querySelectorAll('#listItem')[i] !== li){
      document.querySelectorAll('#listItem')[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }   
  }
  // troque a cor da li target
  if (li.style.backgroundColor === "rgb(128, 128, 128)"){
    li.style.backgroundColor = 'rgb(255, 255, 255';
  } else {
    li.style.backgroundColor = 'rgb(128, 128, 128';
  }
}

function addTask() {
  const stringText = document.querySelector('#texto-tarefa').value;
  const createList = document.createElement('li');
  createList.id = 'listItem';
  createList.innerHTML = stringText;
  taskList.appendChild(createList);
  document.querySelector('#texto-tarefa').value = '';
  createList.addEventListener('click', clickGray);
  createList.addEventListener('dblclick', lineThrough);
}

function removeTask() {
    for(let i = document.querySelectorAll('#listItem').length - 1; i >= 0; i--){
        taskList.removeChild(document.querySelectorAll('#listItem')[i]);
    } 
    
}

function removeCompleted() {
  for(let i = document.querySelectorAll('.completed').length - 1; i >= 0; i--){
      taskList.removeChild(document.querySelectorAll('.completed')[i]);
  }
}

addButton.addEventListener('click', addTask);
removeButton.addEventListener('click', removeTask);
removeCompletedButton.addEventListener('click', removeCompleted);

function lineThrough(event) {
  let li = event.target;
  if (li.className === ""){
      li.className = 'completed';
  } else {
      li.className = "";
  }
}