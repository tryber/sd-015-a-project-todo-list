const selectBody = document.querySelector('body');
const createMain = document.createElement('main');
createMain.className = 'borda';
selectBody.appendChild(createMain);

// Requisito 1 Criando o HEADER

function CreateHeader () {  
  const creatHeader = document.createElement('header');
  const createTitle = document.createElement('h1');
  createTitle.innerHTML = "Minha Lista de Tarefas"
  creatHeader.appendChild(createTitle);
  createMain.appendChild(creatHeader);
}
CreateHeader();


// Requisito 2  Adicionando paragrafo

function CreateP (){
  const setHeader = document.getElementsByTagName('header')[0];
  const creatTagP = document.createElement('p');
  creatTagP.id = "funcionamento"
  creatTagP.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
  setHeader.appendChild(creatTagP);
}
CreateP();

// Requisito 3 Criando o input

function CreateInput (){
  const createSec = document.createElement('section');
  createMain.appendChild(createSec);
  createSec.id ="input-section"
  const createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  createInput.id = "texto-tarefa"
  createSec.appendChild(createInput);
}
CreateInput();


// Requisito 4 Criando Lista

function CreateLista() {
  const createLista = document.createElement('ol');
  createLista.id = "lista-tarefas"
  createMain.appendChild(createLista);
  createLista.innerHTML = sessionStorage.getItem('save')
  const creatLi = document.getElementsByTagName('li');
  for(let index = 0; index < creatLi.length; index+= 1) {
    creatLi[index].addEventListener('dblclick', chekItenList);
    creatLi[index].addEventListener('click', paintLiGray);
  }
  sessionStorage.clear();
}
CreateLista();

//Requisito 5 - 6 Criando Botão

function createButton(){
  const setSection = document.querySelector('#input-section')
  const button = document.createElement('button');
  button.id = "criar-tarefa";
  button.innerHTML = "Adicionar"
  setSection.appendChild(button);
}
createButton();

function addTask (){
  const setList = document.querySelector('ol');
  const creatLi = document.createElement('li')
  const targetInput = document.querySelector('input');
  setList.appendChild(creatLi)
  creatLi.innerText = targetInput.value;
  setList.appendChild(creatLi);
  targetInput.value = '';
  creatLi.addEventListener('dblclick', chekItenList);
  creatLi.addEventListener('click', paintLiGray);
}

const setButton = document.querySelector('#criar-tarefa')
setButton.addEventListener('click', addTask);
// setButton.addEventListener('keypress', addTask);

// Requisito 7 click muda o background

function paintLiGray (event) {
  removeColor();
  const backGrayColor = event.target
  backGrayColor.classList.add('colorGray');
}

//Requisito 8 RESETANDO O selecionado

const clickListItem = document.getElementsByTagName('li');
function removeColor() {
  for (let index = 0; index < clickListItem.length; index += 1) {
    clickListItem[index].classList.remove('colorGray')
  }
}

//Requisito 9 duplo clik para dar Check

function chekItenList (event){
  const li = event;
  if (li.target.classList.contains('completed') ) {
    li.target.classList.remove('completed');
  } else {
    li.target.classList.add ('completed');
  }
}

//Requisito 10 botão clear

const sectionButtons = document.createElement('section');
sectionButtons.className = 'allButons'

const buttonResetList = document.createElement('button');

function CreateresetButton (){
  createMain.appendChild(sectionButtons);
  buttonResetList.className = "clearAll"
  buttonResetList.id = "apaga-tudo"
  buttonResetList.innerHTML = "Apagar Lista"
  sectionButtons.appendChild(buttonResetList);
}
CreateresetButton();

const butonDelet = document.getElementById('apaga-tudo');
const ListOlId = document.getElementById('lista-tarefas')

//Consultei o repositório do Caio Lima para conseguir resolver - https://github.com/tryber/sd-015-a-project-todo-list/pull/9/commits/8fc8a5aae594b65c3e8d9f01ffab32be3649aba7

function clearAllList() {
  ListOlId.innerHTML = "";
}
butonDelet.addEventListener('click', clearAllList);

// Requisito 11 botão remover Finalizaddos

function createButonRemoveFinished (){
  const removeFineshd = document.createElement('button');
  removeFineshd.className = 'clearComplet'
  removeFineshd.id = "remover-finalizados"
  removeFineshd.innerHTML = "Limpa completos"
  sectionButtons.appendChild(removeFineshd);
}
createButonRemoveFinished();

const buttonFinished = document.getElementById('remover-finalizados');

function deleteFineshadTask (){
  const completedTask = document.getElementsByClassName('completed');
  for (let index = completedTask.length - 1; index >= 0; index-=1) {
    completedTask[index].remove();
  }
}
buttonFinished.addEventListener('click', deleteFineshadTask);

// referencia código https://cursos.alura.com.br/forum/topico-excluir-todos-os-elementos-com-uma-classe-159597

// Requisito 12 botão salvar Tarefas

const buttonSaveTask = document.createElement('button');
buttonSaveTask.id = "salvar-tarefas"
buttonSaveTask.innerHTML = "salvar tarefas"
buttonSaveTask.className = "saveTask"
sectionButtons.appendChild(buttonSaveTask);

function saveTaskCharge (){
  const saveOlList = document.querySelector('ol')  
  sessionStorage.setItem('save', saveOlList.innerHTML)  
}
buttonSaveTask.addEventListener('click', saveTaskCharge);

//Requisito 13 bonus

function createMoveButtons (){
  const moveUpButton = document.createElement('button');
  moveUpButton.className = 'moveUp'
  moveUpButton.id = "mover-cima"
  moveUpButton.innerHTML = "Up"
  sectionButtons.appendChild(moveUpButton);

  const moveDownButton = document.createElement('button');
  moveDownButton.className = 'moveDown'
  moveDownButton.id = "mover-baixo"
  moveDownButton.innerHTML = "Down"
  sectionButtons.appendChild(moveDownButton);
} 
createMoveButtons();

function moveUpTask (){
  const setOL = document.querySelector('ol');
  const setLiItens = document.querySelectorAll('li');
  for (let index = 1; index < setLiItens.length; index += 1){
    if (setLiItens[index].className === 'colorGray' )
    setOL.insertBefore(setLiItens[index], setLiItens[index - 1]);
  }
}
const setUpButton = document.querySelector('#mover-cima')
setUpButton.addEventListener('click', moveUpTask);

function moveDownTask (){
  const setOL = document.querySelector('ol');
  const setLiItens = document.querySelectorAll('li');
  for (let index = 0; index < setLiItens.length -1; index += 1){
    if (setLiItens[index].className === 'colorGray' )
    setOL.insertBefore(setLiItens[index], setLiItens[index + 2]);
  }
}
const setDownButton = document.querySelector('#mover-baixo')
setDownButton.addEventListener('click', moveDownTask);

// Requisito  14 remove item selecionado

function createRemoveSelectedButtons (){
  const moveUpButton = document.createElement('button');
  moveUpButton.className = 'removeSelect'
  moveUpButton.id = "remover-selecionado"
  moveUpButton.innerHTML = "remover selecionado"
  sectionButtons.appendChild(moveUpButton);
}
createRemoveSelectedButtons();

const buttonRemoveSelect = document.getElementById('remover-selecionado');

function deleteSelectTask (){
  const selectdTask = document.getElementsByClassName('colorGray');
  selectdTask[0].remove()
}
buttonRemoveSelect.addEventListener('click', deleteSelectTask);