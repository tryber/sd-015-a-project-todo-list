
let TvalorInput = document.querySelector('#texto-tarefa');
let Tbutton = document.querySelector('#criar-tarefa');
let Tlist = document.querySelector('#lista-tarefas');


//criação das minhas 'li's
function add(){
    const newAdd = document.createElement('li');
    newAdd.innerText = TvalorInput.value;
    Tlist.appendChild(newAdd);
    TvalorInput.value = '';

    //newAdd.addEventListener('click',function(event){
        //if(event.target){
            //let lista = document.querySelectorAll('li');
//background-color
    //function tugo(event){
    //  event.target.classList.add('done');

//clique background cinza, único, ou seja apenas 1 elemento deve ter a classe 'done', enquanto o outro volta ao background normal
    function clickcinza(event){
        let lis = document.querySelectorAll('li');
        for(let li of lis){
        li.classList.remove('done');
    }
        event.target.classList.add('done');
        
    }

    newAdd.addEventListener('click', clickcinza);

//duplo clique line through
    function tugobarra(){
        newAdd.classList.toggle('completed')
    }

    newAdd.addEventListener('dblclick', tugobarra);

}

Tbutton.addEventListener('click', add );
