const header = document.createElement('header');
const tagh1 = document.createElement('h1');
const tagSectionCabecalho = document.createElement('section');
const input = document.createElement('input');
const listaOrdenada = document.createElement('ol');
const buttonCriarTarefa = document.createElement('button');
const buttonApagaTudo = document.createElement('button');

buttonCriarTarefa.innerHTML = 'Inserir';
buttonApagaTudo.innerHTML = 'Deletar';
input.placeholder = 'Insira aqui sua tarefa';
tagh1.innerText = 'Minha Lista de Tarefas';
tagSectionCabecalho.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

function criaID(elemento, ID) {
  elemento.id = ID;
}

function bodyChild(element) {
  document.body.appendChild(element);
}

function childAppend(elementoPai, elementoFilho) {
  elementoPai.appendChild(elementoFilho);
}

function botaoCriarTarefa() {
  const textoValue = document.querySelector('#texto-tarefa');
  const ordenedList = document.querySelector('#lista-tarefas');

  buttonCriarTarefa.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.classList.add('lista');
    newLi.innerText = textoValue.value;
    ordenedList.appendChild(newLi);
    textoValue.value = '';
  });
}

function apagaTarefa() {
  const ordenedList = document.querySelectorAll('ol');

  buttonApagaTudo.addEventListener('click', () => {
    const pegaLista = document.querySelectorAll('.lista');
    for (let i = 0; i < pegaLista.length; i += 1) {
      pegaLista[i].remove();
    }
  })
}

function changeBackgroundColoronClick() {
  const listElmnt = document.querySelectorAll('ol');

  for (let i = 0; i < listElmnt.length; i += 1) {
    listElmnt[i].addEventListener('click', (event) => {
      removeBackgroundColorChanges();
      event.target.classList.add('selected');
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      return event.target;
    });
  }
}

function removeBackgroundColorChanges() {
  const removeHighlight = document.getElementsByClassName('lista');

  for (let i = 0; i < removeHighlight.length; i += 1) {
    if (removeHighlight[i].classList.contains('selected')) {
      removeHighlight[i].classList.remove('selected');
      removeHighlight[i].style.backgroundColor = '';
    }
  }
}

function doubleClick() {
  const olList = document.querySelectorAll('ol');

  for (let i = 0; i < olList.length; i += 1) {
    olList[i].addEventListener('dblclick', (event) => {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  }
}

bodyChild(header);
bodyChild(tagSectionCabecalho);
childAppend(header, tagh1);
bodyChild(input);
bodyChild(listaOrdenada);
bodyChild(buttonCriarTarefa);
bodyChild(buttonApagaTudo);
criaID(tagSectionCabecalho, 'funcionamento');
criaID(input, 'texto-tarefa');
criaID(listaOrdenada, 'lista-tarefas');
criaID(buttonCriarTarefa, 'criar-tarefa');
criaID(buttonApagaTudo, 'apaga-tudo');
botaoCriarTarefa();
changeBackgroundColoronClick();
doubleClick();
apagaTarefa();
