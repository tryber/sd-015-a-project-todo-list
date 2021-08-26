const acessaLista = document.getElementById("lista-tarefas");
const acessaInput = document.getElementById("texto-tarefa");
const acessaButtomAdd = document.getElementById("criar-tarefa");
  //Repositorio do Arthur Teixeira Santos consultado para fazer essa parte (addValue sendo colocado de forma errada e form.) - https://github.com/tryber/sd-015-a-project-todo-list/pull/132/commits/37a8ec47effa00ca2bcae26904c31898f77352fe
acessaButtomAdd.addEventListener("click", addValue);


function addValue () {
  const criaLi = document.createElement("li");
    criaLi.innerText = acessaInput.value;
       //Source: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild
    criaLi.className = "li";
    acessaLista.appendChild(criaLi);
    acessaInput.value = "";
       
    
    //backgroud-color
       //Repositorio do Marcelo Adriano consultado para fazer essa parte  - https://github.com/tryber/sd-015-a-project-todo-list/pull/1/files
    criaLi.addEventListener("click",addcolor)
    function addcolor(evento) {
      if (document.querySelector('.selected')) {
          document.querySelector('.selected').classList.remove('selected');
      }
        //evento.target quem originou evento(no caso qual foi clicado).
      evento.target.classList.add('selected');
    }
}

    //Adiciona Função Apagar
const acessaButtomClear = document.getElementById("apaga-tudo");
acessaButtomClear.addEventListener("click",clear);
    //Repositorio do Marcelo Adriano consultado para fazer essa parte  - https://github.com/tryber/sd-015-a-project-todo-list/pull/1/files
function clear() {
    const acessaFilhos = acessaLista.children;
       //percorre enquanto tiver filho e remove o indice 0(toda vez que passa tem um filho a menos por isso não acrescenta).
    for (let index = 0; index < acessaFilhos.length; index+=0) {
        acessaLista.removeChild(acessaFilhos[0]);
    }
}