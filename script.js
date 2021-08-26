// Requisito 5
const campoEntrada = document.getElementById('texto-tarefa'); // Pegar entrada do usuario no input
const botaoTarefas = document.getElementById('criar-tarefa'); // Botão Criar tarefa
const lista = document.getElementById('lista-tarefas'); // Lista de Tarefas

function criarTarefa() {
  const novaTarefa = document.createElement('li'); // Cria um novo elemento li
  novaTarefa.innerText = campoEntrada.value; // Esse novo elemento li recebe o valor digitado no imput
  lista.appendChild(novaTarefa); // // Cria um novo elemento li e adiciona-o ao final da lista de Tarefas
  campoEntrada.value = ''; // Para o valor digitador desaparecer do input
}

botaoTarefas.addEventListener('click', criarTarefa);

// Explicacao requisito 6: O appendChild adiciona um nó ao final da lista de filhos de um nó pai especificado.

// Requisito 7 e 8
function mudarCor(event) {
  const tagTarefa = document.querySelector('.liSelecionada');
  // Retorna o primeiro elemento dentro do documento que tenha o seletor especifico liselecionada.

  // inicialmente será nulo pois não tem nenhum item da lista selecionado, passando pelo if e realizando a primeira ação
  if (tagTarefa !== null) {
    tagTarefa.classList.remove('liSelecionada');
    // Remove o seletor especifico liselecionada, assim apenas um item da lista terá esse seletor por vez
  }
  
  event.target.classList.add('liSelecionada');
  // Adiciona o seletor especifico liselecionada
}

lista.addEventListener('click', mudarCor); // Os itens da lista ficam esperando o click para acionar a função mudarCor

// Requisito 9
function duploRisco(event) {
  // https://www.codegrepper.com/code-examples/javascript/event.target.classlist Busquei a informação sobre o contains
  // classList.contains(token) -> Retorna verdadeiro se a lista contém o token fornecido, caso contrário, falso.
  // Booleano - Se estiver True, ele remove o token especifico 'completed' da lista. Se não ele adiciona na lista.
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
// Classe completed tem a propriedade "text-decoration" com o valor "line-through" que adiciona o feito de letra riscada.

// Ação duplo click
lista.addEventListener('dblclick', duploRisco);

// Requisito 10
const botaoApagaTudo = document.getElementById('apaga-tudo');

function apagar() {
  lista.innerHTML = '';
  // lista é a Lista de Tarefas inteira
}

botaoApagaTudo.addEventListener('click', apagar);

// Requisito 11
const botaoFinalizados = document.getElementById('remover-finalizados');

function apagarFinalizados() {
  const tarefasFinalizadas = document.getElementsByClassName('completed');
  // pegando todos os elementos que possuem a classe completed

  if (tarefasFinalizadas.length !== 0) {
    for (let i = tarefasFinalizadas.length - 1; i >= 0; i -= 1) {
      tarefasFinalizadas[i].remove();
    }
  }
}

botaoFinalizados.addEventListener('click', apagarFinalizados);
