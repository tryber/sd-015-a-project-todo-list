
let list = document.getElementById("lista-tarefas");
let botao = document.getElementById("criar-tarefa");

botao.addEventListener("click", adicionaTarefa);
function adicionaTarefa (){
    let textoDigitado = document.getElementById("texto-tarefa").value;       
    let makeItem = document.createElement("li");
    makeItem.className = "tarefa";      
    makeItem.innerText = textoDigitado;   
    console.log(makeItem);
    list.appendChild(makeItem);
    document.getElementById("texto-tarefa").value = "";
}
/*list.addEventListener("click" , adicionaBack);
function adicionaBack(event){
    event.target.style.backgroundColor = "rgb(128, 128, 128)";  
}*/
function resetarCor() {
    let liEscolhida = document.querySelectorAll("li");
    for (let index = 0; index < liEscolhida.length; index += 1) {
    liEscolhida[index].style.backgroundColor = "";
    }
  }
let taskListTarget = document.querySelector("ol");
function pintaTarefa(event) {
  resetarCor();
  let evento = event.target;
  evento.style.background = "rgb(128, 128, 128)";
}
taskListTarget.addEventListener('click', pintaTarefa);

/*list.addEventListener("dblclick", riscaTarefa);
    function riscaTarefa (evento){
    evento.target.style.backgroundColor = "white";
}*/

  
//Requisito 10
let botaoApaga = document.getElementById("apaga-tudo");
botaoApaga.addEventListener("click", apagarTarefa);
function apagarTarefa(event1){
    location.reload();
}


    
      

