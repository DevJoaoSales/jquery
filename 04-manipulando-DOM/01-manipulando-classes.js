$(document).ready( ()=>{

    // Adicionando uma class.
    //$("header .menu ul li:last a").addClass('stylized-menu');

    // Remover Class.
    //$("header .menu ul li:last a").removeClass('stylized-menu');

    // Alternar adição e remoção de class. // this Não funciona :( com arrow function
    $("header .menu ul li a").click( function(Event){
        Event.preventDefault(); // anular efeito de redirecionamento ao clicar no link href.
        $(this).toggleClass("stylized-menu");  
    } ); 

    // Verificar se existe class em um elemento.
    //let teste = $("header .menu ul li:last a").hasClass("stylized-menu");
    //console.log(teste);

    // Testezinho verificar se existe class.
    $("p").each((n_array,element)=>{
        //console.log(n_array,element)
        if( $(element).hasClass("paragrafo") ){
            $(element).append(`<span style="color:red;"> - Tenho a class</span>`);
        }
    });

});