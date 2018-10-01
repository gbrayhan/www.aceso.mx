
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;



	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

    //-------- Active Sticky Js ----------//
     $(".sticky-header").sticky({topSpacing:0});

     // -------   Active Mobile Menu-----//

     $(".mobile-btn").on('click', function(e){
        e.preventDefault();
        $(".main-menu").slideToggle();
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     $(".main-menu li a").on('click', function(e){
        e.preventDefault();
        $(".mobile-menu").slideUp();
        $(".mobile-btn span").toggleClass("lnr-menu lnr-cross");
    });



		
    // Add smooth scrolling to Menu links
         $(".main-menu li a, .smooth").on('click', function(event) {
                if (this.hash !== "") {
                  event.preventDefault();
                  var hash = this.hash;
                  $('html, body').animate({
                    scrollTop: $(hash).offset().top - (-10)
                }, 600, function(){

                    window.location.hash = hash;
                });
            }
        });

    
     // -------   Mail Send ajax

    $(document).ready(function() {
      //Formulario de contacto
      $('#myForm').on('submit', function (e) {
        $(this).attr("disabled", true);
        $('.contact-submit').text('Enviando Mensaje...');
        var dataString = $(".contact-form").serialize();
        $.ajax({
            type: 'POST',
            url: "php/contact.php",
            data: dataString,
            success: function () {
                $('.contact-form').hide();
                $('.alert').html("<div id='message'></div>");
                $('#message').html("<p>Mensaje enviado con éxito!</p>")
                    .append("<p>En breve responderemos tus comentarios.</p>");
            },
            error: function (data) {
                console.log('Error en el Envio.');
            }
        });
        return false;
      });
    });

 });
