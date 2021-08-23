window.onload = () => { // por algum motivo sem isso nao funciona 
  addTarefa = document.getElementById("criar-tarefa");// curiosidade pra nao esquecer, o getelemente nao usa o # e o queryselector usa, essa é a diferença eu acho
  listaTarefa = document.querySelector('#lista-tarefas');// mas da pra usar o queryselector com o # na duvida
  caixaTexto = document.getElementById("texto-tarefa");

  addTarefa.addEventListener("click",adicionador);// adiciona o evento click, e inicializa a funçao
  function adicionador(){    
  let it = document.createElement("li") ;// cria os elementos li para a lista
  it.innerHTML = caixaTexto.value;//aqui imbui o valor de caixatexto em it
  document.querySelector('#lista-tarefas').appendChild(it);// seta o id lista tarefa
  caixaTexto.value = '';// retorna valor vazio
   }


function linhaAlvo() {// funsao para...
  const alvo = document.querySelectorAll('li');// aqui seleciono a li
  for (let i = 0; i < alvo.length; i += 1) { // inicializo o contador pra percorer variavel alvo
    alvo[i].style.backgroundColor = '';// aqui adiciono a famosa cor nenhuma
  }
}

const pintador = document.querySelector('ol');//setando o ol,
function pinta(event) {// funçao para...
  linhaAlvo();// chamando funçao de cima, para inicializarmos com a famosa cor nenhuma
  const evento = event.target;// aqui o evento é acionado 
  evento.style.background = 'grey';// pinta a pagaça de cinzinha aqui
}
pintador.addEventListener('click', pinta);// o gatilho pra chamar a funçao ali em cima

function riscador(event) {//funçao para...
  const evento = event.target;// iniciando a funçao implementando o evento
  if (evento.className !== 'completed') {// se a classe do evento nao for igual... 
    evento.className += 'completed';// ele vai ganhar de presente uma clesse nova
  } else {// mas se for
    evento.className = '';// ai perde :P
  }
}
pintador.addEventListener('dblclick', riscador);//aqui o gatilho pra iniciar a funçao é um dbclick

// remove geral, bem aqui ela remove todos da lista
   let apagaGeral = document.getElementById('apaga-tudo');// delcara variavel
   function deletador() {
       let borracha = document.querySelector('#lista-tarefas');
       borracha.innerText = "";
     }    
     apagaGeral.addEventListener('click', deletador);
   
//remove selecionados
   let removeRegeral = document.getElementById("remover-finalizados");
   function removedor (){
       let corretivo = document.querySelector("#remover-finalizados");
       corretivo,innerHTML = "";
   }
   removeRegeral.addEventListener("click", removedor)
       
   

  } 