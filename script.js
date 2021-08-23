const list = document.querySelector('#lista-tarefas');

// Risca o item da lista quando o mesmo é clicado duas vezes.
function risc(riscado) {
  const itemRiscado = riscado.target;
  if (itemRiscado.className === 'completed') {
    itemRiscado.removeAttribute('class');
  } else {
    itemRiscado.classList.add('completed');
  }
}

// Adiciona o evento de double click nos elementos da lista.
function evento2() {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    document.querySelectorAll('li')[i].addEventListener('dblclick', risc);
  }
}

// Pìnta de cinza o intem da lista quando o meso é clicado uma vez.
function paintGrey(item) {
  const itemGrey = item.target;
  /* if (itemGrey.style.backgroundColor === 'grey') {
    itemGrey.style.removeProperty('background-color');
  } */
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].style.removeProperty('background-color');
  }
  itemGrey.style.backgroundColor = 'grey';
}

// Adiciona o evento de click nos itens da lista.
function evento1() {
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].addEventListener('click', paintGrey);
  }
}

// Insere o elemento do input na lista e depois chama o evento1 e evento 2.
function insertElement() {
  const item = document.getElementById('texto-tarefa').value;
  const itemList = document.createElement('li');
  itemList.innerHTML = item;
  list.appendChild(itemList);
  const input = document.getElementById('texto-tarefa');
  input.value = '';
  evento1();
  evento2();
}

// Deleta a lista.
function deletList() {
  const del = document.querySelectorAll('li');
  for (let i = 0; i < del.length; i += 1) {
    del[i].remove();
  }
}

// Remove os itens finalizados que estão riscados.
function removeFinished() {
  const finished = document.querySelectorAll('.completed');
  for (let i = 0; i < finished.length; i += 1) {
    finished[i].remove();
  }
}

// Busca a lista salva no localStorage e adiciona o evento1 e evento2.
function takeList() {
  list.innerHTML = localStorage.getItem('list');
  evento1();
  evento2();
}
window.onload = takeList;

// Salva a lista no localStorage.
function saveList() {
  localStorage.setItem('list', list.innerHTML);
}

// Move o item selecionado para cima na lista.
function moveUp() {
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    if (document.getElementsByTagName('li')[i].style.backgroundColor === 'grey' && (i - 1) !== -1) {
      list.insertBefore(document.getElementsByTagName('li')[i],
        document.getElementsByTagName('li')[i - 1]);
    }
  }
}

// Move o item selecionado para baixo na lista.
function moveDown() {
  for (let i = document.getElementsByTagName('li').length - 1; i >= 0; i -= 1) {
    if (document.getElementsByTagName('li')[i].style.backgroundColor === 'grey'
      && (i + 1) !== document.getElementsByTagName('li').length) {
      list.insertBefore(document.getElementsByTagName('li')[i + 1],
        document.getElementsByTagName('li')[i]);
    }
  }
}

// Remove o item selecionado da lista.
function removeSe() {
  for (let i = document.getElementsByTagName('li').length - 1; i >= 0; i -= 1) {
    if (document.getElementsByTagName('li')[i].style.backgroundColor === 'grey') {
      (document.getElementsByTagName('li')[i]).remove();
    }
  }
}
document.getElementById('criar-tarefa').addEventListener('click', insertElement);
document.getElementById('funcionamento').addEventListener('dblclick', risc);
document.getElementById('apaga-tudo').addEventListener('click', deletList);
document.getElementById('remover-finalizados').addEventListener('click', removeFinished);
document.getElementById('salvar-tarefas').addEventListener('click', saveList);
document.getElementById('mover-cima').addEventListener('click', moveUp);
document.getElementById('mover-baixo').addEventListener('click', moveDown);
document.getElementById('remover-selecionado').addEventListener('click', removeSe);
