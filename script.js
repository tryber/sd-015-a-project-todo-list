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
const lista = document.getElementById('lista-tarefas')
function saveTasks() {
  const btnSave = document.getElementById('salvar-tarefas')
  btnSave.addEventListener('click', save)
  function save(){
    localStorage.clear();
    localStorage.setItem('list', lista.innerHTML);
  }
}

window.onload = function() {
  lista.innerHTML = localStorage.getItem('list');

  addText();

  styleList();

  riscText();

  deleteTasks();

  deleteTasksFinish();

  saveTasks()
}