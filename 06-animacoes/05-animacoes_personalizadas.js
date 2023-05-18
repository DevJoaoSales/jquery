$(document).ready(()=>{

    // Criando animações personalizadas.
    $("h1").animate({
        fontSize:"50px",

    },3000);

    /*
    $(".course_item h4").on("click",function(){
        $(this).animate({
            wordSpacing:"+=5px"
        },200);
    });
    */

    $(".course_item").on("click",function(){
        $(this).animate({
            padding:"+=20px",
        });
    });

    $("footer p").on("click",function(){
        
        $(this).animate({
            letterSpacing:"+=10px",
        },
        2000,
        function(){
            alert("Aumentou o espaçamento!!!");
        });

    });

    // Obs: usar camelCase no animate e no CSS.
    

});