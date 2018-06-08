
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

    $('.active-testimonial-carousel').owlCarousel({
        loop:true,
        dot: true,
        items: 3,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
             }
        }
    })
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
                console.log('Silent failure.');
            }
        });
        return false;
      });

    });
 });



(function ($){

    $.fn.bekeyProgressbar = function(options){

        options = $.extend({
            animate     : true,
          animateText : true
        }, options);

        var $this = $(this);

        var $progressBar = $this;
        var $progressCount = $progressBar.find('.progressBar-percentage-count');
        var $circle = $progressBar.find('.progressBar-circle');
        var percentageProgress = $progressBar.attr('data-progress');
        var percentageRemaining = (100 - percentageProgress);
        var percentageText = $progressCount.parent().attr('data-progress');

        //Calcule la circonférence du cercle
        var radius = $circle.attr('r');
        var diameter = radius * 2;
        var circumference = Math.round(Math.PI * diameter);

        //Calcule le pourcentage d'avancement
        var percentage =  circumference * percentageRemaining / 100;

        $circle.css({
          'stroke-dasharray' : circumference,
          'stroke-dashoffset' : percentage
        })

        //Animation de la barre de progression
        if(options.animate === true){
          $circle.css({
            'stroke-dashoffset' : circumference
          }).animate({
            'stroke-dashoffset' : percentage
          }, 3000 )
        }

        //Animation du texte (pourcentage)
        if(options.animateText == true){

          $({ Counter: 0 }).animate(
            { Counter: percentageText },
            { duration: 3000,
             step: function () {
               $progressCount.text( Math.ceil(this.Counter) + '%');
             }
            });

        }else{
          $progressCount.text( percentageText + '%');
        }

    };

})(jQuery);

$(document).ready(function(){

  $('.progressBar--animateNone').bekeyProgressbar({
    animate : false,
    animateText : false
  });

  $('.progressBar--animateCircle').bekeyProgressbar({
    animate : true,
    animateText : false
  });

  $('.progressBar--animateText').bekeyProgressbar({
    animate : false,
    animateText : true
  });

  $('.progressBar--animateAll').bekeyProgressbar();

})
