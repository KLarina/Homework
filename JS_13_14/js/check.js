$(function() {
    'use strict';

    var testObj = {
        question1:{ question : "Сколько пальцев на левой руке?",
            answer1: "1",
            answer2: "5",
            answer3: "2"},

        question2:{ question : "Сколько пальцев на правой руке?",
            answer1: "1",
            answer2: "2",
            answer3: "5"},

        question3:{ question : "Сколько пальцев на обеих руках?",
            answer1: "8",
            answer2: "10",
            answer3: "9"},

        answers:{ question1: "answer2", question2: "answer3", question3: "answer2"}
    };

    localStorage.setItem('Questions',JSON.stringify(testObj));
    var test = localStorage.getItem('Questions');

    var html = $('#my_tmpl').html();
    var data = JSON.parse(test);
    var content = tmpl(html, data);
    $('div.content_wrapper').append(content);
    $('input#button-result').click(function() {
        var allInputs = $('input[type=radio]:checked:not(script input[type=radio])');
        //console.log(allInputs.length);
        var count=0;
        var result=0;
        var countQ=$('.list-questions li:not(script li)').length;
        console.log(countQ);
        var countA=allInputs.length;

        if(countA==countQ && countA!=0){
            for(var i = 0, j=1; i < allInputs.length;j++, i++){
                if(allInputs[i].getAttribute('value') == data.answers["question" + j])++count;
            }
            result=(count*100)/countQ;
            var modalHtml = $('#my_tmpl_modal').html();
            var strResult = {text: "Количество правильных ответов: <br/>" + result.toFixed(0) + " %  "};
            var content_modal = tmpl(modalHtml, strResult);
            $('div.content_wrapper').append(content_modal);
            allInputs=null;
            countA=0;
            strResult=null;
            result=0;
            $('input[type=radio]:checked:not(script input[type=radio])').each(function(){$(this).removeAttr("checked");});
        }
        else {
            var modalHtml2 = $('#my_tmpl_modal').html();
            var strResult2 = {text: "Ответьте на все вопросы!"};
            var content_modal2 = tmpl(modalHtml2, strResult2);
            $('div.content_wrapper').append(content_modal2);

        }
    });
    //Удаляем модальные окна по клику в body
    $('body').click(function(){
        $('div.modal-backdrop.fade.in').remove();
        $('div.modal.fade.bs-example-modal-sm.in').remove();
        $('div.modal').remove;

    });

});//end ready