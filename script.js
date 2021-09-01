function botaos(nomeBotao) {
  const botao = document.createElement('button');
  botao.id = 'criar-tarefa';
  botao.innerHTML = nomeBotao;
  const body = document.getElementsByTagName('body');
  body[0].appendChild(botao);
  

}
botaos('Criar tarefas');

function criarTarefa() {
  const tagPaiOl = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const tagLi = document.createElement('li');
  tagLi.innerHTML = input.value;
  tagPaiOl.appendChild(tagLi);
  input.value = "";

  const tagDaLi = document.getElementsByTagName('li');
  for (let cont = 0; cont < tagDaLi.length; cont++){
  tagDaLi[cont].addEventListener("click", mudarAcorDoElemento);
  tagDaLi[cont].addEventListener('dblclick', riscarElement);
  
}
}

const resgateiBotao = document.querySelector('#criar-tarefa');
resgateiBotao.addEventListener("click", criarTarefa);
//-----------------------------------------------------------------------------



function mudarAcorDoElemento(event) {
  const UmElementoPorVez = document.getElementsByTagName('li');
  for(let cont = 0; cont < UmElementoPorVez.length ; cont ++) {
    UmElementoPorVez[cont].style.backgroundColor = 'white';

}

  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
//------------------------------------------------------------------------------

const riscarElement = (event) => {
  
  if(event.target.className == 'completed') {
    event.target.className = ' ';
  }else{
    event.target.className = 'completed';
  }

}


const criarBotao = (nomeDoBotao) => {
 const botaoApagaTudo = document.createElement('button');
 botaoApagaTudo.id = 'apaga-tudo';
 botaoApagaTudo.innerHTML = nomeDoBotao;
 const body = document.getElementsByTagName('body');
 body[0].appendChild(botaoApagaTudo);
 botaoApagaTudo.addEventListener('click', limparItens)
}
 
const limparItens = () => {
  const elementoOl = document.querySelector('#lista-tarefas');
  elementoOl.innerHTML = ' ';

}
 
criarBotao('Limpar');



const removerFinalizadosDaLista = () => {
  const tagLi = document.querySelectorAll('.completed');
  console.log(tagLi)
  for(let cont = 0 ; cont < tagLi.length ; cont ++){
     tagLi[cont].remove()
   

}
   
}

const botaoRemoverFinalizados = (removerFinalizados) => {
  const botaoRemover = document.createElement('button');
  botaoRemover.id = 'remover-finalizados';
  botaoRemover.innerHTML = removerFinalizados;
  const body = document.getElementsByTagName('body');
  body[0].appendChild(botaoRemover);
  botaoRemover.addEventListener('click',removerFinalizadosDaLista);
}
botaoRemoverFinalizados ('Remover finalizados');






const salvandoTarefas = () => {
  const tagOl = document.querySelector('#lista-tarefas');
  localStorage.setItem('tarefas',tagOl.innerHTML);
  
}

window.onload = () => {
const tarefas = localStorage.getItem('tarefas');
const tagOl = document.querySelector('#lista-tarefas');
tagOl.innerHTML = tarefas;

}

const botaoSalvaConteudoLista = (salvarTarefas) => {
  const botaoSalvar = document.createElement('button');
  botaoSalvar.id = 'salvar-tarefas';
  botaoSalvar.innerHTML = salvarTarefas;
  const body = document.getElementsByTagName('body');
  body[0].appendChild(botaoSalvar);
  botaoSalvar.addEventListener('click', salvandoTarefas);
} 

botaoSalvaConteudoLista('Salvar tarefas');


//------------------------------------------------------------------


const removeItem = () => {
 const liLista = document.getElementsByTagName('li');
 const liSelecionado = '';
 for(let cont = 0 ; cont < liLista.length ; cont ++){
   if(liLista[cont].style.backgroundColor == 'rgb(128, 128, 128)'){
     liLista[cont].remove()
   }

 }
   

}


const botaoRemoverItemSelecionado = (removeSelecionado) => {
  const botaoRemoverSelecionado = document.createElement('button');
  botaoRemoverSelecionado.id = 'remover-selecionado';
  botaoRemoverSelecionado.innerHTML = removeSelecionado;
  const body = document.getElementsByTagName('body');
  body[0].appendChild(botaoRemoverSelecionado);
  botaoRemoverSelecionado.addEventListener('click',removeItem);

}

botaoRemoverItemSelecionado('Remover Selecionado')