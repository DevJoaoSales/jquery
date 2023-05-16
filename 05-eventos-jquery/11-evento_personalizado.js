// Criando um evento personalizado.
$('header').on('initPage',function(){
    $(this).find('h1').append(' - Seja Bem-Vindo!').css({
        color:'red',
        left:'100px',
    });

    $(this).find('img').animate({
        width:'400px',
    });
});

setTimeout(function(){
    $('header').trigger('initPage');
},2000);