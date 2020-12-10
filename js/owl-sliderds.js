$(document).ready(function(){
    $(".slider-towars").owlCarousel({
        loop:true,
        dots: false,
        responsiveClass:true,
        responsive:{
            1200 : {
                items:3
            },
            // breakpoint from 480 up
            1000 : {
                items:2
            },
            // breakpoint from 768 up
            768 : {
                items:1
            },
            0 : {
                items: 1
            }
        }
    });
    $(".complect-slider").owlCarousel({
        loop:true,
        dots:true,
        dotsClass: "dots",
        dotsContainer: ".dots-complect",
        responsiveClass:true,
        responsive:{
            1200 : {
                items:4
            },
            // breakpoint from 480 up
            1000 : {
                items:3
            },
            // breakpoint from 768 up
            768 : {
                items:2
            },
            0 : {
                items: 1
            }
        }
    });
    $(".logo-slider").owlCarousel({
        loop:true,
        dots:true,
        dotsClass: "dots",
        dotsContainer: ".dots-logo",
        responsiveClass:true,
        responsive:{
            1200 : {
                items:5
            },
            // breakpoint from 480 up
            1000 : {
                items:4
            },
            // breakpoint from 768 up
            768 : {
                items:2
            },
            0 : {
                items: 1
            }
        }
    });
});