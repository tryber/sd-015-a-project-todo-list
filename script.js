// Requesito 1
let selectBody = document.querySelector('body'); // selecionar tag body
let creatHeader = document.createElement('header'); // criar tag header
creatHeader.innerHTML = "Minha Lista de Tarefas"; // adicionar texto header
selectBody.appendChild(creatHeader); // colocar header como filho do body


// Requesito 2
let creatP = document.createElement('p');
creatP.id = 'funcionamento';
creatP.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
selectBody.appendChild(creatP);

// Requesito 3
let creatInput = document.createElement('input');
creatInput.id = 'texto-tarefa';
selectBody.appendChild(creatInput);

// Requesito 4
let creatOl = document.createElement('ol');
creatOl.id = 'lista-tarefa';
selectBody.appendChild(creatOl);

// Requesito 5
let creatButton = document.createElement('button');
creatButton.id = 'criar-tarefa';
selectBody.appendChild(creatButton);







