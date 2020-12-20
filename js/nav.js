

if($(window).width() < 990)
{
    $('#navbarTogglerHeader1').append($('#navbarTogglerHeader2')
        .unwrap()).parent();
    $('[data-bs-target = "#navbarTogglerHeader2"]').remove();
    $('#lower-menu').remove();
    $('#navbarTogglerHeader2').removeClass('collapse');
    $('#navbarTogglerHeader2').addClass('flex-column');
    $('#navbarTogglerHeader1').removeClass('flex-row');
    $('#main-nav').removeClass('flex-shrink-1');
    $('#main-nav').removeClass('flex-grow-1');
    $('#main-nav li').removeClass('me-4');
    $('#navbarTogglerHeader1').addClass('flex-column');
}