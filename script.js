const list = document.querySelector('#lista-tarefas');
function risc(riscado) {
  const allList4 = document.querySelectorAll('li');
  const itemRiscado = riscado.target;
  if (itemRiscado.className === 'completed') {
    itemRiscado.removeAttribute('class');
  } else {
    itemRiscado.classList.add('completed');
  }
}

function evento2() {
  const allList3 = document.querySelectorAll('li');
  for (let i = 0; i < allList3.length; i += 1) {
    allList3[i].addEventListener('dblclick', risc);
  }
}

function paintGrey(item) {
  const allList2 = document.querySelectorAll('li');
  for (let i = 0; i < allList2.length; i += 1) {
    allList2[i].style.removeProperty('background-color');
  }
  const itemGrey = item.target;
  itemGrey.style.backgroundColor = 'grey';
}

function evento() {
  const allList = document.querySelectorAll('li');
  for (let i = 0; i < allList.length; i += 1) {
    allList[i].addEventListener('click', paintGrey);
  }
}

function insertElement() {
  const item = document.getElementById('texto-tarefa').value;
  const itemList = document.createElement('li');
  itemList.innerHTML = item;
  list.appendChild(itemList);
  const input = document.getElementById('texto-tarefa');
  input.value = '';
  evento();
  evento2();
}

document.getElementById('criar-tarefa').addEventListener('click', insertElement);
document.getElementById('funcionamento').addEventListener('dblclick', risc);
