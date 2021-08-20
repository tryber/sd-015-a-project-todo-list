function botaoCriaTarefa() {
  const buscaTextoTarefa = document.querySelector('#lista-tarefas');
  let criaTarefa = document.createElement('button');
  criaTarefa.id = 'criar-tarefa';
  criaTarefa.innerHTML = 'Criar Tarefa'
  buscaTextoTarefa.appendChild(criaTarefa);
}
botaoCriaTarefa()

const buscalistaTarefas = document.getElementById("lista-tarefas");
const buscaTextoInput = document.getElementById('texto-tarefa')
const eventoBotao = document.querySelector('#criar-tarefa');


/* criar constantes de uso comum fora da função facilita pois podem ser usadas entre funções */
function criaLi() {

  let criaLi = document.createElement('li');
  criaLi.className = 'line';
  criaLi.innerText = buscaTextoInput.value
  criaLi.addEventListener('click', corLi);
  //criaLi.addEventListener('dblclick', riscaLi)
  /* criaLi.addEventListener('click', btnApaga) */
  buscaTextoInput.value = '';
  buscalistaTarefas.appendChild(criaLi);
}
eventoBotao.addEventListener('click', criaLi)

function corLi(event) { //com apoio em mentoria com Ronald..a função chama com a let 'x' o elemento com a classe 'selected' e o if verifica se 'x' existe com a classe. Se existe é pedido que a classe seja removida ou adicionada pelo evento.
  let x = document.querySelector('.selected');
  if (x) {
    x.classList.remove('selected');  
  } 
    event.target.classList.add('selected');
} 

/* function riscaLi(dpclick) {
  if (target.classList('selected'))
  dpclick.target.classList.remove('selected');
  dpclick.target.classList.add('completed');
} */


/* 
function eventosLi () {
  const linhas = document.getElementsByClassName('lista-tarefas'); 
  for(let i = 0; i < linhas.length; i += 1) {
    linhas[i].addEventListener('click', corLi)
  }
}
eventosLi() */