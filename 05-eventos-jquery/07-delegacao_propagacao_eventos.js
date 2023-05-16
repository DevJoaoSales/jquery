$("#books_list tbody").on('click contextmenu','tr',function(event){

    $(event.delegateTarget).find("tr").removeClass("trselected");

    $(this).addClass("trselected");

});

$("#btn_add_book").on("click", function(){

    let tr = `
        <tr>
            <td>Till</td>
            <td>José de Alencar</td>
        
        </tr>
    `;

    $("#books_list tbody").append(tr);

});


// Parando a propagacao de evento.
$("#form_login").on("change","[name]",function(){
                
    alert("Elementou mudou. Seu valor: "+$(this).val());
});

$("#form_login [name=bio]").on("change",function(){
    event.stopPropagation(); // executando apenas este evento, anulando o evento acima.
    $(this).css("background","red");
})