const criarTarefaBTN = document.getElementById("criar-tarefa");
const inputTarefa = document.getElementById("texto-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

criarTarefaBTN.addEventListener("click", function () {
  const inputText = inputTarefa.value; //https://www.w3schools.com/jsref/prop_text_value.asp material consultado
  const novaTarefa = document.createElement("li")
  novaTarefa.innerHTML = inputText;
  listaTarefas.appendChild(novaTarefa);
  inputTarefa.value = "";
});

listaTarefas.addEventListener("click", function(event){
    for (let index = 0; index < listaTarefas.children.length; index += 1){
        listaTarefas.children[index].style.backgroundColor = 'white';
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    } 
})

listaTarefas.addEventListener('dblclick', function(event){
    if (event.target.style.textDecoration === 'line-through solid rgb(0, 0, 0)'){
        event.target.style.textDecoration = '';
        event.target.classList.remove('completed')
    }else{
        event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
        event.target.classList.add('completed')
    }
})


