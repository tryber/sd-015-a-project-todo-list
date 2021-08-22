const botao = document.getElementById('criar-tarefa');
const inputa = document.getElementById('texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');


function botaoAdiciona(){
const novaLista = document.createElement('li');
listaOrdenada.appendChild(novaLista);
novaLista.innerText = inputa.value;
inputa.value = '';
}
botao.addEventListener('click', botaoAdiciona);


/*5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
O que será verificado:

Será verificada a existência de um elemento do tipo button com o id criar-tarefa

No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.*/