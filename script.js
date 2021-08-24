let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let deleteButton = document.querySelector('#apaga-tudo');

button.addEventListener('click', function(){
  let listItem = document.createElement('li');
  //listItem.classList.add('task');
  listItem.innerHTML = input.value;
  list.appendChild(listItem);
  input.value = '';
});

function greyColor(event){
  let li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1){
    if (li[i].style.backgroundColor = 'rgb(128, 128, 128)'){
      li[i].style.backgroundColor = 'white';
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

list.addEventListener('click', greyColor);

function lineThrough(event){
  let liDecoration = document.querySelectorAll('li');
  for (let i = 0; i < liDecoration.length; i += 1){
    if (event.target.classList !== 'completed'){
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  }
}

list.addEventListener('dblclick', lineThrough);

deleteButton.addEventListener('click', function(){
  let li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1){
    list.removeChild(li[i]);
  }
})