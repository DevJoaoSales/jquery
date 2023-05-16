
let entries = 100;

$(".register").append(`<u> - Ainda resta ${100 - entries} vagas</u>`);

$("#form_login [type=submit]").on("click", function(event){

    event.preventDefault();
    alert(`Parabéns!!! \nVocê foi cadastro.`);
});

if( entries >= 100 ){
    $("#form_login [type=submit]").off("click");
}