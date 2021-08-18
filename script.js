const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
let cont = 0;
const cleanButton = document.querySelector('#apaga-tudo')
const removeCompletedButton = document.querySelector('#remover-finalizados')
// Requisito 5 e 6:
// Adicionar o elemento li na ol com click
button.addEventListener('click', function () {  
  if (input.value === '') {
    alert('Digite algo!');
  } else {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.className = 'list-item';
    if (cont === 0) {
      li.className = 'list-item selected';
    }
    li.addEventListener('click', addBackgroundColor);
    li.addEventListener('dblclick', lineThrough)
    ol.appendChild(li);
    input.value = '';
    cont += 1;
  }
});
// Adicionar o elemento li na ol com enter
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    if (input.value === '') {
      alert('Digite algo!');
    } else {
      let li = document.createElement('li');
      li.innerText = input.value;
      li.className = 'list-item';
      if (cont === 0) {
        li.className = 'list-item selected';
      }
      li.addEventListener('click', addBackgroundColor);
      li.addEventListener('dblclick', lineThrough);        
      ol.appendChild(li);
      input.value = '';
      cont += 1;
    }
  }      
});

// Requisito 7:
function addBackgroundColor(event) {
  const newColor = 'rgb(128, 128, 128)';
  const defaultColor = 'white';

  // Requisito 8:
  const selected = document.querySelector('.selected');  
  selected.classList.remove('selected');
  event.target.classList.add('selected');

  const allItems = document.querySelectorAll('.list-item');

  for (let index = 0; index < allItems.length; index += 1) {
    if (allItems[index].classList.length > 1) {
      event.target.style.backgroundColor = newColor;
    } else {
      allItems[index].style.backgroundColor = defaultColor;
    }
  }
}

// Requisito 9:
function lineThrough(event) {
  let eventTarget = event.target;

  if (eventTarget.style.textDecoration === 'none' || eventTarget.style.textDecoration === '') {
    eventTarget.style.setProperty('text-decoration', 'line-through solid rgb(0, 0, 0)');
    eventTarget.className = 'list-item selected completed';
  } else {
    eventTarget.style.setProperty('text-decoration', 'none');
    eventTarget.classList.remove('completed');
  }
}

// Requisito 10:
function cleanTasks() {
  let ol = document.querySelector('#lista-tarefas')
  let children = document.querySelectorAll('.list-item')

  for (let index = 0; index < children.length; index += 1) {
    ol.removeChild(children[index])
  }
}

cleanButton.addEventListener('click', cleanTasks);

// Requisito 11:
function cleanCompletedTasks() {
  let ol = document.querySelector('#lista-tarefas')
  let children = document.querySelectorAll('.list-item')

  for (let index = 0; index < children.length; index += 1) {
    if (children[index].style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
      ol.removeChild(children[index])
    }
  }
}

removeCompletedButton.addEventListener('click', cleanCompletedTasks)

window.addEventListener('click', function(event) {
  console.log(event);
  const testeCor = event.target.style.backgroundColor;
  // const testElementoSelecionado = event.target;
  console.log(testeCor);
  // console.log(testElementoSelecionado);
})
