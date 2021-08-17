//list
const inputItem = document.querySelector('#texto-tarefa');
const buttonCreate =  document.querySelector('#criar-tarefa');
const ol = document.querySelector('ol');
const deleteAll = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados')


buttonCreate.addEventListener ('click', inputAdd);
    
    function inputAdd() {
        const li = document.createElement('li');
        ol.appendChild(li)
        li.innerText = inputItem.value     
        inputItem.value = '';     
    }
    
    
ol.addEventListener('click', liColor);
    
    function liColor(event) {
        const clear = document.querySelectorAll('li')    
        for (let i = 0; i < clear.length; i += 1) {
            clear[i].style.backgroundColor = ''
        }
        const click = event.target
        click.style.backgroundColor = 'rgb(128, 128, 128)';  
    }



    function liColor(event) {
        const clear = document.querySelectorAll('li')    
        for (let i = 0; i < clear.length; i += 1) {
            clear[i].style.backgroundColor = ''
        }
        const click = event.target
        click.style.backgroundColor = 'rgb(128, 128, 128)';  
    }

ol.addEventListener('dblclick', lineThrough);

    function lineThrough(event) {
       if (event.target.className === 'completed'){
        event.target.classList.remove('completed')         
    }  else {
        event.target.classList.add('completed') 
    }
    }

deleteAll.addEventListener('click', dAll);

    function dAll() {
        const delAll = document.querySelectorAll('li')
        for (let i = 0; i < delAll.length; i +=1){
        delAll[i].remove();
        }

    }

deleteCompleted.addEventListener('click', dCompleted);

    function dCompleted() {
        const delCompleted = document.querySelectorAll('.completed')
        for (let x = 0; x < delCompleted.length; x += 1){
            delCompleted[x].remove();
        }
    }

    
    




   

  
      
   







