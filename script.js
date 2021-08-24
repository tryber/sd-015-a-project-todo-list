const botaoAdicionar = document.getElementById('criar-tarefa');
const botaoRemoverTudo = document.getElementById('apaga-tudo')
const botaoRemoverFinalizado = document.getElementById('remover-finalizados')
const digitarLista = document.getElementById('texto-tarefa');
let lista = document.getElementById('lista-tarefas')
let selecao = document.querySelectorAll('li');

botaoAdicionar.addEventListener('click', function criarElementoLista() {
  let itemLista = document.createElement('li');
  lista.appendChild(itemLista);
  itemLista.innerText = digitarLista.value;
  digitarLista.value = "";
})

botaoRemoverTudo.addEventListener('click', function apagarTudo() {
  if (lista.childNodes.length >= 0) {
    var lis = document.querySelectorAll('#lista-tarefas li');
    for(var i=0; i < lis.length; i+= 1) {
    lis[i].parentNode.removeChild(lis[i]);
    }
  }
})

botaoRemoverFinalizado.addEventListener('click', function removeF() {
  let listaGeral = document.querySelectorAll('li')
  for ( let index = 0; index < listaGeral.length; index += 1) {
    if (listaGeral[index].classList.value === "completed") {
      listaGeral[index].parentNode.removeChild(listaGeral[index]);
    } else if (listaGeral[index].classList.value === "completed selecao" || listaGeral[index].classList.value === "selecao completed") {
      listaGeral[index].parentNode.removeChild(listaGeral[index]);
    }
  }
})

 lista.addEventListener('click', function cinzaBg(event) {
  let listaGeral = document.querySelectorAll('li')
  for (let index = 0; index < listaGeral.length; index +=1) {
    let posicaoAtual = listaGeral[index];
    if (posicaoAtual.classList.value == 'selecao') {
      posicaoAtual.classList.remove('selecao')
    }
  }
  if (event.target.classList.value == '') {
      event.target.classList.add("selecao");
     }
});

lista.addEventListener('dblclick',function riscar(event) {
  if (event.target.classList.value === "selecao") {
    event.target.classList.add("completed")
  } else {
    event.target.classList.remove("completed")
  }
})