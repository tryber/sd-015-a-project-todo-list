let botao = document.getElementById("criar-tarefa")
let inputT = document.getElementById("texto-tarefa")
let lista = document.getElementById("lista-tarefas")
let apaga = document.getElementById('apaga-tudo')
let feito = document.getElementsByClassName('completed')
botao.addEventListener('click', clicarButton)
function clicarButton () {
  let lista2 = document.createElement('li')
  lista2.innerText = inputT.value
  inputT.value = ""
  lista.appendChild(lista2)
}
lista.addEventListener ('click', clicarTexto)
  
function clicarTexto (event) {
  let asLis = document.querySelectorAll('li')
  for (let i = 0; i < asLis.length; i += 1) {
    if (asLis[i].style.backgroundColor == 'rgb(128, 128, 128)') {
      asLis[i].removeAttribute('style')
    }
  } 
  event.target.style.backgroundColor = 'rgb(128, 128, 128)' 
}
lista.addEventListener ('dblclick', tarefaCompleta)
function tarefaCompleta (event) {
  // let cansaco = document.querySelectorAll('li')
  // for (let i = 0; i < cansaco.length; i += 1) {
  //   if (cansaco[i].classList.contains('completed')) {
      
  //   }
  // }
  if (event.target.classList.contains('completed')) {
    event.target.removeAttribute('class')
    }
  event.target.className = "completed"


}
apaga.addEventListener ('click', apagarTudo)
function apagarTudo () {
  lista.innerText = ""
}