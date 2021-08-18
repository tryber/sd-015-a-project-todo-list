const mainSection = document.getElementById('main-section');
const olList = '#lista-tarefas';

function addInput() {
  const inputField = document.createElement('input');
  mainSection.appendChild(inputField);
  inputField.id = 'texto-tarefa';
}
addInput();

function createButtonAdd() {
  const buttonAdd = document.createElement('button');
  mainSection.appendChild(buttonAdd);
  buttonAdd.id = 'criar-tarefa';
  buttonAdd.innerText = 'Adicionar';
}
createButtonAdd();

function createOrderList() {
  const orderList = document.createElement('ol');
  mainSection.appendChild(orderList);
  orderList.id = 'lista-tarefas';
}
createOrderList();

const itensLista = document.getElementsByClassName('itens-lista-individuais');

function colorListItem(event) {
  const alvo2 = event.target;
  for (let i = 0; i < itensLista.length; i += 1) {
    itensLista[i].classList.remove('selecionado');
    itensLista[i].style.backgroundColor = 'transparent';
    alvo2.style.backgroundColor = 'rgb(128, 128, 128)';
    alvo2.classList.add('selecionado');
  }
}

function strikeItem(event) {
  const alvo3 = event.target;
  // if (!alvo3.classList.contains('completed')) {
  //   alvo3.classList.add('completed');
  // } else {
  //   alvo3.classList.remove('completed');
  // }
  alvo3.classList.toggle('completed');
}

function addTask() {
  const inputField = document.querySelector('#texto-tarefa');
  const orderList = document.querySelector(olList);
  const listItem = document.createElement('li');
  orderList.appendChild(listItem);
  listItem.className = 'itens-lista-individuais';
  listItem.innerText = inputField.value;
  inputField.value = '';
  listItem.addEventListener('click', colorListItem);
  listItem.addEventListener('dblclick', strikeItem);
}

const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', addTask);

function newSectionFooter() {
  const sectionFooter = document.createElement('section');
  mainSection.appendChild(sectionFooter);
  sectionFooter.id = 'section-footer';
}
newSectionFooter();

const sectionFooter = document.getElementById('section-footer');

function createButtonClear() {
  const buttonClear = document.createElement('button');
  sectionFooter.appendChild(buttonClear);
  buttonClear.id = 'apaga-tudo';
  buttonClear.innerText = 'Apagar Tudo';
}
createButtonClear();

function clearAll() {
  const olListParent = document.querySelector(olList);
  while (olListParent.firstChild) {
    olListParent.removeChild(olListParent.firstChild);
  }
}

const buttonClear = document.getElementById('apaga-tudo');
buttonClear.addEventListener('click', clearAll);

function createButtonRemoveDone() {
  const buttonRemoveDone = document.createElement('button');
  sectionFooter.appendChild(buttonRemoveDone);
  buttonRemoveDone.id = 'remover-finalizados';
  buttonRemoveDone.innerText = 'Remover Finalizados';
}
createButtonRemoveDone();

function removeDone() {
  const liCompleted = document.getElementsByClassName('completed');
  while (liCompleted.length) {
    liCompleted[0].remove();
  }
}

const buttonRemoveDone = document.getElementById('remover-finalizados');
buttonRemoveDone.addEventListener('click', removeDone);

function createButtonUp() {
  const buttonUp = document.createElement('button');
  sectionFooter.appendChild(buttonUp);
  buttonUp.id = 'mover-cima';
  buttonUp.innerHTML = '&#5169;';
}
createButtonUp();

function createButtonDown() {
  const buttonDown = document.createElement('button');
  sectionFooter.appendChild(buttonDown);
  buttonDown.id = 'mover-baixo';
  buttonDown.innerHTML = '&#5167;';
}
createButtonDown();

function removeSelected() {
  const buttonRemoveSelected = document.createElement('button');
  sectionFooter.appendChild(buttonRemoveSelected);
  buttonRemoveSelected.id = 'remover-selecionado';
  buttonRemoveSelected.innerHTML = 'Remover Selecionado';
}
removeSelected();

