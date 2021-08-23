const inputText = document.getElementById('texto-tarefa');
const typeButton = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');

function addTask() {
  const taskNew = document.createElement('li')
  taskNew.addEventListener('click', ClickColor)
  taskNew.innerHTML = inputText.value;
  listTasks.appendChild(taskNew);
  inputText.value = '';
}


//Requisito 7

function ClickColor() {
  this.style.backgroundColor = 'rgb(128, 128, 128)';
  console.log('click');
}

typeButton.addEventListener('click', addTask)

//Requisito 8


function clickOneColor() {
  const listItem = listTasks.children;
    for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = 'floralwhite';
  }
}

//Segunda função criada com base no racicínio de Leonardo Felix.

listTasks.addEventListener('click', (task) => {
  clickOneColor();
  const clickedTask = task;
  clickedTask.target.style.backgroundColor = 'rgb(128, 128, 128)';
  console.log('pinta uma só')
});

// alert('Você chegou na sua lista de tarefas! Cumpra todo o combinado, ok? =D')
// console.log("kk")
