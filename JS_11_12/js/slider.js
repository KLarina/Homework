$(document).ready(function(){
    function htmSlider(){
        var slideWrap = $('.slide-wrap');
        var nextLink = $('.next-slide');
        var prevLink = $('.prev-slide');
        var playLink = $('.auto');
        var is_animate = false;
        var slideWidth = $('.slide-item').outerWidth();
        var newLeftPos = slideWrap.position().left - slideWidth;

        nextLink.click(function(){
            if(!slideWrap.is(':animated')) {
                slideWrap.animate({left: newLeftPos}, 500, function(){
                    slideWrap
                        .find('.slide-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                });
            }
        });

        prevLink.click(function(){
            if(!slideWrap.is(':animated')) {
                slideWrap
                    .css({'left': newLeftPos})
                    .find('.slide-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left: 0}, 500);

            }
        });

        function autoplay(){
            if(!is_animate){
                is_animate = true;
                slideWrap.animate({left: newLeftPos}, 500, function(){
                    slideWrap
                        .find('.slide-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                    is_animate = false;
                });
            }
        }

        playLink.click(function(){
            if(playLink.hasClass('play')){
                playLink.removeClass('play').addClass('pause');
                $('.navy').addClass('disable');
                timer = setInterval(autoplay, 2000);
            } else {
                playLink.removeClass('pause').addClass('play');
                $('.navy').removeClass('disable');
                clearInterval(timer);
            }
        });

    }

    htmSlider();
});