// Requisito 5 e 6-(Por ser uma ol, ja está ordenado os itens da lista por ordem de colocação)
let createBtn = document.getElementById('criar-tarefa');
let insertText = document.getElementById('texto-tarefa');
let ol = document.querySelector('#lista-tarefas');
let deleteBtn = document.getElementById('apaga-tudo');

createBtn.addEventListener('click', function () {
  let createLi = document.createElement('li');
  createLi.className = 'lista';
  let text = insertText.value;
  createLi.innerText = text;
  createLi.addEventListener('click', selectColor); // Requisito 8
  createLi.addEventListener('dblclick', taskDone); //Requisito 9
  ol.appendChild(createLi);
  insertText.value = '';
});

// Requisito 7 e 8
function selectColor(event) {
  let listaLi = document.querySelectorAll('.lista');
  for (index = 0; index < listaLi.length; index += 1) {
    listaLi[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

//Requisito 9
function taskDone(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

//Requisito 10
deleteBtn.addEventListener('click', function () {
  let lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    lis[index].remove();
  }
});

//Requisito 11
let removeFinished = document.getElementById('remover-finalizados');
removeFinished.addEventListener('click', function () {
  let taskFinished = document.querySelectorAll('.completed');
  for (let index = 0; index < taskFinished.length; index += 1) {
    taskFinished[index].remove();
  }
})
