$(document).ready(function(){

    $("p").click(function(e){

        // Retorna o tipo de evento executado.
        //console.log(`Você realizou um evento de ${e.type} `);

        // Retorna o nome do elemento que clicamos.
        //alert(` Você clicou em uma tag <${e.target.localName}> `);

        // console.log(`TARGET: `, e.target);
        // console.log(`CURRENT: `, e.currentTarget);

    });

    // Retorna a posição X e Y do elemento onde ocorreu o evento
    // event.pageX, event.pageY

    $("[name=bio]").keydown(function(e){
        
        // Retorna o codigo da tecla pressionada.
        //console.log(e.keyCode);
        //console.log(e.which);

        // Retorna o nome da tecla pressionada.
        // console.log(e.key);
        /*
        if(e.key == "Enter"){
            e.preventDefault();
            alert(`Você pressionou o enter`);
        }    
        */
        
        // Parar a execução padrão do eventos.
        e.preventDefault();

        // Parar a propagação de eventos.
        e.stopPropagation();

    });

});