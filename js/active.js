(function ($) {
    'use strict';

    var orio_window = $(window);

    // ****************************
    // Preloader
    // ****************************

    orio_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });



    // ***********************************
    //  Obekti Slide
    // ***********************************
    if ($.fn.owlCarousel) {
        var obektiSlide = $('.portfolio-sildes');
        obektiSlide.owlCarousel({
            items: 4,
            margin: 50,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        });
    }

    // ***********************************
    // Oborudovanie slide
    // ***********************************
    if ($.fn.owlCarousel) {
        var oborudovanieSlide = $('.oborudovanie-sildes');
        oborudovanieSlide.owlCarousel({
            items: 4,
            margin: 50,
            loop: true,
            nav: true,
            navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            autoplay: true,
            smartSpeed: 1500,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1400: {
                    items: 3
                }
            }
        });
    }
})(jQuery);

// ***********************************
// Counter  Number
// ***********************************

if ($.fn.counterUp) {
    $('.counter').counterUp({
        delay: 15,
        time: 1500
    });
}