$(function(){
    // Isotope plugin jQuery
    var $grid = $('.grid').imagesLoaded( function() {
        // init Isotope after all images have loaded
        $grid.isotope({
            // options...
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
    });
    //End Isotope plugin jQuery

    // ajax
    $.ajax({
        type: 'GET',
        url:'http://api.pixplorer.co.uk/image?word=' + 'london' + '&amount=7&size=300',
        dataType: 'json',
        success: function(data){
            var arrImageurl = _.map(data.images, 'imageurl');
            console.log('123:'+arrImageurl);
            $('.grid-item').each(function(i){
                $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
            });
        },
        error: function(){
            console.log('Request is bad');
        }
    });

    $('.input-activities__find-btn').on('click', function(e){
        var search = $('.input-activities__input-search').val();
        e.preventDefault();
        if(search){
            $('.input-activities__input-search').val('');
            $.ajax({
                type: 'GET',
                url:'http://api.pixplorer.co.uk/image?word=' + search + '&amount=7&size=700',
                dataType: 'json',
                success: function(data){
                    var arrImageurl = _.map(data.images, 'imageurl');
                    $('.grid-item').each(function(i){
                        $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
                    });
                    $('.grid-item > div > p').text(search);
                },
                error: function(){
                    console.log('Request is bad');
                }
            });
        }
    });
// End ajax
});