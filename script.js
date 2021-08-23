
let TvalorInput = document.querySelector('#texto-tarefa');
let Tbutton = document.querySelector('#criar-tarefa');
let Tlist = document.querySelector('#lista-tarefas');

function add(){
    const newAdd = document.createElement('li');
    newAdd.innerText = TvalorInput.value;
    newAdd.classList.add('select');
    Tlist.appendChild(newAdd);
    TvalorInput.value = '';

}

elemento.addEventListener(dblclick, function(){
    
})

Tbutton.addEventListener('click', add );

