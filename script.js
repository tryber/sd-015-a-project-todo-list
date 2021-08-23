const task = document.getElementById('texto-tarefa')
const btnAddTask = document.getElementById('criar-tarefa')
const toDoList = document.getElementById('lista-tarefas')

function addTask() {
  btnAddTask.addEventListener('click', function () {
    if (task.value !== '') {
      let inputValue = task.value
      let listItem = document.createElement('li')
      listItem.innerText = inputValue
      listItem.classList.add('task-item')
      toDoList.appendChild(listItem)
      task.value = ''
    } else {
      alert('É necessário o preenchimento do campo \ncom a tarefa a ser adicionada!')
    }
  })
}
addTask()

function changeItemColor() {
  toDoList.addEventListener('click', function (event) {
    let selectedItem = document.querySelectorAll('.selected')
    for (let index = 0; index < selectedItem.length; index += 1) {
      selectedItem[index].classList.remove('selected')      
    }
    event.target.classList.toggle('selected')
  })
}
changeItemColor()

function scratchesItem() {
  toDoList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('task-item')) {
      event.target.classList.toggle('completed')
    }
  })
}
scratchesItem()