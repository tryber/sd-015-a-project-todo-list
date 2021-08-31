// let button = document.getElementById('criar-tarefa');

// function criarTarefa() {
//   let input = document.querySelector('#texto-tarefa');
// }
// button.addEventListener('click', criarTarefa);

const input = document.getElementById("texto-tarefa");
const button = document.getElementById("criar-tarefa");
const ol = document.getElementById("lista-tarefas");
const buttonDeleteAll = document.getElementById("apaga-tudo");
const buttonDeleteItem = document.getElementById("remver-selecionado");
const li = document.getElementsByTagName("li");

button.addEventListener("click", function () {
  const li = document.createElement("li");
  const task = input.value;
  li.innerText = task;
  ol.appendChild(li);
  li.addEventListener("click", liSelected);
  li.addEventListener("dbclick", clickTwice);
  input.value = "";
  input.foccus();
});
function liSelected(event) {
  for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove("selected");
    event.target.classList.add("selected");
  }
};
function clickTwice(evente) {
  if(event.target.classList.contains("completed")) {
    event.target.classList.remove("completed")
  } else {
    event.target.classList.add("completed")
  }
};
buttonDeleteAll.addEventListener("click", deleteAll);
function deleteAll() {
  ol.remove();
}
buttonDeleteItem.addEventListener("click", deleteItem);
function deleteItem(event) {
  if(event.target.classList.contains("completed")) {
    li.remove();
  }
}
