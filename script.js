const botao = document.getElementById('criar-tarefa');
const inputa = document.getElementById('texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');

function botaoAdiciona() {
  const novaLista = document.createElement('li');
  listaOrdenada.appendChild(novaLista);
  novaLista.innerText = inputa.value;
  inputa.value = '';
  listaOrdenada.addEventListener('click', colorAdiciona)
}
botao.addEventListener('click', botaoAdiciona);
function colorAdiciona(cor) {
  cor.target.style.backgroundColor = 'rgb(128,128,128)';
}