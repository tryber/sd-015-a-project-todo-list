// Função para mudar o fundo da tarefa selecionada
function selecionaTarefa(evento) {
  const ultimaTarefa = document.querySelector('.selected');
  if (ultimaTarefa !== null) ultimaTarefa.classList.remove('selected');
  if ((ultimaTarefa !== evento.target)) evento.target.classList.add('selected');
}

// Função para riscar a tarefa completa
function completaTarefa(evento) {
  const tarefaCompleta = evento.target;
  if (tarefaCompleta.className.includes('completed')) {
    tarefaCompleta.classList.remove('completed');
  } else {
    tarefaCompleta.classList.add('completed');
  }
}

// Função para criar tarefas na lista
function criaTarefa(classe, texto) {
  const listaTarefas = document.querySelector('#lista-tarefas');
  if (texto) {
    const novoElementoLista = document.createElement('li');
    novoElementoLista.innerText = texto;
    novoElementoLista.addEventListener('click', selecionaTarefa);
    novoElementoLista.addEventListener('dblclick', completaTarefa);
    if (classe) novoElementoLista.className = classe;
    listaTarefas.appendChild(novoElementoLista);
    document.querySelector('#texto-tarefa').value = '';
    if (listaTarefas.children.length > 20) {
      listaTarefas.removeChild(listaTarefas.lastChild);
      alert('limite de tarefas atingido');
    }
  }
}

// Função do botão para poder colocar parâmetros na função de criar tarefa
function botaoCriar() {
  criaTarefa('', document.querySelector('#texto-tarefa').value);
}

// Função para apagar lista de tarefas
function apagaTudo() {
  if (window.confirm('Você está apagando todos os itens da sua lista, deseja continuar?')) {
    const lista = document.getElementsByTagName('li');
    while (lista[0]) lista[0].parentNode.removeChild(lista[0]);
  }
}

// Função para remover tarefas finalizadas
function removeFinalizados() {
  const completos = document.getElementsByClassName('completed');
  for (let i = completos.length - 1; i > 0; i -= 1) {
    if (completos[i].tagName === 'LI') completos[i].parentNode.removeChild(completos[i]);
  }
}

// Função para salvar as tarefas
function salvaTarefas() {
  const tarefas = document.getElementsByTagName('li');
  const classesTarefa = [];
  const textosTarefa = [];
  for (let i = 0; i < tarefas.length; i += 1) {
    classesTarefa.push(tarefas[i].className);
    textosTarefa.push(tarefas[i].innerText);
  }
  localStorage.setItem('classes', JSON.stringify(classesTarefa));
  localStorage.setItem('textos', JSON.stringify(textosTarefa));
}

// Chama as tarefas salvas e coloca elas na lista quando a página é iniciada
if (localStorage.getItem('textos')) {
  const classeTarefas = JSON.parse(localStorage.getItem('classes'));
  const textoTarefas = JSON.parse(localStorage.getItem('textos'));
  for (let i = 0; i < classeTarefas.length; i += 1) {
    criaTarefa(classeTarefas[i], textoTarefas[i]);
  }
}

// Função para mover tarefas acima
function moveAcima() {
  const tarefaSelecionada = document.querySelector('.selected');
  if (tarefaSelecionada && tarefaSelecionada.previousSibling) {
    tarefaSelecionada.parentNode.insertBefore(tarefaSelecionada, tarefaSelecionada.previousSibling);
  }
}

// Função para mover tarefas abaixo
function moveAbaixo() {
  const tarefaSelecionada = document.querySelector('.selected');
  if (tarefaSelecionada && tarefaSelecionada.nextSibling) {
    const proxPosicao = tarefaSelecionada.nextSibling.nextSibling;
    tarefaSelecionada.parentNode.insertBefore(tarefaSelecionada, proxPosicao);
  }
}

// Função para remover tarefas
function removeSelecionado() {
  const tarefa = document.querySelector('.selected');
  if (tarefa) tarefa.remove();
}

// Criando os eventos para os elementos criados no html
document.querySelector('#criar-tarefa').onclick = botaoCriar;
document.querySelector('#apaga-tudo').onclick = apagaTudo;
document.querySelector('#remover-finalizados').onclick = removeFinalizados;
document.querySelector('#salvar-tarefas').onclick = salvaTarefas;
document.querySelector('#mover-cima').onclick = moveAcima;
document.querySelector('#mover-baixo').onclick = moveAbaixo;
document.querySelector('#remover-selecionado').onclick = removeSelecionado;

// Adicionando mouse over nos botões para clareza pare pessoa usuária
function descreverBotão(evento) {
  const botaoSelecionado = evento.target;
  switch (botaoSelecionado.id) {
  case 'remover-selecionado':
    botaoSelecionado.innerText = 'X - Remover';
    break;
  case 'mover-cima':
    botaoSelecionado.innerText = '↑ - mover para cima';
    break;
  case 'mover-baixo':
    botaoSelecionado.innerText = '↓ - mover para baixo';
    break;
  default:
    break;
  }
}

function retornarOriginal(evento) {
  const botaoSelecionado = evento.target;
  switch (botaoSelecionado.id) {
  case 'remover-selecionado':
    botaoSelecionado.innerText = 'X';
    break;
  case 'mover-cima':
    botaoSelecionado.innerText = '↑';
    break;
  case 'mover-baixo':
    botaoSelecionado.innerText = '↓';
    break;
  default:
    break;
  }
}

const botoesComDescricao = document.getElementsByClassName('hover');
for (let i = 0; i < botoesComDescricao.length; i += 1) {
  botoesComDescricao[i].addEventListener('mouseover', descreverBotão);
  botoesComDescricao[i].addEventListener('mouseout', retornarOriginal);
}

// Adicionando Keyup no input para que a pessoa usuária possa apertar enter em vez de clicar no botão para criar a tarefa
function enterTeclado(evento) {
  if (evento.keyCode === 13) {
    document.getElementById('criar-tarefa').click();
  }
}
const input = document.getElementById('texto-tarefa');
input.addEventListener('keyup', enterTeclado);
