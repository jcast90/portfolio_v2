$(document).ready(function () {
    $('div.hidden').fadeIn(4000).removeClass('hidden');
    $(function () {
        $('#arrow_down').click(function () {
            $('html,body').animate({
                scrollTop: $(".header_h2").offset().top
            }, 'slow');
            // $('.nav').css('position','fixed');
        });
    });
    $(function(){
        $('.panel-title').click( function() {
    $('html,body').animate({ scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  }, 200);
});
    })
});