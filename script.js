window.onload = function init() {

  checkSave();
}

const setTask = document.getElementById("criar-tarefa");
setTask.addEventListener("click", form);

function form() {
  const input = document.getElementById("texto-tarefa");
  const task = input.value;
   
  document.getElementById("lista-tarefas").innerHTML += "<li id='item'>" + task + "</li>";
  input.value = '';
  
  const changes = document.getElementById("lista-tarefas");

  for(let index = 0;index < changes.children.length; index +=1 ){
  changes.children[index].addEventListener("click", change);
  changes.children[index].addEventListener("dblclick", sub)

  
  }
}

function change(event) {
  const changeColor = document.getElementById("lista-tarefas");
  for (let index = 0 ;index < changeColor.children.length ; index +=1){
    
    changeColor.children[index].style.backgroundColor= "white";

  }

event.target.style.backgroundColor = " rgb(128, 128, 128)"

}

function sub(event) {
   if (event.target.classList[0]==="completed"){
    event.target.classList.remove("completed");
  }else{
  event.target.classList.add("completed");
  }

}

let clearAll = document.getElementById("apaga-tudo");

clearAll.addEventListener("click",clear);

function clear() {
  const lista = document.getElementById("lista-tarefas");
  const size = lista.children.length;
  for(let index = size-1; index >= 0 ; index -= 1){
  
    lista.removeChild(lista.children[index]);
  }
  localStorage.clear();
}

let clearDone = document.getElementById("remover-finalizados");

clearDone.addEventListener("click",done);

function done() {
  const lista = document.getElementById("lista-tarefas");
  const complete = document.getElementsByClassName("completed")
  const size = complete.length;
  for(let index = size - 1; index >= 0 ; index -= 1){
  
    lista.removeChild(complete[index]);
  }
}

let save = document.getElementById("salvar-tarefas")

save.addEventListener("click", saveAll);

function saveAll() {
  const lista = document.getElementById("lista-tarefas");
  const size = lista.children.length;
  console.log(size)

  for(let index = size - 1; index >= 0 ; index -= 1){
    localStorage.setItem(index,lista.children[index].innerText + "*"+lista.children[index].classList);
  }
localStorage.setItem("size" ,size);
}

function checkSave(){
  const lista = document.getElementById("lista-tarefas");
  const size = lista.children.length;
  if (localStorage.getItem("size") === null ){
    return 0;
  }else{

    for (let index = 0 ; index < localStorage.getItem("size") ; index += 1){
    let text = localStorage.getItem(index);
    let classe = text.substring(text.lastIndexOf("*")+1)
      if (classe === "completed"){
        text = text.replace("*completed", ""); 
      document.getElementById("lista-tarefas").innerHTML += "<li id='item' class='completed'>" + text + "</li>";
      }else{
        text = text.replace("*","");
        document.getElementById("lista-tarefas").innerHTML += "<li id='item'>" + text + "</li>";
      }
    }
    const changes = document.getElementById("lista-tarefas");
    for(let index = 0;index < changes.children.length; index +=1 ){
      changes.children[index].addEventListener("click", change);
      changes.children[index].addEventListener("dblclick", sub)

      }
  }


}