$(document).ready(()=>{

    // Removendo elementos.
    //$(".cars_list li:eq(1)").remove();

    // Removendo conteudo do elemento.
    //$(".cars_list li:eq(1)").empty();

    // Removendo os elementos em volta de outro.
    //$(".cars_list li").unwrap(); // removeu 1º o ul

    // Removendo um elemento, mas mantendo seus eventos associados.
    $(".paragrafo").click(function(){
        $(this).html("Você clicou em mim!");
    })

    let txt = $(".paragrafo").detach();

    $("section main p").before(txt);

})