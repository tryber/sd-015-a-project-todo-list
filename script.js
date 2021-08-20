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

function mudarACorDeFundo(event) { // função que vai estar na linha 49.
  const evento = event.target;
  const selection = document.querySelector('.selected');
  if (selection) { // se tiver a classe selected
    selection.classList.remove('selected'); // remove a classe do elemento
   }
   evento.classList.add('selected'); // quando disparado o evento ele coloca a classe se não tiver no elemento
}


function addOuRemoverClasseCompleted(event) { // função que vai tá na linha 50.
  const evento = event.target;
  evento.classList.toggle('completed'); // refente ao objeto que disparou o evento
} // toggle funciona como 'liga e desliga';

function pegarValorDoInput() {
  const listaOrdenada = document.querySelector('#lista-tarefas');
  const resgateInput = document.querySelector('#texto-tarefa');
  const criarLista = document.createElement('li');
  criarLista.addEventListener('click', mudarACorDeFundo);
  criarLista.addEventListener('dblclick', addOuRemoverClasseCompleted);
  // evento que vou criado na função da linha  30.
  criarLista.innerText = resgateInput.value; // o valor do li vai ser o que será digitano no input
  listaOrdenada.appendChild(criarLista);
  resgateInput.value = ''; // depois de botar o li como filho da ol ele apaga o valor do input
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
function apagarTodosOsElementosDaLista() { // essa função apaga todos os elementos da lista
  while (resgateLista.lastChild) {
    resgateLista.removeChild(resgateLista.lastChild);
  }
}
const resgateBotaoApagar = document.querySelector('#apaga-tudo');
resgateBotaoApagar.addEventListener('click', apagarTodosOsElementosDaLista); // botão do evento

// a função de resgate Lista tive inspiração quando procurava um meio na internet e seguindo a dica de um co
// lega para usar o loop for no caso encontrei um exemplo de codigo e com um pouco de entedimento do loop while
// esse codigo foi feito e a fonte está logo abaixo.
// src: https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript

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
    resgateLista.removeChild(aLista); // é o pai que está na linha 68
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
    resgateLista.removeChild(restageSelecionado); // o resgateLista tá na linha 68.
  }
}

const botaoSelecionadoResgatado = document.querySelector('#remover-selecionado');
botaoSelecionadoResgatado.addEventListener('click', removerSelecionados);
