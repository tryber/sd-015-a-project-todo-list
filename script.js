
let ul = document.querySelector('li');
let valorInput = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');

button.addEventListener('click', function(){
    let tarefa = '<li>' + valorInput.value + '</li>';
    ul.innerHTML += tarefa;
    valorInput.value = '';
})
