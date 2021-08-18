const tagTarefas=document.querySelector('#tarefas')
const btCriarTarefas = document.createElement('button');
const inputTexto = document.querySelector('#texto-tarefa');
btCriarTarefas.id = 'criar-tarefa';
btCriarTarefas.innerHTML = 'Criar Tarefas';
tagTarefas.appendChild(btCriarTarefas);
btCriarTarefas.addEventListener('click', (evento) => {
  const tagOl = document.querySelector('ol');
  const tagLi = document.createElement('li');
  tagLi.className = 'item';
  tagLi.innerText = inputTexto.value;
  tagOl.appendChild(tagLi);
  inputTexto.value = '';
});

const tagOl = document.querySelector('#lista-tarefas');
tagOl.addEventListener('click', function (event) {
  if (event.target.classList.contains('item')) {
    const atual = document.querySelector('.atual');
    if (atual !== null) {
      atual.classList.remove('atual');
    } 
    event.target.classList.add('atual');
  }
});

tagOl.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('item')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    }else {
    event.target.classList.add('completed');
    }
  }
});

const btApagarTarefas = document.createElement('button');
btApagarTarefas.id="apaga-tudo"
btApagarTarefas.innerText = "Apagar Lista"
tagTarefas.appendChild(btApagarTarefas);

btApagarTarefas.addEventListener('click', (evento) => {
  tagOl.innerText = ''
});

const btRemoverFinalizado = document.createElement('button');
btRemoverFinalizado.id = "remover-finalizados";
btRemoverFinalizado.innerText = "Remover Finalizados"
tagTarefas.appendChild(btRemoverFinalizado);
btRemoverFinalizado.addEventListener('click', function() {
  let complete = document.querySelectorAll('.completed');
  for (index = 0;index < complete.length; index += 1){
    complete[index].remove();
  };
});

const btSalvarTarefas = document.createElement('button');
btSalvarTarefas.id = "salvar-tarefas";
btSalvarTarefas.innerText = "Salvar Tarefas"
tagTarefas.appendChild(btSalvarTarefas); 
btSalvarTarefas.addEventListener('click', function() {
  const tagItem = document.querySelectorAll('.item');
  let items = [];
  for (index=0; index < tagItem.length; index +=1) {
    //criando um objeto
    const item = {
      innerText: tagItem[index].innerText,
      classes: tagItem[index].className
    };
    items.push(item);
  };
  localStorage.setItem('itensDaLista', JSON.stringify(items));
});

window.onload = function () {
  const itensRecall = JSON.parse(localStorage.getItem('itensDaLista'));
  if (itensRecall !== null) {
    const tagOl = document.querySelector('ol');
    for (let index = 0; index < itensRecall.length; index += 1) {
      const tagLi = document.createElement('li');
      tagLi.innerText = itensRecall[index].innerText;
      tagLi.className = itensRecall[index].classes;
      tagOl.appendChild(tagLi);  
   }
  } 
}