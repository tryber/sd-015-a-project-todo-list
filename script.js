// Global Variables
let allLi = document.querySelectorAll('li');
  

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
  creatLi.innerHTML = teste; // pega o conteúdo escrito no input e bota no li
  creatInput.value = ""; // apaga o conteúdo escrito no input


// Requesito 8
creatLi.addEventListener('click', (event) => {
  let allLi = document.querySelectorAll('li');
  for (let i = 0; i < allLi.length; i ++) {
  allLi[i].style.backgroundColor = "white";
  }
  creatLi.style.backgroundColor = "rgb(128, 128, 128)";   
  }) 

  // Requesito 9

  creatLi.addEventListener('dblclick', () => {
    let allLi1 = document.querySelectorAll('li');
    for (let i = 0; i < allLi1.length; i ++) {
    let forLi = allLi1[i];
    forLi.className = 'completed';
    console.log(forLi);
    }
    
    

})
creatOl.addEventListener('dblclick', () => {
  allLi

})


   
})









//Requesito 10
let creatEraseButton = document.createElement('button');
creatEraseButton.id = 'apaga-tudo';
selectBody.appendChild(creatEraseButton); // criei o botao e botei no body

creatEraseButton.addEventListener ('click' , () => {
  let creatLi = document.querySelectorAll('li');
  for (let i = 0; i < creatLi.length; i++)
  {
    let eraseLi = creatLi[i];
    eraseLi.remove();
  }
  
})









