function insertHeader() {
    let getBody = document.querySelector('body');
    let titulo = document.createElement('header');
    titulo.innerText = 'Minha Lista de Tarefas';
    titulo.innerHTML;
    getBody.appendChild(titulo);
}
insertHeader();

function insertP() {
    let getBody = document.querySelector('body');
    let paragrafo = document.createElement('p');
    paragrafo.id = ('funcionamento');
    paragrafo.innerText = ('Clique duas vezes em um item para marcá-lo como completo');
    paragrafo.innerHTML;
    getBody.appendChild(paragrafo);
}
insertP();

function insertInput() {
    let getBody = document.querySelector('body');
    let divPaiAddTaref = document.createElement('div');
    divPaiAddTaref.id = ('divPaiAddTarefa');
    divPaiAddTaref.className = ('estDivpaiAddTarefa ');
    getBody.appendChild(divPaiAddTaref);

    let body = document.querySelector('body');
    let input = document.createElement('input');
    input.id = ('texto-tarefa');
    input.className = ('estInput');
    input.innerHTML;
    divPaiAddTaref.appendChild(input);



}
insertInput();

function btnCrTarefa() {
    let getDvPai = document.getElementById('divPaiAddTarefa');
    let btnCriaTarefa = document.createElement('button');
    btnCriaTarefa.id = ('criar-tarefa');
    btnCriaTarefa.className = ('estBtnAdd');
    btnCriaTarefa.innerText = ('Adicionar');
    btnCriaTarefa.innerHTML;
    getDvPai.appendChild(btnCriaTarefa);

}
btnCrTarefa();

function addOl() {
    let getBody = document.querySelector('body');
    let ol = document.createElement('ol');
    ol.id = ('lista-tarefas');
    ol.innerHTML;
    getBody.appendChild(ol);

    // Captura texto da ul e adiciona a lista //
    let tagInput = document.getElementById('texto-tarefa');
    let botao = document.getElementById('criar-tarefa');

    botao.addEventListener('click', function(event) {

        let li = document.createElement('li');
        li.id = ('li');
        li.innerText = tagInput.value;
        li.innerHTML;
        ol.appendChild(li);
        tagInput.value = '';

        let getLista = document.getElementsByTagName('li');
        for (let k = 0; k < getLista.length; k += 1) {

            getLista[k].addEventListener('dblclick', function(event) {
                if (getLista[k] === 'completed') {
                    getLista[k].className = 'completedOff';
                    getLista[k].innerHTML;

                } else {
                    getLista[k].className = 'completed';
                    getLista[k].innerHTML;
                }

            });


        }

        // adiciona click nas li's e taxa o texto
        let getLis = document.getElementsByTagName('li');
        let ultSelec;

        for (let i = 0; i < getLis.length; i += 1) {

            getLis[i].addEventListener('click', function(event) {
                // verifica se ha outra li pintada e limpa pra ficar um so pintado de cinza
                for (let j = 0; j < getLis.length; j += 1) {

                    if (getLis[j].className === ('estSelected')) {
                        getLis[j].className = ('estDivDefault');
                        getLis[j].innerHTML;
                    }
                    /* else if (getLis[j].className === ('completed')) {
                        getLis[j].className = ('completed estSelected');
                        getLis[j].innerHTML;
                    } else if (getLis[j].className === ('completedOff')) {
                        getLis[j].className = ('completedOff estSelected');
                        getLis[j].innerHTML;
                    }*/

                }

                getLis[i].className = ('estSelected');
                getLis[i].innerHTML;
                ultSelec = getLis[i];


            });

        }

    });
}

addOl();

function removeFinaliz() {

    let body = document.querySelector('body');
    let btnRmvSelected = document.createElement('button');
    btnRmvSelected.className = 'btnRmvSelected';
    btnRmvSelected.id = 'remover-finalizados';
    btnRmvSelected.innerText = 'Limpar Completos';
    btnRmvSelected.innerHTML;
    body.appendChild(btnRmvSelected);

    let getListOl = document.getElementsByTagName('ol');
    let listLi = document.getElementsByTagName('li');
    let marcados = document.querySelectorAll('#completed')[0];


    btnRmvSelected.addEventListener('click', function() {

        for (let index = listLi.length - 1; index >= 0; index -= 1) {
            if (listLi[index].className === 'completed') {
                listLi[index].remove();
            }

        }

    });


}
removeFinaliz();

function removeAllList() {
    // cria o botao
    let getBody = document.querySelector('body');
    let getListaLi = document.getElementsByTagName('li');
    let btnDelAllLi = document.createElement('button');
    btnDelAllLi.id = ('apaga-tudo');
    btnDelAllLi.innerText = ('Limpar Lista');
    btnDelAllLi.className = ('estDelAllLi');
    btnDelAllLi.innerHTML;
    getBody.appendChild(btnDelAllLi);


    let getOl = document.getElementsByTagName('ol')[0];
    let getLis = document.getElementsByTagName('li');

    btnDelAllLi.addEventListener('click', function(event) {
        // Função Retirada do site w3schools  https://www.w3schools.com/jsref/met_node_removechild.asp //
        while (getOl.hasChildNodes()) {
            getOl.removeChild(getOl.firstChild);
        }

    });

}
removeAllList();