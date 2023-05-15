
$(document).ready(()=>{

    /*// Evento para quando o elemento receber o foco.
    $("[name]").focus(function(){
        
        $(this).css("background","yellow");
    }); */

    /*// Evento para quando o elemento perder o focu
    $("[name]").blur(function(){
        alert(`Você Digitou: ${ $(this).val() }`);
    }); */

    /* // Evento para quando o elemento receber o foco, mesmo que seja um elemento filho.
    $(".form-group").focusin(function(){

        console.log(`Você selecionou um campo.`);
    }); */

    /*// Evento para quando o elemento perder o focu.
    $(".form-group").focusout(function(){

        alert(`Você deixou um elemento`);
    }); */ 

    /*// Evento para quando o campo mudar o seu valor.
    $("[name]").change(function(){

        console.log(`Valor do campo: ${$(this).val()}`);
    }); */

    /*// Evento para quando selecionarmos o valor de um campo do formulario.
    $("[name]").select(function(){

        console.log(`Você selecionou o valor deste campo`);
    }); */

    //
    $("form").submit(function(){
        event.preventDefault(); // bloquear comportamento padrao do botao.
        console.log($(this).serializeArray());
    });

    //
    $("#link_logo").click(function(event){

        event.preventDefault(); // bloquear comportamento padrao do botao.

        $(this).find("img").attr("src","img/logo-jquery.jpg");
    });

});