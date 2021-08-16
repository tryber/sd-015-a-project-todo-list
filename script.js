//  Constante usada varias vezes
const ol = document.getElementById('lista-tarefas');
const classeList = 'list-values';

//  Carregar
function initialState() {
  if (localStorage !== undefined) {
    const valores = Object.values(localStorage);
    valores.sort();
    valores.forEach((e) => {
      const arr = e.split('--');
      const li = document.createElement('li');
      const [a, b] = [1, 2];
      li.className = arr[a];
      li.innerHTML = arr[b];
      ol.appendChild(li);
    });
  }
}
initialState();

//  Adicionar item a lista
function addItem() {
  const bot = document.getElementById('criar-tarefa');
  bot.addEventListener('click', (_) => {
    const input = document.getElementById('texto-tarefa');
    const li = document.createElement('li');
    li.innerHTML = input.value;
    li.className = classeList;
    ol.appendChild(li);
    input.value = '';
  });
}
addItem();

//  selecionar
function select() {
  ol.addEventListener('click', (e) => {
    const li = document.getElementsByClassName(classeList);
    for (let c = 0; c < li.length; c += 1) {
      if (li[c].className.split(' ').includes('selected')) {
        li[c].className = classeList;
      }
    }
    if (e.target.className.split(' ').includes('completed') === false) {
      e.target.className += ' selected';
    }
  });
}
select();

//  marcar item
function mark() {
  ol.addEventListener('dblclick', (e) => {
    if (e.target.className.split(' ').includes('completed')) {
      e.target.className = classeList;
    } else {
      e.target.className = 'list-values completed';
    }
  });
}
mark();

//  botão apagar tudo
function clear() {
  const bot = document.getElementById('apaga-tudo');
  bot.addEventListener('click', (_) => {
    localStorage.clear();
    ol.innerHTML = '';
  });
}
clear();

//  botão remover finalizados
function removeFinish() {
  const bot = document.getElementById('remover-finalizados');
  bot.addEventListener('click', (_) => {
    const items = document.getElementsByClassName(classeList);
    const excluir = [];
    for (let c = 0; c < items.length; c += 1) {
      if (items[c].className.split(' ').includes('completed')) {
        excluir.push(items[c]);
      }
    }
    excluir.forEach((e) => ol.removeChild(e));
  });
}
removeFinish();

//  salvar
function save() {
  const bot = document.getElementById('salvar-tarefas');
  bot.addEventListener('click', (_) => {
    localStorage.clear();
    const itens = document.getElementsByClassName(classeList);
    for (let c = 0; c < itens.length; c += 1) {
      localStorage[c] = `${c + 1}--${itens[c].className}--${itens[c].innerHTML}`;
    }
  });
}
save();

// mover o selecionado para cima
function moveUP() {
  const up = document.getElementById('mover-cima');
  up.addEventListener('click', (_) => {
    const itens = document.getElementsByClassName(classeList);
    const arr = [];
    for (let c = 0; c < itens.length; c += 1) {
      arr.push(itens[c]);
    }
    if (arr.findIndex((e) => e.className.split(' ').includes('selected')) === -1) {
      return '';
    }
    const index = arr.findIndex((e) => e.className.split(' ').includes('selected'));
    if (arr[index - 1] !== undefined) {
      const prev = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = prev;
    }
    arr.forEach((e) => ol.appendChild(e));
  });
}
moveUP();

//  mover o selecionado para baixo
function moveDOWN() {
  const down = document.getElementById('mover-baixo');
  down.addEventListener('click', (_) => {
    const itens = document.getElementsByClassName(classeList);
    const arr = [];
    for (let c = 0; c < itens.length; c += 1) {
      arr.push(itens[c]);
    }
    if (arr.findIndex((e) => e.className.split(' ').includes('selected')) === -1) {
      return '';
    }
    const index = arr.findIndex((e) => e.className.split(' ').includes('selected'));
    if (arr[index + 1] !== undefined) {
      const prox = arr[index + 1];
      arr[index + 1] = arr[index];
      arr[index] = prox;
    }
    arr.forEach((e) => ol.appendChild(e));
  });
}
moveDOWN();

//  remover selecionado
function removeSelect() {
  const bot = document.getElementById('remover-selecionado');
  bot.addEventListener('click', (_) => {
    ol.removeChild(document.querySelector('.selected'));
  });
}
removeSelect();
