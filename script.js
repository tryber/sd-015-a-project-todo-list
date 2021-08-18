
window.onload = function(){
    let criaTarefa = document.getElementById("criar-tarefa");
    criaTarefa.addEventListener("click", function(){
        let entradaMensagem = document.getElementById("texto-tarefa");
        let novaMensagem = document.createElement("li");
        let itemLista = document.getElementById("lista-tarefas");
        novaMensagem.innerHTML = entradaMensagem.value;

        itemLista.appendChild(novaMensagem);

        entradaMensagem.value = "";

        novaMensagem.addEventListener("click", function(){
            if(document.querySelector(".selected")){
                document.querySelector(".selected").classList.remove("selected");
            }
            if(novaMensagem.classList.contains("selected")){
                novaMensagem.classList.remove("selected");
            }else{
                novaMensagem.classList.add("selected");
            }
         
        })
        novaMensagem.addEventListener("dblclick", function(){
            
            
            if(novaMensagem.classList.contains("completed")){
                novaMensagem.classList.remove("completed");
            }else{
                novaMensagem.classList.add("completed");
            }
        })
        let buttonDelete = document.querySelector("#apaga-tudo");
        buttonDelete.addEventListener("click", function(){
            
            if(buttonDelete){
                novaMensagem.remove();
            }
        })
        let buttonTarefas = document.querySelector("#remover-finalizados");
        buttonTarefas.addEventListener("click", function(){
            let completed = document.querySelector(".completed")
            if(buttonTarefas && completed != null){
                completed.remove();
            }
        })
    })
}
// localStorage.querySelector(".apaga-tudo")
// localStorage.querySelector(".salvar-tarefas");

    // function dbClick();
    //     let li = document.getElementsByTagName("li");
    //     li.addEventListener("dbclick", function(event){
    //         if(li.classList.contains("completed")){
    //             li.classList.remove("completed");
    //         }else{
    //             li.classList.add("completed");
    //         }
    //     })
    //     dbClick();
   
        





    
    


