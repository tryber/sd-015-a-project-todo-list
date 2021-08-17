// 1. Criar uma função que adicione uma tag header com o conteúdo 'Minha Lista de Tarefas'
function criaTagHeader(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.innerText = 'Minha Lista de Tarefas';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('primeiro requisito ok')
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagHeader('header', 'body');


// 2. Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
function criaTagP(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.id = 'funcionamento';
  criaTag.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('segundo requisito ok');
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagP('p', 'body');


// 3. Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista.
function criaTagInput(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.id = 'texto-tarefa';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('terceiro requisito ok');
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagInput('input', 'body');


//4. Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
function criaTagOl(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.id = 'lista-tarefas';
  criaTag.innerText = 'Lista de Tarefas:'
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('quarto requisito ok');
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagOl('ol', 'body');


// 5. Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
function criaTagButton(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.innerText = 'Criar Tarefa!';
  criaTag.id = 'criar-tarefa';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('quinto requisito ok');
}
// chamamos a função com o nome da tag que vamos criar, e de quem essa tag será filha. Respectivamente.
criaTagButton('button', 'body');
//vamos adicionar um comportamento ao botão??
function criarTarefa(){
  const botao = document.querySelector('button');
  botao.addEventListener('click', function(){
    // nesse bloco de codigo definimos que toda a vez que o botão foi clicado, ele cria uma tag 'li' filha da 'ol' e seu conteúdo será o mesmo da caixa de texto
    const criaTag = document.createElement('li');
    const input = document.querySelector('input');
    criaTag.innerText = input.value;
    const tagPai = document.querySelector('ol');
    tagPai.appendChild(criaTag);
    input.value = '';
//Ajuda de Vitor Diorio (https://github.com/vdiorio) no trecho abaixo. Eu não sabia que podiamos criar um elemento com um esccutador de eventos diretamente na função!!!!
    criaTag.addEventListener('click', function(event){
      //Esse deu trabalho 
      event.target.classList.add('selected');
      //Esse clique adiciona uma classe que ainda não existe
      const lista = document.querySelectorAll('li');
      for (index = 0; index < lista.length; index +=1){
        lista[index].classList.remove('selected');
      }
      //Esse mesmo clique vai rodar todas as 'li' e remover o atributo
      event.target.classList.add('selected');
      //Essa linha vai adicionar novamente a classe ao elemento clicado.
    })
    criaTag.addEventListener('dblclick', function(event){
      event.target.classList.toggle('completed')
      //trecho feito com a ajuda de https://www.w3schools.com/howto/howto_js_toggle_class.asp
       
      
    })
  }
  )
}
criarTarefa();


// 7.Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// Foi feito na função anterior, criamos a tag li já com escutor de eventos juntamente com a função de mudar cor quando ela for clicada.

function criaButtonApaga(nomeTag, nomeTagPai){
  // declara tag criada 
  const criaTag = document.createElement(nomeTag);
  criaTag.innerText = 'LIMPAR!';
  criaTag.id = 'apaga-tudo';
  const tagPai = document.querySelector(nomeTagPai);
  tagPai.appendChild(criaTag);
  console.log('decimo requisito ok');
}
criaButtonApaga('button', 'body');


let filhoDaLista = document.querySelector('ol').childNodes;

function zerarTudo(){
  let botao = document.querySelector('#apaga-tudo');
  botao.addEventListener('click', function(){
    let lista = document.querySelector('ol');
    for(index = filhoDaLista.length;1 < filhoDaLista.length; index-=1){
      console.log(filhoDaLista.length)
      lista.removeChild(lista.firstElementChild)
      
    }
  })
}
zerarTudo()