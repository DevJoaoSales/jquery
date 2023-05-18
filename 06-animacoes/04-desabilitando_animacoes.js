
$(document).ready(()=>{

    $("#disable_effects").on("click",function(){
        //$.fx.off = true; // Desabilitando animações.

        $.fx.off = !jQuery.fx.off;
    });

});