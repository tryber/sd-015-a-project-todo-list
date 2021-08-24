  //Repositorio do Arthur Teixeira Santos consultado para fazer essa parte 
const acessaLista = document.getElementById("lista-tarefas");
const acessaInput = document.getElementById("texto-tarefa");
const acessaButtom = document.getElementById("criar-tarefa");
acessaButtom.addEventListener("click", addValue);

function addValue () {
    const criaLi = document.createElement("li");
    criaLi.innerText = acessaInput.value;
    acessaLista.appendChild(criaLi);
    acessaInput.value = "";
}