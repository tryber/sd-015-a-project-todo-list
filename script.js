const botao = document.getElementById('criar-tarefa');
const inputa = document.getElementById('texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');
botao.addEventListener('click', botaoAdiciona);
function botaoAdiciona() {
  const novaLista = document.createElement('li');
  listaOrdenada.appendChild(novaLista);
  novaLista.innerText = inputa.value;
  inputa.value = '';
  listaOrdenada.addEventListener('click', colorAdiciona);
  listaOrdenada.addEventListener('dblclick', aRisca);
}
function colorAdiciona(cor) {
  for (let index = 0; index < listaOrdenada.children.length; index += 1) {
    listaOrdenada.children[index].style.backgroundColor = '';
  }
  cor.target.style.backgroundColor = 'rgb(128,128,128)';
}
function aRisca(riscou) {
  const risco = riscou.target;
  if (risco.className === 'completed') {
    risco.classList.remove('completed');
  } else {
    risco.classList.add('completed');
  }
}
