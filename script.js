const botao = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');

botao.addEventListener('click', adiciona ) 

function adiciona (){
  let criacao = document.createElement('li');
  criacao.className = 'lista'
  lista.appendChild(criacao)
  criacao.innerText = input.value
  input.value = "";
  
riscar(criacao)
}

//referencia: um colega apareceu com uma função grande na mentoria e baêta o ajudou a refatorar, desse modo consegui entender a função e decidi replicar 

const pintar = document.querySelector('#lista-tarefas')
 pintar.addEventListener('click', addColor);
const colorir = document.querySelectorAll('li')

function addColor(event){
  let item = document.querySelector('.selected');
  if (item){
    item.classList.remove('selected')
  }
  event.target.classList.add('selected')
}


function riscar(criacao){ 
  criacao.addEventListener('dblclick', function (){
    if (this.classList.contains('completed')){ 
     this.classList.remove('completed')
    }else{
    this.classList.add('completed')}
  })
}