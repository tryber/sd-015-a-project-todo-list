
let TvalorInput = document.querySelector('#texto-tarefa');
let Tbutton = document.querySelector('#criar-tarefa');
let Tlist = document.querySelector('#lista-tarefas');

function add(){
    const newAdd = document.createElement('li');
    newAdd.innerText = TvalorInput.value;
    newAdd.classList.add('select');
    Tlist.appendChild(newAdd);
    TvalorInput.value = '';
    newAdd.addEventListener('click',function(event){
        if(event.target){
            let lista = document.querySelectorAll('li');


        }
    })

 
}

Tbutton.addEventListener('click', add );

///////////////////////////////////////////////////////////////////

//let listItem = querySelectorAll('li');

//listItem.onclick = function(){
    //let selected = window.getComputedStyle(cores[0]).getPropertyValue('background-color')
    


    //tabela[0].onclick = function(){
    //    tabela[0].style.backgroundColor = selected
   // }
    //tabela[1].onclick = function(){
    //    tabela[1].style.backgroundColor = selected


//elemento.addEventListener(dblclick, function(){
    
//})

