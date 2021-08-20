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
  this.classList = 'selected'; 
  let selectedColor = document.querySelector('.selected');
  selectedColor.style.backgroundColor = 'rgb(128, 128, 128)';
}


