(function($){

    $.fn.load = function(action = "load"){

        return this.each(function(){
            
            switch(action){
                case "load":
                    // Create Div
                    let divToAppend = document.createElement("div");
                    divToAppend.id = "loader";

                    let divLoad = document.createElement("div");
                    divLoad.className = "loadingio-spinner-ripple-7u3414vrigt";

                    let divLoad2 = document.createElement("div");
                    divLoad2.className = "ldio-fgdmp2exr4c";


                    $(divToAppend).append(divLoad);
                    $(divLoad).append(divLoad2);

                    $(divLoad2)
                    .append("<div></div>")      // adicionando uma div.
                    .append(document.createElement("div")); // adicionando uma div.


                    $(this).append(divToAppend).hide().fadeIn("slow")

                    break;

                    case "unload":
                        
                        $("#loader").fadeOut(function(){
                            $(this).remove();
                        });

                    break;

                    default: 
                        console.log("Action Invalible");

            }

            
        });
    }

})(jQuery);

/*
<div id="loader">
    <div class="loadingio-spinner-ripple-7u3414vrigt">
        <div class="ldio-fgdmp2exr4c">
            <div></div>
            <div></div>
        </div>
    </div>
</div> 
*/