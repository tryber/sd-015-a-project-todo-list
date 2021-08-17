const criarTarefa = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const textItem = document.getElementById('lista-tarefas');
criarTarefa.addEventListener('click', makeTask);

function deleteAll() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

function risk(event) {
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
  } else {
    event.target.className = '';
  }
}

function makeTask() {
  const itemTarefa = document.createElement('li');
  itemTarefa.innerText = textInput.value;
  textItem.appendChild(itemTarefa);
  document.getElementById('texto-tarefa').value = '';
  itemTarefa.addEventListener('click', () => {
    if (itemTarefa.style.backgroundColor == false) {
      itemTarefa.style.backgroundColor = 'rgb(128,128,128)';
    } else {
      itemTarefa.style.backgroundColor = 'white';
    }
  });
  const buttonDelete = document.getElementById('apaga-tudo');
  buttonDelete.addEventListener('click', deleteAll);
  itemTarefa.className = 'not-risk';
  itemTarefa.addEventListener('dblclick', risk);
}
