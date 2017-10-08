$(document).ready(function() {
    var menu = $('.menu').outerHeight();
    $('a[href^="#"]').click( function(){
        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top - menu;
        $('html, body').animate({ scrollTop: destination }, 1000);
    });
})