// Exercício 5 e 6 - Criar a função do botão e do input.
const todoList = document.getElementById('lista-tarefas');
const listButton = document.getElementById('criar-tarefa');
const inputList = document.getElementById('texto-tarefa');

function addToListButton () {
	const inputText = inputList.value;
	const newLi = document.createElement('li');
	newLi.className = 'listItem';
	newLi.innerHTML = inputText;
	todoList.appendChild(newLi);
	inputList.value = ''
}
listButton.addEventListener('click', addToListButton);

// Exercício 7 e 8 - mudar a cor de fundo do item da lista quando clicado.
todoList.addEventListener('click', itemColorChange)
let selected = 0
function itemColorChange(e) {
	if (selected.className === 'listItem-Selected completed' || selected.className === 'listItem completed') {
		selected.className = 'listItem completed';
	}else {
		selected.className = 'listItem';
	}
	if (e.target.className === 'listItem') {
		e.target.className = 'listItem-Selected';
		selected = document.getElementsByClassName('listItem-Selected')[0];
	}
}

// Exercício 9 - double click para riscar a tarefa
function taskDone(e) {
	if (e.target.className === 'listItem-Selected') {
		e.target.className ='listItem completed';
	} else if (e.target.className === 'listItem completed') {
		e.target.className = 'listItem'
	}
}
todoList.addEventListener('dblclick', taskDone);

// Exercício 10 - Criar um botão que limpa a lista
// Criação do botão.
const deleteAllButton = document.createElement('button');
deleteAllButton.innerText = 'Apagar lista';
deleteAllButton.id = 'apaga-tudo';
const buttonSection = document.querySelectorAll('section')[2];
buttonSection.appendChild(deleteAllButton);


// Adicionando funcionalidade ao botão.
let apagaTudo = document.getElementById('apaga-tudo');
function deleteAllList() {
	let allLi = document.getElementsByTagName('li');
	console.log(allLi);
	for (let index = allLi.length - 1; index >= 0; index -= 1) {
		todoList.removeChild(allLi[index]);	
	}
	
}

apagaTudo.addEventListener('click', deleteAllList);

// Exercício 11 - Criar um botão que remove da listas itens já concluidos
// Criação do botão.
const deleteAllDone = document.createElement('button');
deleteAllDone.innerText = 'Apagar itens concluídos';
deleteAllDone.id = 'remover-finalizados';
buttonSection.appendChild(deleteAllDone);

// Adicionando funcionalidade ao botão.
let allDoneTasks = document.getElementsByClassName('listItem completed');
function deleteDone() {
    for (let index = allDoneTasks.length - 1; index >= 0; index -= 1) {
		let thisItem = allDoneTasks[index];
		todoList.removeChild(thisItem);
	}
}
document.getElementById('remover-finalizados').addEventListener('click', deleteDone);