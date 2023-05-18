$(document).ready(()=>{

    // Escondendo um elemento.
    $(".btn_toggle_item").on("click", function(){
        //$(this).prev(".course_item_inner").hide(2000);
    } );

    // Exibindo um elemento.
    $(".btn_toggle_item2").on("click", function(){
        //$(".course_item_inner:last").show(1000);
    } );

    // Exibir ou esconder um elemento
    $('.btn_toggle_item').on('click', function(){
        $(this).prev('.course_item_inner').toggle(500);
    });

});