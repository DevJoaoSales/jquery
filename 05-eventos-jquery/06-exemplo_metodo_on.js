// Exemplo do metodo On
$("#books_list tbody td").on('click contextmenu',function(){

    if(event.type == "contextmenu")
        event.preventDefault()

    $("#books_list tbody td").css({
        backgroundColor:'initial',
        color:'initial',
    });

    $(this).css({
        backgroundColor:'black',
        color:'white',
    });

});