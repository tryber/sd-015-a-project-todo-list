const funcionamento = document.querySelector("#funcionamento");
const textoTarefa = document.querySelector("#texto-tarefa");
const listaTarefas = document.querySelector('#lista-tarefas')
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const objectList = document.querySelectorAll('#lista-tarefas li');


function criarTarefa(){

  var listElement = document.createElement("li");

    listElement.innerText = textoTarefa.value;
    listElement.addEventListener('click', alterarCor);
    listElement.addEventListener('dblclick', riscarTexto);

  listaTarefas.appendChild(listElement);

  textoTarefa.value = '';
}


function alterarCor(e) {
  let itemSelecionado = document.querySelector("#selected");
  let elementoClicado = e.target;

  if (elementoClicado == itemSelecionado){
    elementoClicado.id = "";
    ;
  } else if (itemSelecionado != null){
    itemSelecionado.id = "";
  elementoClicado.id = "selected";
  } else {
    elementoClicado.id = "selected";
  }
}


function riscarTexto(e){
  let classList = e.target.classList;

  if (classList.contains("completed")){
    classList.remove("completed");

  }else {
    classList.add("completed");

  }
}

function apagaTudo(){
  let todosItens = document.querySelectorAll("ol li");
  todosItens.forEach(item => {
    item.remove();
  })
}

function removerFinalizados(){
  
  console.log("Itens finalizados removidos")
  
}
