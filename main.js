function tocaSom(idElementAudio){

    document.querySelector(idElementAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador =0; contador < listaDeTeclas.length; contador++){

    const teclas = listaDeTeclas[contador];

   const instrumento =  teclas.classList[1];

   const idAudio = `#som_${instrumento}`

   teclas.onclick=tocaSom = function(){

    tocaSom(idAudio)


   }

}