$(function () {
    var search;
    $("#submit").click(function(){
        search = $('#search_query').val();
        if(search){
            $('#search').remove();
            var API_KEY = '2579974-276c5874a6c5309b36b0135ce';
            var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + search + "&image_type=photo";
            $.getJSON(URL, function (data) {
                var container=$('#second_part');
                if (parseInt(data.totalHits) > 0)
                    $.each(data.hits, function (i, hit) {
                        console.log(hit.pageURL);
                        container.append(tmpl("results",hit))
                    });
                else
                    alert('Нет изображений');
            });
        }
    });
    $("#search_query").keyup(function(event) {
        if(event.keyCode==13) {
            search = $('#search_query').val();
            if(search){
                $('#search').remove();
                var API_KEY = '2579974-276c5874a6c5309b36b0135ce';
                var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + search + "&image_type=photo";
                $.getJSON(URL, function (data) {
                    var container=$('#second_part');
                    if (parseInt(data.totalHits) > 0)
                        $.each(data.hits, function (i, hit) {
                            container.append(tmpl("results",hit))
                        });
                    else
                        alert('Нет изображений');
                });
            }
        }
    });
})