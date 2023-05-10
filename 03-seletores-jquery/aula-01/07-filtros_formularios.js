
$('[type=radio]').change( ()=>{
    let value = $('input:checked').val();
    let gender = (value == "M") ? "Masculino" : "Feminino";

    alert(`Você selecionou o Sexo: ${gender}`);
} );

$('input').focus(()=>{
    $("input:focus").val("Ola você clicou aqui");
});

$("#register :submit").click( (Event)=>{
    Event.preventDefault()
    console.log("Você clicou no botao submit")
} );

// Selecionando todos botoes do form $register
//$("#register :button").css('opacity','0.7');

// Ticar o check box.
//$("#register :checkbox").trigger('click');

// Selecione os elementos "checados"
//$("input:checked").val();

// Selecionando os elementos desabilitados.
//$('#register :disabled').val('anthony@hcode.com.br').prop('disabled',false);

// Selecionando o Botão submit.
//$("#register :submit").css("background-color","orange");
