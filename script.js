const button = document.getElementById('criar-tarefa');

function addList() {
  const input = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').innerHTML += `<li class='list'>${input}</li>`;
  document.getElementById('texto-tarefa').value = '';
  document.getElementById('texto-tarefa').focus();
}

button.addEventListener('click', addList);

const ol = document.getElementById('lista-tarefas');

const body = document.querySelector('body');

body.addEventListener('click', listSelect);

body.addEventListener('dblclick', completed);

function completed(e) {

  e.target.classList.toggle('completed');  

  // const taskComplete = document.querySelectorAll('.list');
  //  let list;
  // for (list of taskComplete) {
  //   let li = e.target;

  //   if(!li.classList.contains('completed')) {
  //     li.classList.add('completed');
  //   } else {
  //     li.removeAttribute('')
  //   }

    // switch(!li.classList.contains('completed')) {
    //   case true:
    //     li.classList.add('completed');
    //     break;
    //   case false: 
    //     li.classList.remove('completed');
    //     break;
    // }
   
    // if(li.classList.contains('completed')) {
    //   li.classList.remove('completed');
    // } else {
    //   li.classList.add('completed');
    // }

    // switch(li.classList.contains('completed')) {
    //   case true:
    //   li.classList.remove('completed');
    //   break;
    //   case false:
    //     li.classList.add('completed');
    //   break;
    // }

    // li.classList.toggle('completed');
  // }
}

function listSelect() {
  const selectList = document.querySelectorAll('.list');
   let list;
  for (list of selectList) {
    list.addEventListener('click', color);
  }
}

function color(e) {
  const selectList = document.querySelectorAll('.list');
   let list;
  for (list of selectList) {
    list.classList.remove('list-color');
  let li = e.target;

  li.classList.add('list-color');    
  }
}

const clear = document.querySelector('#apaga-tudo');

clear.addEventListener('click', clearTask)

function clearTask() {
  ol.innerHTML = '';
}

const removeTask = document.querySelector('#remover-finalizados');

removeTask.addEventListener('click', removeCompletedTasks);

function removeCompletedTasks() {
  const selectList = document.querySelectorAll('.list');
   let list;
  for (list of selectList) {
    if(list.classList.contains('completed')) {
      list.remove();
    }
  }
}