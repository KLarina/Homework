var count = 1;
var count2 = 1;
var count3 = 1;

$(document).ready(function() {
    $('#1block__info1').addClass('show-cell').removeClass('hide');

    $('#arrows__b1 .steps__blocks__right__arrow').on('click', function(){
        $('#1block__info' + count).addClass('hide').removeClass('show-cell');
        $('#1block__info' + ++count).addClass('show-cell').removeClass('hide');
        if(count == 4) { count = 1; $('#1block__info1').addClass('show-cell').removeClass('hide'); }
    });

    $('#arrows__b1 .steps__blocks__left__arrow').on('click', function(){
        $('#1block__info' + count).addClass('hide').removeClass('show-cell').removeClass('hide');
        $('#1block__info' + --count).addClass('show-cell').removeClass('hide');
        if(count == 0) { count = 3; $('#1block__info3').addClass('show-cell').removeClass('hide') }
    });
    $('#2block__info1').addClass('show-cell').removeClass('hide');

    $('#arrows__b2 .steps__blocks__right__arrow').on('click', function(){
        $('#2block__info' + count2).addClass('hide').removeClass('show-cell');
        $('#2block__info' + ++count2).addClass('show-cell').removeClass('hide');
        if(count2 == 4) { count2 = 1; $('#2block__info1').addClass('show-cell').removeClass('hide'); }
    });

    $('#arrows__b2 .steps__blocks__left__arrow').on('click', function(){
        $('#2block__info' + count2).addClass('hide').removeClass('show-cell').removeClass('hide');
        $('#2block__info' + --count2).addClass('show-cell').removeClass('hide');
        if(count2 == 0) { count2 = 3; $('#2block__info3').addClass('show-cell').removeClass('hide') }
    });
    $('#3block__info1').addClass('show-cell').removeClass('hide');

    $('#arrows__b3 .steps__blocks__right__arrow').on('click', function(){
        $('#3block__info' + count3).addClass('hide').removeClass('show-cell');
        $('#3block__info' + ++count3).addClass('show-cell').removeClass('hide');
        if(count3 == 4) { count3 = 1; $('#3block__info1').addClass('show-cell').removeClass('hide'); }
    });

    $('#arrows__b3 .steps__blocks__left__arrow').on('click', function(){
        $('#3block__info' + count3).addClass('hide').removeClass('show-cell').removeClass('hide');
        $('#3block__info' + --count3).addClass('show-cell').removeClass('hide');
        if(count3 == 0) { count3 = 3; $('#3block__info3').addClass('show-cell').removeClass('hide') }
    });
});