// requisito 5
// baseado no código do Caio, que postou uma dúvida no slack
// repositorio disponível em https://github.com/tryber/sd-015-a-project-todo-list/pull/128/files

let botaoTarefa = document.getElementById('criar-tarefa');
let inputTarefa = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let botaoApagar = document.getElementById('apaga-tudo');

botaoTarefa.addEventListener('click', criaItem); // clicar no botão chama a função que adiciona o li à ol e limpa o campo de input de texto

function criaItem() {
  let itemLista = document.createElement('li'); // variável para criar uma <li>
  itemLista.addEventListener('dblclick', riscaTarefa); // adiciona listener para poder riscar tarefas completas
  itemLista.addEventListener('click', pintaTarefa); // adiciona listener para pintar tarefa selecionada
  itemLista.innerHTML = inputTarefa.value; // coloca o valor do input dentro da li
  listaTarefas.appendChild(itemLista); // adiciona o li criado à ol
  inputTarefa.value = ''; // limpa campo de input
}

// requisito 10

botaoApagar.addEventListener('click', limpaLista); // clicar no botao de apagar chama a função que remove os li's (childs) da ol

function limpaLista() {
  let listaCompleta = listaTarefas.children.length; // variável que comporta a length da ol
  for (let index = 0; index < listaCompleta; index += 1) {
    // remove cada child (li) da ol através do for
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}

// requisito 9

function riscaTarefa(evento) {
  let tarefaRiscada = evento.target;
  if (tarefaRiscada.className.includes("completed")) { // se o item possuir a classe "completed" e tiver um duplo clique, ela é removida
    tarefaRiscada.classList.remove("completed");
  } else { // se não tiver, ela é adicionada
    tarefaRiscada.classList.add("completed");
  }
}

// requisitos 7 e 8

function pintaTarefa(evento) {
  let tarefaSelecionada = document.querySelectorAll("li"); // contém as li's
  for (let index = 0; index < tarefaSelecionada.length; index += 1) {
    tarefaSelecionada[index].classList.remove('selected'); // remove a classe selected caso haja em algum dos indices do array das li's
    evento.target.classList.add('selected'); // adiciona a classe selected no item clicado
  }
}
