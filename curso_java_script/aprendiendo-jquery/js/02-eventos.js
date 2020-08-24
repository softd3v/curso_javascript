$(document).ready(function () {

    // MOUSE OVER Y MOUSE OUT
    var caja = $("#caja");
    // caja.mouseover(function(){
    //    $(this).css("background","red") 
    // });
    // caja.mouseout(function(){
    //     $(this).css("background","green")
    // });

    function cambiaRojo() {
        $(this).css("background", "red")
    };

    function cambiaVerde() {
        $(this).css("background", "green")
    };

    // HOVER
    caja.hover(cambiaRojo, cambiaVerde);

    // CLICK y DOBLECLICK
    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");

    });

    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "black");

    });

});