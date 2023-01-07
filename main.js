function tocaSom (idAudio) {
   const elemento = document.querySelector(idAudio);

   if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
   }
   else {
        console.log('Elemento não encontrado ou seletor inválido');
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    console.log(contador);
    
    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
/*
let contador = 0;
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    console.log(contador);
    contador = contador + 1;
}
*/
