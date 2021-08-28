function botaos(nomeBotao) {
  const botao = document.createElement('button');
  botao.id = 'criar-tarefa';
  botao.innerHTML = nomeBotao;
  const div = document.querySelector('#lista-tarefas');
  div.appendChild(botao);

}
botaos('Criar tarefas');

function criarTarefa() {
const tagPaiOl = document.querySelector('#lista-tarefas');
const input = document.querySelector("#texto-tarefa");
const tagLi = document.createElement('li');
tagLi.innerHTML = input.value;
tagPaiOl.appendChild(tagLi);
input.value = "";

const tagDaLi = document.getElementsByTagName('li');
for (let cont = 0; cont < tagDaLi.length; cont++){
  tagDaLi[cont].addEventListener("click", mudarAcorDoElemento);

}
}

const resgateiBotao = document.querySelector('#criar-tarefa');
resgateiBotao.addEventListener("click", criarTarefa);
//-----------------------------------------------------------------------------



function mudarAcorDoElemento(event) {
  console.log(event.target);
event.target.style.backgroundColor = 'rgb(128, 128, 128)';



}




 

