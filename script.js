console.log('hello world!');

const secction = document.querySelector('#section-principal');

function criarInput() {
  const input = document.createElement('input');
  input.placeholder = 'digite aqui sua tarefa';
  input.type = 'text';
  input.id = 'texto-tarefa';
  secction.appendChild(input);
}
criarInput();

function criarTag() {
  const sectionLista = document.querySelector('#lista');
  const criarListaOrdenada = document.createElement('ol');
  criarListaOrdenada.id = 'lista-tarefas';
  sectionLista.appendChild(criarListaOrdenada);
}
criarTag();

function CriarBotaoAddTarefa() {
  const criarBotão = document.createElement('button');
  criarBotão.id = 'criar-tarefa';
  criarBotão.innerText = 'adicionar';
  secction.appendChild(criarBotão);
}
CriarBotaoAddTarefa();

function mudarACorDeFundo(event) {
  const evento = event.target;
  const selection = document.querySelector('.selected');
  if (selection) {
    selection.classList.remove('selected');
  }
    evento.classList.add('selected');
}

function addOuRemoverClasseCompleted(event) {
  const evento = event.target;
  if (!evento.classList.contains('completed')) {
    evento.classList.add('completed');
  } else {
    evento.classList.remove('completed');
  }
}

function pegarValorDoInput() {
  const listaOrdenada = document.querySelector('#lista-tarefas');
  const resgateInput = document.querySelector('#texto-tarefa');
  const criarLista = document.createElement('li');
  criarLista.addEventListener('click', mudarACorDeFundo);
  criarLista.addEventListener('dblclick', addOuRemoverClasseCompleted);
  // evento que vou criado na função da linha  30.
  criarLista.innerText = resgateInput.value;
  listaOrdenada.appendChild(criarLista);
  resgateInput.value = '';
}

const restateBotaoAdd = document.querySelector('#criar-tarefa');
restateBotaoAdd.addEventListener('click', pegarValorDoInput);

function criarOBotaoApagar() {
  const botaoApagar = document.createElement('button');
  botaoApagar.id = 'apaga-tudo';
  botaoApagar.innerText = 'apagar';
  secction.appendChild(botaoApagar);
}
criarOBotaoApagar();

const resgateLista = document.querySelector('#lista-tarefas');
function apagarTodosOsElementosDaLista() {
  while (resgateLista.lastChild) {
    resgateLista.removeChild(resgateLista.lastChild);
  }
}
const resgateBotaoApagar = document.querySelector('#apaga-tudo');
resgateBotaoApagar.addEventListener('click', apagarTodosOsElementosDaLista);

// criar botão para remover todos que tiverem a classe selecionados.
function criarBotaoDeRemoverFinalizados() {
  const botaoFinalizador = document.createElement('button');
  botaoFinalizador.id = 'remover-finalizados';
  botaoFinalizador.innerText = 'apagar finalizados';
  secction.appendChild(botaoFinalizador);
}

criarBotaoDeRemoverFinalizados();

// quando tiver essa função é porque temos certeza que vai ter o elemento que queremos, e vai retornar um
// nodeList
function pegarFinalizdosParaRemover() {
  const lista = document.querySelectorAll('.completed');
  for (let index = 0; index < lista.length; index += 1) {
    const aLista = lista[index];
    resgateLista.removeChild(aLista); // é o pai que está na linha 73
  }
}

const resgataBotaoFinalizador = document.querySelector('#remover-finalizados');
resgataBotaoFinalizador.addEventListener('click', pegarFinalizdosParaRemover);

// requisito 14 -> remover selecionados:

function criarBotaoParaRemoverOsSelecionados() {
  const botaoApagarSelecionados = document.createElement('button');
  botaoApagarSelecionados.id = 'remover-selecionado';
  botaoApagarSelecionados.innerText = 'remover selecionados';
  secction.appendChild(botaoApagarSelecionados);
}
criarBotaoParaRemoverOsSelecionados();

function removerSelecionados() {
  const restageSelecionado = document.querySelector('.selected');
  if (restageSelecionado) {
    resgateLista.removeChild(restageSelecionado);
  }
}

const botaoSelecionadoResgatado = document.querySelector('#remover-selecionado');
botaoSelecionadoResgatado.addEventListener('click', removerSelecionados);
