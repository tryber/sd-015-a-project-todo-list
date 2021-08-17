const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const buttonDeleteAll = document.getElementById('apaga-tudo');
const buttonDeleteItem = document.getElementById('remover-selecionado');
const li = document.getElementsByTagName('li'); 

button.addEventListener('click',function(){
const li = document.createElement('li');
const task = input.value;
li.innerText = task;
ol.appendChild(li);
li.addEventListener('click',liSelected);
li.addEventListener('dblclick',clickTwice);
input.value = '';
input.focus();
});

function liSelected(event){
  for(let index = 0; index < li.length; index += 1){
    li[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
};
function clickTwice(event){
  //event.target.classList.toggle('completed');
if(event.target.classList.contains('completed')){
  event.target.classList.remove('completed')
} else{
  event.target.classList.add('completed')
}
};

buttonDeleteAll.addEventListener('click',deleteAll);
function deleteAll(){
  ol.remove();
}
buttonDeleteItem.addEventListener('click',deleteItem);
function deleteItem(event){
if(event.target.classList.contains('completed')){
  li.remove();
}
}








 
 