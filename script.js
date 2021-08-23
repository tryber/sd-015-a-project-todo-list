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

