
$(document).ready(()=>{

    // Clonando elemento.
    $(".title").click(function(){
        $(this).css("outline","5px solid red");
    })

    // Deixar true herdará eventos do elemento.           
    let element = $(".title").clone(true); 
    element.appendTo("section main");

});