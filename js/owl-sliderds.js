$(document).ready(function(){
    $(".slider-towars").owlCarousel({
        loop:true,
        dots: false,
        margin:20,
        stagePadding: 10,
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
        margin:20,
        stagePadding: 10,
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
        margin:20,
        stagePadding: 10,
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
    $(".reviews-slider").owlCarousel({
        loop:true,
        dots:true,
        margin:20,
        stagePadding: 10,
        dotsClass: "dots",
        dotsContainer: ".dots-reviews",
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
    $(".videos").owlCarousel({
        loop:true,
        dots:true,
        margin:20,
        stagePadding: 10,
        dotsClass: "dots",
        dotsContainer: ".dots-videos",
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
    $(".slider-arenda-towars").owlCarousel({
        loop:true,
        dots:true,
        margin:20,
        stagePadding: 10,
        dotsClass: "dots",
        dotsContainer: ".dots-towars",
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
    $(".images-slider").owlCarousel({
        loop:true,
        dots:true,
        margin:20,
        stagePadding: 10,
        dotsClass: "dots",
        dotsContainer: ".dots-images",
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
});