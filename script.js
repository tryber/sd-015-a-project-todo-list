//  Adiciona tarefa e limpa input (requisitos 5 e 6)  //
const input = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function adicionar(){
  if(input.value !== ''){
  let lista = document.createElement('li');
  lista.innerText = input.value
  list.appendChild(lista);
  input.value = ''
  }
};

buttonAdd.addEventListener('click', adicionar)

//  Requisito 07  // 
function pintarCinza(event) {
    event.target.style.background = 'rgb(128, 128, 128)';
  }  
 
 list.addEventListener('click', pintarCinza);

//  Requisito 08  //

//  Requisito 09  //
function clicks(event){
  let clicado = event.target;
  clicado.classList.add('completed')
};

list.addEventListener('dblclick', clicks)

//  Requisito 10  //
