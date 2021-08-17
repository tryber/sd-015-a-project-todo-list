const buttonCriar = document.getElementById('criar-tarefa');
buttonCriar.addEventListener('click', addTarefa);
function addTarefa () {
    let inputValue = document.getElementById('texto-tarefa').value;
    if (inputValue.length === 0) {
        alert('Campo vazio! Adicione uma tarefa.');
    } else {
        let itemLista = document.createElement('li');
        itemLista.innerText = inputValue;
        itemLista.className = 'tarefa';
        let listaPai = document.getElementById('lista-tarefas');
        listaPai.appendChild(itemLista);
        document.getElementById('texto-tarefa').value='';
    }
}
const listaTarefas = document.getElementById('lista-tarefas');
listaTarefas.addEventListener('click', selecionaTarefa);
function selecionaTarefa (event) {
    let selected = document.querySelector('.selected');
        if (!document.querySelector('.selected')) {
        event.target.classList.add('selected');
    } else {
        selected.classList.remove('selected');
        event.target.classList.add('selected');
    }
}
listaTarefas.addEventListener('dblclick', completaTarefa);
function completaTarefa (event) {
    if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}
const buttonApagaTudo = document.getElementById('apaga-tudo');
buttonApagaTudo.addEventListener('click', apagaTudo);
function apagaTudo () {
    let tarefas = document.getElementsByClassName('tarefa');
    let listaTarefas = document.getElementById('lista-tarefas');
    for (let index = tarefas.length-1; index >= 0; index -=1) {
        listaTarefas.removeChild(tarefas[index]);
    }
}
const buttonRemoveFinalizados = document.getElementById('remover-finalizados');
buttonRemoveFinalizados.addEventListener('click', apagaFinalizados);
function apagaFinalizados () {
    let finalizados = document.getElementsByClassName('completed');
    let listaTarefas = document.getElementById('lista-tarefas');
    for (let index = finalizados.length-1; index >= 0; index -=1) {
        listaTarefas.removeChild(finalizados[index]);
    }
}
const buttonRemoveSelecionado= document.getElementById('remover-selecionado');
buttonRemoveSelecionado.addEventListener('click', apagaSelecionado);
function apagaSelecionado () {
    let selecionado = document.querySelector('.selected');
    let listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.removeChild(selecionado);
}
const buttonSubir = document.getElementById('mover-cima');
buttonSubir.addEventListener('click', moverElementoCima);
function moverElementoCima () {
    let tarefas = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefas.length; index +=1) {
        if (tarefas[index] !== tarefas[0] && tarefas[index].classList.contains('selected') === true) {
            //O seguinte código foi baseado na resposta do usuário jfriend00 que se encontra no link https://stackoverflow.com/questions/9732624/how-to-swap-dom-child-nodes-in-javascript.
            tarefas[index].parentNode.insertBefore(tarefas[index], tarefas[index -1]);
        }
    }
}
const buttonDescer = document.getElementById('mover-baixo');
buttonDescer.addEventListener('click', moverElementoBaixo);
function moverElementoBaixo () {
    let tarefas = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefas.length ; index +=1) {
        if (tarefas[index] !== tarefas[tarefas.length-1] && tarefas[index].classList.contains('selected') === true) {
            tarefas[index +1].parentNode.insertBefore(tarefas[index +1], tarefas[index]);
        }
    }
}
const buttonSalvar = document.getElementById('salvar-tarefas');
buttonSalvar.addEventListener('click', salvarPreferencias);
function salvarPreferencias () {
    //Código feito com o auxílio do aluno Marcelo Adriano
    localStorage.clear();
    let tarefas = document.getElementsByClassName('tarefa');
    if (tarefas.length > 0) {
        for (let i = 0; i < tarefas.length; i += 1) {
            let value = tarefas[i].innerText;
            value += '-'
            value += tarefas[i].classList.value;
            localStorage.setItem(i, value);
        }
    }
    localStorage.setItem('tarefas',tarefas.length);
}
window.onload= usarPreferencias
function usarPreferencias () {
    let qntSalvos = localStorage.getItem('tarefas');
    for (let i = 0; i < qntSalvos; i += 1){
        let salvo = localStorage.getItem(i).split('-');
        let itemLista = document.createElement('li');
        itemLista.innerText = salvo[0];
        itemLista.className = salvo[1];
        let listaPai = document.getElementById('lista-tarefas');
        listaPai.appendChild(itemLista);
    }
}