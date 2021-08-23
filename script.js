window.onload = function(){

    const taskButton = document.querySelector('#criar-tarefa')
    const ol = document.querySelector('ol')
    const textInput = document.querySelector('#texto-tarefa')

    taskButton.addEventListener('click', function(){
      let list = document.createElement('li')
      list.classList.add("elemento");
      ol.appendChild(list)
      list.innerText = textInput.value
      textInput.value = "";
    })
 
    ol.addEventListener('click', function(event){   
      const selectClass = document.querySelector('.selected')       
        if (selectClass) {
           
         
          selectClass.classList.remove('selected');
          selectClass.style.backgroundColor = ''
          
         }event.target.classList.add('selected');
          event.target.style.backgroundColor = 'rgb(128,128,128)'; 
        }) 


      ol.addEventListener('dblclick', throughLine);

        function throughLine(event) {
          if (event.target.classList.contains('completed')){
            event.target.classList.remove('completed')         
        }  else {
            event.target.classList.add('completed') 
        }
        }
        const deleteAllButton = document.querySelector("#apaga-tudo")
        deleteAllButton.addEventListener('click', deleteAllTask);

        function deleteAllTask() {
            const li = document.querySelectorAll('li')
            for (let i = 0; i < li.length; i +=1){
            li[i].remove();
            }
          }

        // ol.addEventListener('dblclick',throughLine) 
        // function throughLine(event){
        //   console.log(event.target.classList.contains('completed'))
        //   if (event.target.classList.contains('completed') === true){
        //     event.target.classList.add('completed')

        //   }else {
        //   event.target.classList.remove('completed');

        //   }
        
        // } 
      }


