$(document).ready(function () {
    $('span.hidden').fadeIn(4000).removeClass('hidden');
    $(function () {
        $('#arrow_down').effect('bounce', {
            times: 10
            , distance: 20
        }, 2000);
        $('#arrow_down').click(function () {
            $('html,body').animate({
                scrollTop: $(".header_h2").offset().top
            }, 'slow');
            // $('.nav').css('position','fixed');
        });
    });
});