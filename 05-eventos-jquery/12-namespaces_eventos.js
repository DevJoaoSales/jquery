// Evento com namespace.
$("p").on("click.colorRed",function(){

    $(this).toggleClass("selected_section");
})

$('p').on("click", function(){
    
    $(this).toggleClass("underline_section");
});

$("#btn_remove_css_color").on("click",function(){
    $("p").off("click.colorRed")
});