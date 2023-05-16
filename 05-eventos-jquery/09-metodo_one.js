$(".books").append(`<u> - Marque os seus favoritos (Essa ação não pode ser desfeita!!!).</u>`);

$("#books_list tbody tr").one("click",function(){

    if( !$(this).hasClass("trselected") ){
        $(this).addClass('trselected');
    }else{
        $(this).removeClass("trselected");
    }
});