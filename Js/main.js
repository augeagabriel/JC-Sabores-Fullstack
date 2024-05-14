$(document).ready (function() {
    //Cambio de Header
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset(); 
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass ("transparente");
     }  else {
        $('header').addClass ("transparente");
     }
     //Accion menu lateral
    })
    $("#burger").click(function () {
        $("#burger").toggleClass("abierto");
        $(".menu").toggleClass("abierto");
    }) 
    //Smooth Scroll
    $("a").on("click", function() {
        if (this.hash !== "") {
            let hash = this.hash;
            $("html, body").animate( {
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })

})
