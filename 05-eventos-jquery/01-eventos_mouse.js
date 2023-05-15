
$(document).ready(function(){
            
    /*// Evento para quando pressionar o mouse
    $("h1").mousedown(function(){
        console.log("apertei o mouse!!!");
    }); */

    /*// Evento para quando soltar o mouse
    $("h1").mouseup(function(){
        console.log("soltei o botão do mouse")
    }); */

    /*// Evento para quando pressionamos e soltamos o click do mouse
    $("h1").click(function(){
        console.log("Apertei e soltei");
    });

    $("h3.books").click(function(){
        
        $(this).text("Fui clicado");

    }); */

    // Simulando o clique de um elemento.
    //$("h3.books").click();

    /*// Evento para o botão direito do mouse.
    $("img").contextmenu(function(){
        alert("clicamos com o botão direito");
    });*/

    // Simulando o clique do botao direito do mouse
    //$("img").contextmenu();

    /*// Evento para duplo click.
    $("table tbody tr").dblclick(function(){
        $(this).css({
            background:"#000",
            color:"#fff",
        });
    }); */

    // Simulando o duplo click.
    //$("table tbody tr:eq(1)").dblclick();

    /*// Evento para quando o cursor do mouse "passa por cima" ou "entra" no elemento.
    $("table tbody tr").mouseenter(function(){
        $(this).addClass("trselected");
    }); */

    /*// Evento para quando o cursor "deixa" um elemento.
    $("table tbody tr").mouseleave(function(){
        $(this).removeClass("trselected");
    }); */

    // Evento para quando o cursor "entra" e "deixa" um elemento
    $("table tbody tr").hover(
        function(){
            $(this).addClass("trselected");
        },
        function(){
            $(this).removeClass("trselected");
        }
    );

    /*// Evento para quando move o curso do mouse se movimenta dentro de um elemento.
    $("table tbody tr").mousemove(function(){
        $("h1").text(`X: ${event.pageX}/ Y: ${event.pageY}`);
    });*/ 

    //

});
