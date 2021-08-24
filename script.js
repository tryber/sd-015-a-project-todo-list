let arrayLi = [];
let posAtual = 0;
function addTask(evento) {
  localStorage.clear()
  const elementText = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const elementList = document.createElement('li');
  elementList.innerHTML = elementText;
  list.appendChild(elementList);
  document.getElementById('texto-tarefa').value = '';
  elementList.addEventListener('dblclick', finished);
  elementList.addEventListener('click', changeSelectedColor);
  arrayLi = Array.from(document.querySelectorAll('li'));
}

function changeSelectedColor(evento) {
  removeAllSelectedLi();
  evento.target.classList.add('selected');
  posAtual = arrayLi.findIndex((li) => li.className.includes('selected'));
}

function finished(evento) {
  if (evento.target.classList.contains('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
    evento.target.classList.remove('selected');
  }
}

function clearList(evento) {
  document.getElementById('lista-tarefas').innerHTML = '';
}

function deleteComplete() {
  const comp = document.querySelectorAll('.completed');
  const lista = document.getElementById('lista-tarefas');
  for (let i = 0; i < comp.length; i++) {
    lista.removeChild(comp[i]);
  }
}

function deleteSelected() {
  const comp = document.querySelectorAll('.selected');
  const lista = document.getElementById('lista-tarefas');
  for (let i = 0; i < comp.length; i++) {
    lista.removeChild(comp[i]);
  }
}

function move(direction) {
  let newArrayLi = arrayLi;
  if (direction === 'up') {
    newArrayLi = swapArrayPossitions(
      newArrayLi,
      posAtual,
      posAtual - 1 < 0 ? 0 : --posAtual
    );
  } else {
    newArrayLi = swapArrayPossitions(
      newArrayLi,
      posAtual,
      posAtual + 1 > arrayLi.length - 1 ? arrayLi.length - 1 : ++posAtual
    );
  }
  console.log(arrayLi);
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';
  for (let i = 0; i < newArrayLi.length; i++) {
    lista.appendChild(newArrayLi[i]);
  }
}

function removeAllSelectedLi() {
  let list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('selected')) {
      list[i].classList.remove('selected');
    }
  }
}

function swapArrayPossitions(array, pos1, pos2) {
  let aux = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = aux;
  return array;
}

function saveAll() {
  let savedObject = [];
  for (let i = 0; i < arrayLi.length; i++) {
    savedObject.push({
      value: arrayLi[i].innerHTML,
      class: arrayLi[i].className,
    });
  }
  localStorage.setItem('arrayLi', JSON.stringify(savedObject));
}

function onLoad() {
  const savedObject = JSON.parse(localStorage.getItem('arrayLi'));
  if (savedObject) {
    const lista = document.getElementById('lista-tarefas');
    for (let i = 0; i < savedObject.length; i++) {
      const elementList = document.createElement('li');
      elementList.innerHTML = savedObject[i].value;
      elementList.className = savedObject[i].class;
      elementList.addEventListener('dblclick', finished);
      elementList.addEventListener('click', changeSelectedColor);
      lista.appendChild(elementList);
    }
  }
}

onLoad();