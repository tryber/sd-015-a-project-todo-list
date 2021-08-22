// Requisito 05 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
let input = document.getElementById('texto-tarefa');
let button = document.getElementById('criar-tarefa');
let orderedList = document.getElementById('lista-tarefas');

button.addEventListener('click', handleButtonClick);

function handleButtonClick(){
    let li = document.createElement('li');
    li.innerText = input.value;
    orderedList.appendChild(li);
    input.value = "";
}

// Requisito 07 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
let coloredListItem = document.querySelector('#lista-tarefas');

coloredListItem.addEventListener('click', paintListItem);

function paintListItem(event){
    let colored = event.target;
    colored.style.backgroundColor = 'rgb(128,128,128)';
}