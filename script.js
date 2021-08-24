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
    for(i=0;i<acessaLista.childNodes.length;i++){
      let pe = document.querySelectorAll(".li")[i];
      pe.addEventListener("click", clickc);
      function clickc(){
          //Sorce: https://stackoverflow.com/questions/14323082/why-doesnt-backgroundcolor-rgba-b-c-work -- erro de não adicionar a cor rgb is not defined , falta do "";
        pe.style.backgroundColor ='rgb(128, 128, 128)';
      } 
    }
  }

const acessaButtomClear = document.getElementById("apaga-tudo");
acessaButtomClear.addEventListener("click",clear);
  //Repositorio do Arthur Teixeira Santos consultado para fazer essa parte Marcelo Adriano - https://github.com/tryber/sd-015-a-project-todo-list/pull/1/files
function clear() {
  const acessaFilhos = acessaLista.children;
      //percorre enquanto tiver filho e remove o indice 0(toda vez que passa tem um filho a menos por isso não acrescenta).
  for (let index = 0; index < acessaFilhos.length; index+=0) {
      acessaLista.removeChild(acessaFilhos[0]);
    }
}