// MoveUp e MoveDown feitos com ajuda do Eric Cruz.

// function moveUp() {
//   for (let i = 0; i < itensLista.length; i += 1) {
//     if (itensLista[i].classList.contains('selecionado') && itensLista[i].previousSibling) {
//       const beforeSibling = itensLista[i].previousSibling;
//       beforeSibling.before(itensLista[i]);
//       break;
//     }
//   }
// }

// function moveDown() {
//   for (let i = 0; i < itensLista.length; i += 1) {
//     if (itensLista[i].classList.contains('selecionado') && itensLista[i].nextSibling) {
//       const afterSibling = itensLista[i].nextSibling;
//       afterSibling.after(itensLista[i]);
//       break;
//     }
//   }
// }

function moveUp() {
  if (document.getElementsByClassName('selecionado')[0]) {
    const liCompleted = document.getElementsByClassName('selecionado')[0];
    if (liCompleted.previousSibling) {
      const beforeSibling = liCompleted.previousSibling;
      beforeSibling.before(liCompleted);
    }
  }
}

function moveDown() {
  if (document.getElementsByClassName('selecionado')[0]) {
    const liCompleted = document.getElementsByClassName('selecionado')[0];
    if (liCompleted.nextSibling) {
      const afterSibling = liCompleted.nextSibling;
      afterSibling.after(liCompleted);
    }
  }
}

function removeSelectedItem() {
  const RemoveSelected = document.getElementsByClassName('selecionado');
  while (RemoveSelected.length) {
    RemoveSelected[0].remove();
  }
}

const buttonRemoveSelected = document.getElementById('remover-selecionado');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
buttonUp.addEventListener('click', moveUp);
buttonDown.addEventListener('click', moveDown);
buttonRemoveSelected.addEventListener('click', removeSelectedItem);

function newDiv() {
  const divSave = document.createElement('div');
  mainSection.appendChild(divSave);
  divSave.id = 'div-save';
}
newDiv();

function createButtonSave() {
  const buttonSave = document.createElement('button');
  const newDivTag = document.getElementById('div-save');
  newDivTag.appendChild(buttonSave);
  buttonSave.id = 'salvar-tarefas';
  buttonSave.innerHTML = 'Salvar Tarefas';
}
createButtonSave();

function saveData() {
  const nomesArray = [];
  const classesArray = [];
  const colorArray = [];
  for (let i = 0; i < itensLista.length; i += 1) {
    nomesArray.push(itensLista[i].innerText);
    colorArray.push(itensLista[i].style.backgroundColor);
    classesArray.push(itensLista[i].className);
  }
  console.log(classesArray);
  console.log(colorArray);
  console.log(nomesArray);
  localStorage.setItem('nome', JSON.stringify(nomesArray));
  localStorage.setItem('cor', JSON.stringify(colorArray));
  localStorage.setItem('classes', JSON.stringify(classesArray));
}

const buttonSaveA = document.getElementById('salvar-tarefas');
buttonSaveA.addEventListener('click', saveData);

function reloadItens() {
  const orderList = document.querySelector(olList);
  const nomesArrayVolta = JSON.parse(localStorage.getItem('nome'));
  const colorArrayVolta = JSON.parse(localStorage.getItem('cor'));
  const classesArrayVolta = JSON.parse(localStorage.getItem('classes'));
  if (nomesArrayVolta !== null) {
    for (let i = 0; i < nomesArrayVolta.length; i += 1) {
      const listItem = document.createElement('li');
      orderList.appendChild(listItem);
      listItem.innerText = nomesArrayVolta[i];
      listItem.className = classesArrayVolta[i];
      listItem.style.backgroundColor = colorArrayVolta[i];
      listItem.addEventListener('click', colorListItem);
      listItem.addEventListener('dblclick', strikeItem);
    }
  }
}

window.onload = reloadItens;
