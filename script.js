// Requisito 05 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
// Requisito 06 - Ordene os itens da lista de tarefas por ordem de criação
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
let listItem = document.querySelector('#lista-tarefas');

listItem.addEventListener('click', paintListItem);

function paintListItem(event){
    clearBackground();
    let colored = event.target;
    colored.style.backgroundColor = 'rgb(128,128,128)';
}

// Requisito 08 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

function clearBackground() {
    let qtdListItem = listItem.children.length;
    for (let i = 0; i < qtdListItem; i += 1) {
        listItem.children[i].style.backgroundColor = 'inherit';
    }
}
