const eraseAll = document.getElementById('apaga-tudo');
const addBtn = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ordList = document.getElementById('lista-tarefas');
const listText = document.getElementsByTagName('li');

function addNErase() {
  const listItem = document.createElement('li');
  listItem.innerHTML = input.value;
  ordList.appendChild(listItem);
  input.value = '';
}
addBtn.addEventListener('click', addNErase);

function paintItGray(event) {
  for (let i = 0; i < listText.length; i += 1) {
    if (listText[i].style.backgroundColor = 'gray') {
      listText[i].style.backgroundColor = 'white';
      event.target.style.backgroundColor = 'gray';
    }
  }
}
ordList.addEventListener('click', paintItGray);

function linhaDireta(event) {
  event.target.classList.toggle('completed');
}
ordList.addEventListener('dblclick', linhaDireta);

function bleach() {
  let totalTasks = listText.length - 1;
  for (let i = totalTasks; i >= 0; i -= 1) {
    listText[i].remove();
  }
}
eraseAll.addEventListener('click', bleach);