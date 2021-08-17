const textoTarefa = document.querySelector("#texto-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");
const criarTarefa = document.querySelector("#criar-tarefa");
const deleteBtn = document.querySelector("#apaga-tudo");
const deleteBtnComplete = document.querySelector("#remover-finalizados");
const deleteBtnSelected = document.querySelector("#remover-selecionado");

function addTask(){
if (textoTarefa.value === ''){
    alert ("Nenhuma tarefa foi adicionada")
}else {
    const text = document.createElement('li');
    text.innerText = textoTarefa.value;
    listaTarefas.appendChild(text);
    textoTarefa.value = '';
}
}
criarTarefa.addEventListener('click', addTask)

function oneClick(event){
let selected = document.querySelectorAll('.selected')
for (i= 0; i < selected.length; i += 1){
selected[i].classList.remove('selected')
selected[i].style.backgroundColor = ''
}
event.target.classList.add('selected')
event.target.style.backgroundColor = 'rgb(128, 128, 128)';
 }

listaTarefas.addEventListener ('click', oneClick)


function doubleClick (event){
event.target.classList.toggle ('completed') //Com o toggle consegui adicionar e remover a clase ao clicar. Link de referência: https://www.w3schools.com/howto/howto_js_toggle_class.asp
}
listaTarefas.addEventListener ('dblclick', doubleClick)

function clearButton(){
 listaTarefas.innerHTML = ''   
}
deleteBtn.addEventListener ('click', clearButton)   

function clearCompletedButton(){
let completedTask= document.querySelectorAll('.completed')
for (i=0 ; i < completedTask.length; i += 1) { 
completedTask[i].parentNode.removeChild(completedTask[i]); //Fonte: https://www.w3schools.com/jsref/met_node_removechild.asp
}
}
deleteBtnComplete.addEventListener('click', clearCompletedButton);

function clearSelectedButton(){
    let selectedTask= document.querySelectorAll('.selected')
    for (i=0 ; i < selectedTask.length; i += 1) { 
    selectedTask[i].parentNode.removeChild(selectedTask[i]);
    }
    }
    deleteBtnSelected.addEventListener('click', clearSelectedButton);



