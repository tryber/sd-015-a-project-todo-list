/* Alexandrexpjr repositório consultado: https://github.com/tryber/sd-015-a-project-todo-list/blob/a12af374dea151f62f0e27e42a29b12b0f7f82e1/script.js */


    const getTask = document.querySelector('#texto-tarefa');
    const getButton = document.querySelector('#criar-tarefa');
    const getOL = document.querySelector('#lista-tarefas');
  
    getButton.addEventListener('click', function() {
      const createTask = document.createElement('li');
      createTask.innerHTML = getTask.value; 
      getOL.appendChild(createTask);
      getTask.value = '';   
    })
  
    getOL.addEventListener('click', function(event) {
      let changeStyle = event.target.style; 
      const getLi = document.querySelectorAll('li');
      for (let index = 0; index < getLi.length; index += 1) {
        getLi[index].style.backgroundColor = 'white'
      }
      changeStyle.backgroundColor = 'rgb(128,128,128)';
    })
  
    getOL.addEventListener('dblclick', function(event) {
      const changeClass = event.target.className;
      const getLi = document.querySelectorAll('li');
      if (changeClass !== 'completed') {
        event.target.className = 'completed';
      } else {
        event.target.className = '';
      }
    })
  
    
  