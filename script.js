//adicionando texto
function addText() {
    const btnText = document.querySelector('#criar-tarefa');
    btnText.addEventListener('click', addList);
    function addList(){ //https://stackoverflow.com/questions/19908215/adding-user-input-to-a-list-of-text-items-on-a-html-page/42950658
      const li = document.createElement("li");
      let text = document.querySelector("input").value; 
      const textnode = document.createTextNode(text);//cria um nó escapando de caractere html
      li.appendChild(textnode);
      const list = document.querySelector("#lista-tarefas");
      list.appendChild(li);
      document.querySelector("input").value = '';
      }
}
//adicionando backgroundColor
function styleList() {
    const ol = document.querySelector("#lista-tarefas");
    ol.addEventListener('click', function(event){
      let list = document.querySelectorAll('li');
      for (let i = 0; i < list.length; i += 1) {
        let color = list[i];
        color.style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
}
//adicionando e removendo classes para que não tenha mais de um elemento com a mesma classe dentro da ol
function clasAdd(){
  const ol = document.querySelector("#lista-tarefas");
    ol.addEventListener('click', function(event){
      let list = document.querySelectorAll('li');
      for (let i = 0; i < list.length; i += 1) {
        let item = list[i];
        item.classList.remove('seleted')
      }
      event.target.classList.add('seleted');
    });
}
//adicionando text decoration 
function riscText() {
    const ol = document.querySelector("#lista-tarefas");
    ol.addEventListener('dblclick', function(event) {
      const item = event.target;

      if (item.classList.contains('completed')) {
        item.classList.remove('completed');
      } else {
        item.classList.add('completed');
      }
    });
}
//apagando todas as tarefas 
function deleteTasks() {
    const btnDelete = document.querySelector('#apaga-tudo');
    btnDelete.addEventListener('click', deleteList);
    function deleteList() {
      let list = document.querySelectorAll('li');
      for (let i = 0; i < list.length; i += 1) {
        let task = list[i];
        task.remove();
      }
    }
}
//apagando tarefas finalizadas
function deleteTasksFinish() {
    const btnDeleteFinish = document.querySelector('#remover-finalizados');
    btnDeleteFinish.addEventListener('click', deleteFinish)
    function deleteFinish() {
      let list = document.querySelectorAll('li');
      for (let i = 0; i < list.length; i += 1) {
        let task = list[i];
        if (task.classList.contains('completed')) {
          task.remove();
        }
      }
    }
}
//salvar tarefas
const lista = document.getElementById('lista-tarefas');
function saveTasks() {
  const btnSave = document.getElementById('salvar-tarefas');
  btnSave.addEventListener('click', save);
  function save(){
    localStorage.clear(); //necessario limpar o save anterior para adicionar o proximo
    localStorage.setItem('list', lista.innerHTML);
  }
}
//mover tarefa para cima 
function moveTaskUp() {
  const btnUp = document.getElementById('mover-cima');
  btnUp.addEventListener('click', moveUp)
  function moveUp() {
    const item = document.querySelector('.seleted')
    if(item === null || item.previousElementSibling === null) {
      console.log('erro');
    } 
    else if(item.classList.contains('seleted')) {
      item.previousElementSibling.before(item); // retorna o elemento anterior inserindo-o com before
    }
  }
}
//mover tarefa para baixo
function moveTaskLow() {
  const btnLow = document.getElementById('mover-baixo');
  btnLow.addEventListener('click', moveLow)
  function moveLow() {
    const item = document.querySelector('.seleted')
    if(item === null || item.nextElementSibling === null) {
      console.log('erro');
    } 
    else if(item.classList.contains('seleted')) {
      item.nextElementSibling.after(item); // retorna o proximo elemento inserindo com after
    }
  }
}
//remover selecionado
function removeSelected() {
  const btnRemove = document.querySelector('#remover-selecionado');
  btnRemove.addEventListener('click', rmTask);
  function rmTask() {
    let list = document.querySelectorAll('li');
      for (let i = 0; i < list.length; i += 1) {
        let task = list[i];
        if(task.classList.contains('seleted')) {
          task.remove()
        }
      }
  }
}

window.onload = function() {
  lista.innerHTML = localStorage.getItem('list'); //chamada do localStorage 

  addText();

  styleList();

  riscText();

  deleteTasks();

  deleteTasksFinish();

  saveTasks()

  clasAdd()

  moveTaskUp()

  moveTaskLow()

  removeSelected()
}