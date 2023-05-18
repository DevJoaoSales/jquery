
// Escondendo um elemento com o efeito "sliding".
/* $(".btn_toggle_item").on("click",function(){
    $(".course_item_inner:last").slideUp(); // Ocultar
}); */


// Exibindo um elemento com o efeito "sliding"
/* $(".btn_toggle_item2").on("click",function(){
    $(".course_item_inner:last").slideDown(); // Exibir
}); */


// Exibindo ou Ocultando um elemento com efeito "sliding".
$(".btn_toggle_item").on("click",function(){
    $(this).prev(".course_item_inner").slideToggle(1000, function(){
        console.log("Delizando...");
    });
});