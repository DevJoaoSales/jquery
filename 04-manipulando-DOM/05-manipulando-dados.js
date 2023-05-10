$(document).ready(()=>{

    // Recuperar dado data-ano.
    $(".cars_list li").click(function(){ 
        console.log(`Esse carro é do ano de: ${$(this).data('ano')}`)
    });

    // Alterar dado de data-ano.
    $(".cars_list li:first").data('ano',1900);

    // Remover dado data-ano.
    $(".cars_list li:first").removeData("ano"); // SÓ FUNCIONA DE FORMA VIRTUAL

});