window.onload = () => { // por algum motivo sem isso nao funciona 
    addTarefa = document.getElementById("criar-tarefa");// curiosidade pra nao esquecer, o getelemente nao usa o # e o queryselector usa, essa é a diferença eu acho
    listaTarefa = document.querySelector('#lista-tarefas');// mas da pra usar o queryselector com o # na duvida
    caixaTexto = document.getElementById("texto-tarefa");
    
    addTarefa.addEventListener("click",adicionador);
    
    function adicionador(){    
    let it = document.createElement("li") ;
    it.innerHTML = caixaTexto.value;
    document.querySelector('#lista-tarefas').appendChild(it);
    caixaTexto.value = '';
     }
    
    }