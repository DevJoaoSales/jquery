
$(document).ready(()=>{

    // Evento para quando o navegador mudar seu tamanho.
    $(window).resize(function(){

        console.log(`A largura do navegador é ${ $(window).width() }. \nA Altura é ${ $(window).height() }`)
    })

    // Evento para quando a barra de rolagem se mover.
    $(window).scroll(function(){

        console.log(` Você esta na posição ${ $(window).scrollTop() } `);
    })

});