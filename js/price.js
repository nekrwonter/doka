$( document ).ready(function() {
    $('.buttons-price').each(function(i, obj) {
        $(this).find("button").click(function() {
            // remove classes from all
            $("button").removeClass("active");
            // add class to the one we clicked
            //var dataTarget = $(this).attr("data-target");
            $('.tables-price').each(function(i, obj) {

                    // remove classes from all
                    //$(".price-item").collapse('toggle');
                    //$(".price-item").addClass("collapse");
                    //$("[data-target = "+ dataTarget+"]").addClass("collapse");

            });
            $(this).addClass("active");
        });
    });
});