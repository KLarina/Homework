var test;
test = {
    wrapper: 0,
    body: document.getElementsByTagName('body'),
    header: 0,
    forma: document.createElement('forma'),
    olQuestion: 0,
    numQestion: 0,
    ulAnswers: 0,
    liNumAnsver: 0,
    label: 0,
    numAnswer: 0,
    span: 0,
    h3: 0,
    testResults: document.createElement('input'),

    addWrapper: function () {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.wrapper.classList.add('container');
        document.body.insertBefore(this.wrapper, document.body.children[0]);
    },

    addHeader: function () {
        this.header = document.createElement('h2');
        this.header.classList.add('text-center');
        this.header.innerHTML = 'Тест по программированию';
        this.wrapper.appendChild(this.header);
    },

    addForma: function () {
        this.forma.setAttribute('method', 'POST');
        this.forma.setAttribute('action', '#');
        this.wrapper.appendChild(this.forma);
    },

    addOlMainList: function () {
        this.olQuestion = document.createElement('ol');
        this.olQuestion.classList.add('questions');
        this.forma.appendChild(this.olQuestion);
    },

    addLiMainList: function () {
        this.numQestion = document.createElement('li'),
            this.numQestion.classList.add('numQestion');
        this.numQestion.style.margin = '15px';
        this.olQuestion.appendChild(this.numQestion);
    },

    addLiH3: function (i) {
        this.h3 = document.createElement('h3');
        this.h3.style.fontSize = '20px';
        this.h3.innerHTML = 'Вопрос № ' + i;
        this.numQestion.appendChild(this.h3);
    },

    addUlSublist: function() {
        this.ulAnswers=document.createElement('ul');
        this.ulAnswers.classList.add('answers');
        this.numQestion.appendChild(this.ulAnswers);
    },

    addLiSublist: function() {
        this.liNumAnsver=document.createElement('li');
        this.liNumAnsver.classList.add('liNumAnsver');
        this.liNumAnsver.style.margin='5px 0px 0px 30px';
        this.ulAnswers.appendChild(this.liNumAnsver);
    },

    addLabel: function() {
        this.label=document.createElement('label');
        this.liNumAnsver.appendChild(this.label);
    },

    addCheckbox: function() {
        this.numAnswer=document.createElement('input');
        this.numAnswer.setAttribute('type','checkbox');
        this.label.appendChild(this.numAnswer);
    },

    addSpan: function(j) {
        this.span=document.createElement('span');
        this.span.innerHTML='Вариант ответа № '+j;
        this.label.appendChild(this.span);
    },

    addSubmit: function() {
        this.testResults.setAttribute('type','submit');
        this.testResults.setAttribute('value','Проверить мои результаты');
        this.testResults.classList.add('testResults');
        this.testResults.classList.add('btn-danger');
        this.testResults.classList.add('btn-lg');
        this.testResults.classList.add('active');
        this.testResults.style.display='block';
        this.testResults.style.margin='0 auto';
        this.forma.appendChild(this.testResults);
    },

    addAll: function() {
        this.addWrapper();
        test.addHeader();
        test.addForma();
        this.addOlMainList();
        for(var i=1;i<=3;i++){
            this.addLiMainList();
            this.addLiH3(i);
            this.addUlSublist();
            for( var j=1; j<=3;j++){
                this.addLiSublist();
                this.addLabel();
                this.addCheckbox();
                this.addSpan(j);
            }
        }
        this.addSubmit();
    }
}

test.addAll();