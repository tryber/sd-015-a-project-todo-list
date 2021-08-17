    const newInput = document.querySelector("#texto-tarefa");  
    const buttonTask = document.querySelector("#criar-tarefa");
    const taskItens = document.querySelector("#lista-tarefas");
    const liItem = document.getElementsByTagName("li");

    

    function changeColor(event){
      for (let i = 0 ; i < liItem.length ; i += 1 ){        
          liItem[i].style.backgroundColor = "transparent";
        event.target.style.backgroundColor = "rgb(128,128,128)"        
      }
    }

     function risk(event){        
      if (event.target.classList.contains("completed")){
        event.target.classList.remove("completed");
      } else { event.target.classList.add("completed");
       }
      }           
      
    
    function creatLi() {
    if(newInput.value.length > 0){
    const newLi = document.createElement("li");
    taskItens.appendChild(newLi);
    newLi.addEventListener('click', changeColor) 
    newLi.addEventListener('dblclick', risk)
    newLi.innerText = newInput.value; 
    newInput.value = "";

    } else {
    alert("Erro, digite alguma coisa.")
    }
     }      
    buttonTask.addEventListener('click', creatLi) 
           
  
   /* 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista] */
/* 
function createItem
   const resetListButton = document.createElement("button");
   resetListButton.innerText = "clear";
   resetListButton.id = "apaga-tudo";

 */