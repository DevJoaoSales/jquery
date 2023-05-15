
$(document).ready(()=>{

    // Evento para quando pressionar uma tecla.
    $("#form_login [name=username]").keydown(function(event){
        console.log(`KEYDOWN - Você apertou  a tecla com um código ${event.keyCode}`)
    }); 

    /*// Evento para quando soltarmos uma tecla.
    $("#form_login [name=username]").keyup(function(event){
        console.log(`Você apertou a tecla com o codigo ${event.keyCode}`);
    }); */

    // Evento para quando uma tecla estiver sendo pressionada.
    $("#form_login [name=username]").keypress(function(event){
        console.log(`KEYPRESS - Você apertou a tecla com o código ${event.keyCode}`);
    });

});