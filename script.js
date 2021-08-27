function criaTarefa (texto) {  const btn = document.querySelector("#criar-tarefa");

btn.addEventListener("click", function(e){
    let input = document.querySelector("#texto-tarefa");

    let criaLista = document.createElement("li");

    let lista = document.querySelector("#lista-tarefas");

    criaLista.className = "tarefa"

    criaLista.style.backgroundColor = "rgb(240, 240, 240)"
    criaLista.innerText = input.value;

    lista.appendChild(criaLista);
    

})
}

criaTarefa();

function changeColor(){ 
    let tarefas = document.querySelectorAll(".tarefa");
    for(let i = 0; i<tarefas.length; i+=1){ 
        tarefas[i].addEventListener("click",function(){if (tarefas[i].style.backgroundColor != "rgb(128, 128, 128)"){tarefas[i].style.backgroundColor = "rgb(128, 128, 128)"}
    }

    )}
}
changeColor()