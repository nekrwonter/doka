$( document ).ready(function() {
    $( '#popupForm-form' ).submit( function(event) {
        $("#popupForm-form").html(
            "<h2 class='mb-4 text-center'>Спасибо!</h2>" +
            "<h2 class='mb-4 text-center'>Ваша заявка принята</h2>" +
            "<p class='mb-4 text-center'>Наши менеджеры свяжутся с вами в ближайшее время!</p>"
        )
        event.preventDefault();
        return false;
    });
});
