//declarando constantese variaveis
const button=document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");
const listaOrdenada = document.getElementById("lista-tarefas");
const apagaTudo=document.getElementById("apaga-tudo");
const removerFinalizados=document.getElementById("remover-finalizados");
const removerSelecionado=document.getElementById("remover-selecionado");
const moverParaBaixo=document.getElementById("mover-baixo");
const moverParaCima=document.getElementById("mover-cima");
let lista = document.getElementsByClassName('listaDeTarefas');
 

// Adicionar uma tarefa a lista:
function adicionaTarefa ()
{
    let valor = document.createElement('li');
    valor.classList="listaDeTarefas";    
    valor.innerText=input.value;
    listaOrdenada.appendChild(valor); 
    input.value=''; 
}
button.addEventListener('click',adicionaTarefa);

//Mudando a cor de fundo do item selecionado
function changeColor (event)
{
    
    const selected =document.querySelector('.selected');
    if (selected !== null) {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
    }
    else { event.target.classList.add('selected');}
     
}
listaOrdenada.addEventListener('click',changeColor);

//Marcando um item como completo.
function itemCompleto (event)
{
    const completed =document.querySelector('.completed');
    if (event.target=== completed)
    {
        event.target.classList.remove('completed');
    }
    else {  event.target.classList.add('completed');}
}
listaOrdenada.addEventListener('dblclick' ,itemCompleto);

//apagando todos os itens da lista
function apaga (event)
{
    let apagarItem = document.querySelector('ol');
apagarItem.innerHTML="";
}
apagaTudo.addEventListener('click',apaga);

//apagando itens finalizados
function removeFinalizados ()
{     
    for (let i=lista.length-1;i>=0;i-=1)
    {
        if (lista[i].classList.contains('completed')){ listaOrdenada.removeChild(lista[i]);}
    }
}
removerFinalizados.addEventListener('click',removeFinalizados);

//apagando item selecionado
function removeSelecionado ()
{   
     for (let i=lista.length-1;i>=0;i-=1)
    {        
        if (lista[i].classList.contains('selected'))
        { 
            listaOrdenada.removeChild(lista[i]);
            lista[i-1].classList.add("selected");
            break;
        }
    }
}
removerSelecionado.addEventListener('click',removeSelecionado);

//movendo item selecionado para baixo
function moverBaixo ()
{    
    for (let i=0;i<lista.length;i+=1)
    {  
        if (lista[i].classList.contains('selected'))
        {  
            if (i===lista.length-1){alert("item selecionado é o útimo");break;} 
            else {
                let temp = lista[i+1].innerText;                 
                lista[i+1].innerText=lista[i].innerText;
                lista[i].innerText=temp;
                lista[i].classList.remove('selected');
                lista[i+1].classList.add('selected'); 
                if (lista[i].classList.contains('completed')) 
                {
                    lista[i].classList.remove('completed');
                lista[i+1].classList.add('completed');
                }
            break;}
        }
    }
}
moverParaBaixo.addEventListener('click',moverBaixo);

//movendo para baixo
function moverCima ()
{   
    let lista = document.getElementsByTagName('li');
    for (let i=0;i<lista.length;i+=1)
    {        
        if (lista[i].classList.contains('selected'))
        {           
            if (i===0){alert("item selecionado é o primeiro");break;} 
            else {
                let temp = lista[i-1].innerText; 
                lista[i-1].innerText=lista[i].innerText;
                lista[i].innerText=temp;
                lista[i].classList.remove('selected');
                lista[i-1].classList.add('selected');
                if (lista[i].classList.contains('completed')) 
                {
                lista[i].classList.remove('completed');
                lista[i-1].classList.add('completed');
                }
            break;}
        }
        
    }
}
moverParaCima.addEventListener('click',moverCima);




