
$("h1").on("dblclick", function(){
    $(this).text("jQuery - Hcode Treinamentos");
}); 

// Acionando um evento manualmente.
//$("h1").trigger("dblclick");
//$("h1").dblclick();

$("#form_login").on("submit", function(event){
    event.preventDefault();
    console.log(`Aqui estão os valores do formulario`, $(this).serializeArray() );
});

$("#form_login [name=bio]").on("blur", function(event){

    $(event.target.form).trigger("submit");
});