function createParagraph() {
  const paragraph = document.createElement('p');
  const myHeader = document.querySelector('header');
  myHeader.appendChild(paragraph);
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
}
createParagraph();

function createInput() {
  const input = document.createElement('input');
  const mySection = document.querySelector('section');
  mySection.appendChild(input);
  input.id = 'texto-tarefa';
}
createInput();

function createOrdList() {
  const ordList = document.createElement('ol');
  const olSection = document.getElementById('olSection');
  olSection.appendChild(ordList);
  ordList.id = 'lista-tarefas';
}
createOrdList();

function createButton() {
  const button = document.createElement('button');
  const mySection = document.querySelector('section');
  mySection.appendChild(button);
  button.id = 'criar-tarefa';
  button.innerHTML = 'Adicionar';
}
createButton();

function criaTarefa() {

  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const ordList = document.getElementById('lista-tarefas');

  button.addEventListener('click', function() {
    let listItem = document.createElement('li');
    ordList.appendChild(listItem);
    listItem.className = 'selected';
    listItem.innerHTML = input.value;
    input.value = '';

    listItem.addEventListener('click', changeBgColor);
    listItem.addEventListener('dblclick', lineTrough);
  });
}
criaTarefa();

function changeBgColor(event) {
  let listItem = document.querySelectorAll('.selected');
  for (let index = 0; index < listItem.length; index += 1){
    listItem[index].style.backgroundColor = '';
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function lineTrough(event) {

  event.target.classList.toggle('completed');
}

function clearButton() {
  const clearList = document.createElement('button');
  const buttonSection = document.getElementById('buttonSection');
  buttonSection.appendChild(clearList);
  clearList.innerHTML = 'Limpar Lista';
  clearList.id = 'apaga-tudo';
}
clearButton();

function clearItem() {

  const clearList = document.getElementById('apaga-tudo');
  const ordList = document.getElementById('lista-tarefas');

  clearList.addEventListener('click', function(){
    ordList.innerText = ''; // consultei essa página para entender que o innerText atribuido a uma string vazia removeria (na verdade substituí seu conteúdo pela string vazia) todos os descendentes de ordList : https://pt.stackoverflow.com/questions/441373/como-remover-todos-os-elementos-de-uma-div-em-javascript
  });
}
clearItem();

function createButtonClear() {

  const buttonClearComp = document.createElement('button');
  const buttonSection = document.getElementById('buttonSection');
  buttonSection.appendChild(buttonClearComp);
  buttonClearComp.innerHTML = 'Limpa Completos';
  buttonClearComp.id = 'remover-finalizados';
}
createButtonClear();

function clearCompleted() {

  const buttonClearComp = document.getElementById('remover-finalizados');

  buttonClearComp.addEventListener('click', function(){
    const listItem = document.querySelectorAll('.selected');
    for (let i = 0; i < listItem.length; i += 1) {
      if (listItem[i].classList.contains('completed')) {
        listItem[i].remove(); 
      }
    } 
  });
}
clearCompleted();
