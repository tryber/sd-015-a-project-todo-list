const acessaLista = document.getElementById("lista-tarefas");
const acessaInput = document.getElementById("texto-tarefa");
const acessaButtom = document.getElementById("criar-tarefa");
  //Repositorio do Arthur Teixeira Santos consultado para fazer essa parte (addValue sendo colocado de forma errada e form.)
acessaButtom.addEventListener("click", addValue);

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
      pe.addEventListener('click', clickc);
      function clickc(){
          //Sorce: https://stackoverflow.com/questions/14323082/why-doesnt-backgroundcolor-rgba-b-c-work -- erro de não adicionar a cor rgb is not defined , falta do "";
        pe.style.backgroundColor ='rgb(128, 128, 128)';
      } 
    }
}

