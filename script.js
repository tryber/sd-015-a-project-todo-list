
const listOfOrder = document.querySelector("#lista-tarefas")
const inputButton = document.querySelector("#texto-tarefa")
const sectionButtonAll = document.getElementById("button-all")
const buttonClearFinishOrder = document.getElementById("remover-finalizados")


function createListOrder() {
  const elementList = document.createElement("li");
  elementList.innerText = inputButton.value;
  inputButton.value = "";
  elementList.addEventListener("click", changeColorBackground);
  listOfOrder.appendChild(elementList);
}


function changeColorBackground(evento) {
  if( document.querySelector(".selected")){
    document.querySelector(".selected").classList.remove('selected')
  }
    evento.target.classList.add("selected")
}

function markAndUnmark(evento) {
 evento.target.classList.toggle ("completed") // para ligar e desligar uma ação quando clicado referencia https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
}
listOfOrder.addEventListener("dblclick", markAndUnmark);

function createButtonAddOrder() {
  const buttonAddOrder = document.createElement("button");
  buttonAddOrder.id = "criar-tarefa"
  buttonAddOrder.innerText = "adicionar";
  sectionButtonAll.appendChild(buttonAddOrder);

  buttonAddOrder.addEventListener("click", createListOrder);
}
createButtonAddOrder();

function createButtonRemovefinishOrder() {
  const buttonFinishOrder = document.createElement("button");
  buttonFinishOrder.id = "remover-finalizados";
  buttonFinishOrder.innerText = "Remover finalizados";
  sectionButtonAll.appendChild(buttonFinishOrder);

  //se tiver a classe completed retire o elemento da lista usando o botão remover finalizados 
 

  buttonFinishOrder.addEventListener("click", clearCompletedAllOrder);
}
createButtonRemovefinishOrder();

//toda vez que olho para essa função sinto orgulho de mim; 
function clearCompletedAllOrder() {
  let getClassCompleted = document.querySelectorAll(".completed")
  for (let index = 0; index < getClassCompleted.length; index++) {
    getClassCompleted[index].parentNode.removeChild(getClassCompleted[index]);
    }
}


function createButtonClearAll() {
  const buttonClearAll = document.createElement("button");
  buttonClearAll.id = "apaga-tudo"
  buttonClearAll.innerText = "Botão de apagar";
  sectionButtonAll.appendChild(buttonClearAll);
  
  buttonClearAll.addEventListener("click", clearList);
}
createButtonClearAll();



function clearList() {
  while (listOfOrder.lastChild) {
    listOfOrder.removeChild(listOfOrder.lastChild);  //enquanto a o id da lista de ordem tiver filho, remova o filho; 
  }
}

