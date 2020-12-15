$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").on('click', function () {
        current_fs = $(this).parent();
        current_fs.css({
            'display': 'none'
        })
        next_fs = $(this).parent().next();

        //Validation
        if (!document.querySelectorAll('input[name="exampleRadios1"]:checked').length > 0
            || !document.querySelectorAll('input[name="exampleRadios2"]:checked').length > 0
            || !document.querySelectorAll('input[name="exampleRadios3"]:checked').length > 0
            || !document.querySelectorAll('input[name="exampleRadios4"]:checked').length > 0) {
            $('.submit').addClass('disabled');
        }
        else {
            $('.submit').removeClass('disabled');
        }


//show the next fieldset
        next_fs.show();
//hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function (now) {
// for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            },
            duration: 600
        });
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        current_fs.css({
            'display': 'none'
        })
        previous_fs = $(this).parent().prev();


//show the previous fieldset
        previous_fs.show();

//hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function (now) {
// for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function () {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function () {

        return false;
    })

});