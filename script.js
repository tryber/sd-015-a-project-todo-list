const lista = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('texto-tarefa');
const botaoCriar = document.getElementById('criar-tarefa');
const botaoApagar = document.getElementById('apaga-tudo');
const botaoFinalizados = document.getElementById('remover-finalizados');
const botaoSalvar = document.getElementById('salvar-tarefas');
const botaoCima = document.getElementById('mover-cima');
const botaoBaixo = document.getElementById('mover-baixo');
const botaoApagarSelecionado = document.getElementById('remover-selecionado');

function adicionarEventos(elemento, evento, funcao) {
  if (elemento.length > 0) {
    for (let index = 0; index < elemento.length; index += 1) {
      elemento[index].addEventListener(evento, funcao);
    }
  } else {
    elemento.addEventListener(evento, funcao);
  }
}

function fundoCinza(evento) {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

function linhaRiscada(evento) {
  const alvo = evento.target;
  if (alvo.className.includes('completed')) {
    alvo.classList.remove('completed');
  } else {
    alvo.classList.add('completed');
  }
}

function criarElementosLista() {
  const elemento = document.createElement('li');
  elemento.innerText = inputTarefa.value;
  adicionarEventos(elemento, 'click', fundoCinza);
  adicionarEventos(elemento, 'dblclick', linhaRiscada);
  lista.appendChild(elemento);
  inputTarefa.value = '';
}

function apagarElementosLista() {
  const itens = lista.children;
  for (let index = 0; index < itens.length; index += 0) {
    lista.removeChild(itens[0]);
  }
}

function apagarElementosFinalizados() {
  const itens = document.getElementsByClassName('completed');
  for (let index = 0; index < itens.length; index += 0) {
    lista.removeChild(itens[0]);
  }
}

function salvarItens() {
  if (localStorage.length !== 0) {
    localStorage.clear();
  }
  const valor = JSON.stringify(lista.innerHTML);
  localStorage.setItem('listaSalva', valor);
  // const listaAtual = document.getElementsByTagName('li');
  // for (let index = 0; index < listaAtual.length; index += 1) {
  //   let valor = listaAtual[index].innerText;
  //   valor += ';; ';
  //   valor += listaAtual[index].className;
  //   localStorage.setItem(index, valor);
  // }
}

function recarregarElementosSalvos() {
  lista.innerHTML = JSON.parse(localStorage.getItem('listaSalva'));
  const tamanhoStorage = lista.children.length;
  for (let index = 0; index < tamanhoStorage; index += 1) {
    const elemento = lista.children[index];
    adicionarEventos(elemento, 'click', fundoCinza);
    adicionarEventos(elemento, 'dblclick', linhaRiscada);
  }
}

// function moverPraCima() {
//   if (document.getElementsByClassName('selected')[0]) {
//     const liCompleted = document.getElementsByClassName('selected')[0];
//     if (liCompleted.previousSibling) {
//       const beforeSibling = liCompleted.previousSibling;
//       beforeSibling.before(liCompleted);
//     }
//   }
// }

// function moverPraBaixo() {
//   if (document.getElementsByClassName('selected')[0]) {
//     const liCompleted = document.getElementsByClassName('selected')[0];
//     if (liCompleted.nextSibling) {
//       const afterSibling = liCompleted.nextSibling;
//       afterSibling.after(liCompleted);
//     }
//   }
// }

function moverPraCima() {
  const selecionado = document.querySelector('.selected');
  const listaItens = lista.childNodes;
  for (let index = 0; index < listaItens.length; index += 1) {
    if (selecionado === listaItens[index] && index !== 0) {
      lista.insertBefore(selecionado, listaItens[index - 1]);
      break;
    }
  }
}

function moverPraBaixo() {
  const selecionado = document.querySelector('.selected');
  const listaItens = lista.childNodes;
  for (let index = 0; index < listaItens.length; index += 1) {
    if (selecionado === listaItens[index] && index !== listaItens.length - 1) {
      lista.insertBefore(selecionado, listaItens[index + 2]);
      break;
    }
  }
}

function removerSelecionado() {
  lista.removeChild(document.querySelector('.selected'));
}

function carregarPagina() {
  adicionarEventos(botaoCriar, 'click', criarElementosLista);
  adicionarEventos(botaoApagar, 'click', apagarElementosLista);
  adicionarEventos(botaoFinalizados, 'click', apagarElementosFinalizados);
  adicionarEventos(botaoSalvar, 'click', salvarItens);
  adicionarEventos(botaoCima, 'click', moverPraCima);
  adicionarEventos(botaoBaixo, 'click', moverPraBaixo);
  adicionarEventos(botaoApagarSelecionado, 'click', removerSelecionado);

  recarregarElementosSalvos();
}

window.onload = carregarPagina;
