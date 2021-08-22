let addButton = document.querySelector('#criar-tarefa');
let taskList = document.querySelector('#lista-tarefas');
let inputArea = document.querySelector('#texto-tarefa');

//Cria li's na #lista-tarefas
function addTask() {
  let listItem = document.createElement('li');
  taskList.appendChild(listItem);
  listItem.innerHTML = inputArea.value;
  listItem.classList = 'list-item';
  inputArea.value = '';
  listItem.addEventListener('click', changeItemColor);
  listItem.addEventListener('dblclick', complete);
}

addButton.addEventListener('click', addTask);

//Altera cor de fundo do item selecionado.
function changeItemColor() {
  if (document.querySelector('.selected')) { //Checa se existe algum elemento com a classe selected.
    //Seleciona o elemento selected, remove sua cor de fundo e sua classe selected.
    let selectedColor = document.querySelector('.selected');
    selectedColor.style.backgroundColor = 'transparent';
    selectedColor.classList.remove('selected');
  }
  //Elemento de origem do evento recebe a classe selected e a cor de fundo especial.
  this.classList.add('selected'); 
  let selectedColor = document.querySelector('.selected');
  selectedColor.style.backgroundColor = 'rgb(128, 128, 128)';
}
//Marca item selecionado com a classe completed, remove a classe competed se ela já existir.
function complete() {
  if (this.classList.contains('completed')) {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}
//Apaga lista ao clica no botão #apaga-tudo.
let clearAllBtn = document.querySelector('#apaga-tudo');

function clearList() {
  let listItens = document.querySelectorAll('.list-item');
  for (let item of listItens) {
    let parent = item.parentNode;
    parent.removeChild(item);
  }
}
clearAllBtn.addEventListener('click', clearList);
//Apaga itens com a classe completed ao clicar no botão #remover-finalizados
let clearCompletedBtn = document.querySelector('#remover-finalizados');
function clearCompleted() {
  let completedItens = document.querySelectorAll('.completed');
  for (let item of completedItens) {
    let parent = item.parentNode;
    parent.removeChild(item);
  }
}
clearCompletedBtn.addEventListener('click', clearCompleted);