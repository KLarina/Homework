$(function(){

    var data = {
        name:"Ларина Екатерина Владимировна",
        who:"Бухгалтер",
        target:"Хочу учить Fronted, потому что:",
        targets:["Это интересно.", "Это перспективно.", "Мне это нравится."],
        bot:"repeat-bottom",
        top:"repeat-top",
        phone_title:"Мой контактный телефон",
        phone:"+38066...",
        vk:"Мой профиль вконтакте",
        adr:"vk.com",
        feed:"Мой фидбек",
        feed_cont:"..."
    };

    var container = $('#second_part');
    container.append(tmpl("item_templ",data))

});