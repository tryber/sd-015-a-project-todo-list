const tagDaLi = document.getElementsByTagName('li');
console.log(tagDaLi);
for(let cont = 0 ; cont < tagDaLi.length ; cont++){
tagDaLi[cont].addEventListener ('click', mudarAcorDoElemento );

}

function mudarAcorDoElemento() {
console.log("função")

}

