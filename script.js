/* Inicializando o botão adcionar*/
let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', criaTarefa);

/* Inicializando textbox*/
let caixaDeTexto = document.getElementById('texto-tarefa')

/* seleção de item na lista*/ 
let linhaSelecionada = false; 

/* Inicializando o botão apaga tudo*/
let apagador = document.getElementById('apaga-tudo');
apagador.addEventListener('click',apagaTudo);

/* Inicializando o botão para apagar tarefas completas */
let apagadorCompletas = document.getElementById('remover-finalizados');
apagadorCompletas.addEventListener ('click',apagaSelecionadas);


/* Função para criar criar a tarefa */
function criaTarefa(){
    let textoInserido = caixaDeTexto.value;
    let itemLista = document.getElementById('lista-tarefas');
    let item = document.createElement('li');

    item.innerText = textoInserido; 
    itemLista.appendChild(item);
    caixaDeTexto.value = '';

    item.addEventListener('click',lineColor);
    item.addEventListener('dblclick',cutLine); 


}
/* Inicializando variavel que contém a linha selecionada*/
let itemSelecionado;
/* Função para colorir a linha selecionada*/ 
function lineColor(event){
    if(linhaSelecionada === true){
        itemSelecionado.style.backgroundColor = ''; 
        linhaSelecionada = false;
    }
    itemSelecionado = event.target
    itemSelecionado.style.backgroundColor = 'rgb(128,128,128)'; 
    linhaSelecionada = true;
}
/*função para cortar o texto da lista*/
function cutLine(event){
    let linhaCortada = event.target;
    if(linhaCortada.className === 'completed'){
        linhaCortada.className = '';
    }else{
    linhaCortada.className = 'completed';
    }
}
/* Função para apagar todos os elementos da lista*/
function apagaTudo (){
    let apagarAqui = document.getElementById('lista-tarefas');
    apagarAqui.innerText = '';
}
/* Função para apagar  os elementos completos da lista*/
function apagaSelecionadas(){
 
    let li = document.querySelectorAll('li');
    for (let key in li){
        if (li[key].className === 'completed'){
            li[key].remove();
        }
    }
}