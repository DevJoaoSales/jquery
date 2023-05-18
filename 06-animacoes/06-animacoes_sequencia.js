// Animações em sequencia.
$("#init_effect").on("click", function(){

    $(".logo").animate({
        marginTop:"+=90px",
    },2000)

    .delay(500) // tempo de delay para executar proxima animação.

    .animate({
        marginLeft:"+=200px",
    })

    .queue(function(){
        $("h1").text("Animação concluida!!!").css({
            "color":"red",
        });

        $(this).dequeue(); // continuar executando restante da fila.
    })

    //.delay(500) // tempo de delay para executar proxima animação.

    //.fadeOut(2000);

    // Limpar Fila de animações.
    // .clearQueue();

    // Diferentes formas de parar uma animação.
    $("#stop_effect").on("click",function(){

        // Parando uma animação.
        //$(".logo").stop(true,true);

        $(".logo").finish();

    })

} );