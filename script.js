
let TvalorInput = document.querySelector('#texto-tarefa');
let Tbutton = document.querySelector('#criar-tarefa');
let Tlist = document.querySelector('#lista-tarefas');

function add(){
    const newAdd = document.createElement('li');
    newAdd.innerText = TvalorInput.value;
    newAdd.classList.add('lista');
    Tlist.appendChild(newAdd);
    TvalorInput.value = '';
    
    //newAdd.addEventListener('click',function(event){
        //if(event.target){
            //let lista = document.querySelectorAll('li');
//background-color
    function tugo(){
        newAdd.classList.toggle('done')
    }
    newAdd.addEventListener('click', tugo)

    function tugobarra(){
        newAdd.classList.toggle('completed')
    }
    newAdd.addEventListener('dblclick', tugobarra)
}

Tbutton.addEventListener('click', add );
















//function clickrgb(event){
//    const listaback = document.querySelectorAll('lista');
//    listaback.classList.remove('selected');
//    event.target.classList.add('selected');

//}

