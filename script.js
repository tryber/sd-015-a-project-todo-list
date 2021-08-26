window.onload = function() {
  let criaTarefa = document.getElementById("criar-tarefa");
  criaTarefa.addEventListener("click", function() {
    let entrada = document.getElementById("texto-tarefa");
    let novaTarefa = document.createElement("li");

    novaTarefa.addEventListener("click", function(evento) {
      if (evento.target.classList.contains("selected") == true) {
        evento.target.classList.remove("selected");
      }
      else {
        let todasTarefas = document.getElementsByTagName("li");

        for (let index = 0; index < todasTarefas.length; index += 1) {
          if (todasTarefas[index].classList.contains("selected") == true) {
            todasTarefas[index].classList.remove("selected");
          }
        }
        
        evento.target.classList.add("selected");

        
      }
    })

    novaTarefa.addEventListener("dblclick", function(evento) {
      if (evento.target.classList.contains("completed") == true) {
        evento.target.classList.remove("completed");
      }
      else {
        evento.target.classList.add("completed");
      }
    })

    let lista = document.getElementById("lista-tarefas");
    novaTarefa.innerHTML = entrada.value;

    if (entrada.value != ""){
      lista.appendChild(novaTarefa);
      adicionaNoStorage(novaTarefa.innerHTML);

      entrada.value = "";
    }

  })

  let itensLista = document.getElementsByTagName("li");

  let apagaTudo = document.getElementById("apaga-tudo");
  apagaTudo.addEventListener("click", function() {
    let lista = document.getElementById("lista-tarefas");
    lista.innerHTML = "";
    localStorage.clear();
  })

  let apagaFinalizados = document.getElementById("remover-finalizados");
  apagaFinalizados.addEventListener("click", function() {
    for (let index = itensLista.length - 1; index >= 0; index -= 1) {
      if (itensLista[index].classList.contains("completed") == true) {
        let listaInteira = document.getElementById("lista-tarefas");
        listaInteira.removeChild(itensLista[index]);
      }
    }
  })

  let removeSelecionado = document.getElementById("remover-selecionado");
  removeSelecionado.addEventListener("click", function() {
    for (let index = 0; index < itensLista.length; index += 1) {
      if (itensLista[index].classList.contains("selected") == true) {
        let listaCompleta = document.getElementById("lista-tarefas")
        listaCompleta.removeChild(itensLista[index]);
      }
    }
  })
  
  let todasTarefas = document.getElementsByTagName("li")
  
  let sobe = document.getElementById("mover-cima");
  sobe.addEventListener("click", function() {
    for (let index = 0; index < todasTarefas.length; index += 1) {
      if (todasTarefas[index].classList.contains("selected") == true) {
        if (index > 0) {
        let temporario = todasTarefas[index - 1];
        todasTarefas[index - 1] = todasTarefas[index];
        todasTarefas[index] = temporario;
        }
      }
    }
  });

  let desce = document.getElementById("mover-baixo");
  desce.addEventListener("click", function() {
    for (let index = todasTarefas.length -2; index > -1; index -= 1) {
      if (todasTarefas[index].classList.contains("selected") == true) {
        let temp = todasTarefas[index + 1];
        todasTarefas[index + 1] = todasTarefas[index];
        todasTarefas[index] = temp;
      }
    }
  })


  
}

function adicionaNoStorage(item) {
  localStorage.setItem(item, item);
}

function removeDoStorage(item) {
  localStorage.removeItem(item);
}
