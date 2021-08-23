addTarefa = document.getElementById("criar-tarefa");// curiosidade pra nao esquecer, o getelemente nao usa o # e o queryselector usa, essa é a diferença eu acho
listaTarefa = document.querySelector('#lista-tarefa');// mas da pra usar o queryselector com o # na duvida
caixaTexto = document.getElementById("texto-tarefa");

function adicionador(){    
const itemListado = document.createElement("p") ;
itemListado.innerHTML = caixaTexto.value;
document.querySelector("listaTarefa").appendChild(itemListado);
caixaTexto.value= "trigo";
}

addTarefa.addEventListener("click", adicionador);


