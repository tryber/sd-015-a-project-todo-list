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
creatOl.id = 'lista-tarefas';
selectBody.appendChild(creatOl);

// Requesito 5 ,6 e 7
let creatButton = document.createElement('button');
creatButton.id = 'criar-tarefa';
selectBody.appendChild(creatButton); // criei o botao e botei no body

creatButton.addEventListener('click', () =>{
  let creatLi = document.createElement('li'); // cria elemento li
  creatOl.appendChild(creatLi); // coloca o li dentro do ol
  let teste = creatInput.value;
  let r = 128;
  let g = 128;
  let b = 128;
  creatLi.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  creatLi.innerHTML = teste; // pega o conteúdo escrito no input e bota no li
  creatInput.value = ""; // apaga o conteúdo escrito no input
})











