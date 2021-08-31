function botaos(nomeBotao) {
  const botao = document.createElement('button');
  botao.id = 'criar-tarefa';
  botao.innerHTML = nomeBotao;
  const body = document.getElementsByTagName('body');
  body[0].appendChild(botao);
  console.log(body[0]);

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
  console.log(event.target.style.textDecoration);
  
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
  // const tagDaLi = document.getElementsByTagName('li');
  elementoOl.innerHTML = ' ';
//    for(let cont = 0 ; cont < tagDaLi.length ; cont ++){
//     elementoOl.removeChild(tagDaLi[cont]);

//  }

}
 
 criarBotao('Limpar');

 