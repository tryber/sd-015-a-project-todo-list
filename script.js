let listItem = document.getElementsByTagName("li")
let listatarefa = document.getElementById("lista-tarefas")

function listaTarefas () {
  let textoTarefa = document.querySelector("#texto-tarefa")
  let criarTarefa = document.querySelector("#criar-tarefa")
  let listaTarefas = document.querySelector("#lista-tarefas")
  
  criarTarefa.addEventListener("click", function() {
    let lista = document.createElement("li")
    lista.className = "list-item"
    listaTarefas.appendChild(lista)
    lista.innerHTML = textoTarefa.value
  // console.log(listaTarefas)
    textoTarefa.value = "";

    lista.addEventListener("click", colorTarefas)
    lista.addEventListener("dblclick", testCompleted)
})
}

function colorTarefas (event) {
  if (!event.target.className.includes("selected")) {
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].classList.remove("selected")
    }
    event.target.classList.add("selected")
  } else {
    event.target.classList.remove("selected")
  }

  // if (event.target.style.backgroundColor !== "rgb(128, 128, 128)") {
  //   for (index = 0; index < listItem.length; index += 1) { 
  //     listItem[index].style.backgroundColor = ""  
  //   }
  //   event.target.style.backgroundColor = "rgb(128, 128, 128)"
  //   }

}

function testCompleted (event) {
  if (!event.target.className.includes("completed")) {
    event.target.classList.add("completed")
  } else {
    event.target.classList.remove("completed")
  }

  // event.target.classList.add("completed")
  // if (event.target.className.includes("completed")) {
  //   event.target.classList.remove("completed")
  // }
}

listaTarefas()

function apagarLista () {
  let botaoLimpar = document.getElementById("apaga-tudo")
    botaoLimpar.addEventListener("click", function () {
    listatarefa.innerHTML = ""
  })
}

apagarLista ()