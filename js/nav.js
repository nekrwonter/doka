

if($(window).width() < 768)
{
    $('#navbarTogglerHeader1').append($('#navbarTogglerHeader2')
        .unwrap()).parent();
    $('#lower-menu').remove();
    $('#navbarTogglerHeader2').removeClass('collapse');
    $('#navbarTogglerHeader2').addClass('flex-column');
}