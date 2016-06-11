$(function() {
    $( "#tabs" ).tabs();
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:false,
        nav:true,
        dots:true
    });
    $(".js-example-basic-single").select2();
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(300);
        },
        function(){
            $(this).children('.sub-menu').slideUp(300);
        }
    );
});