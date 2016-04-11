// Возведение в степень //

var x = prompt ('ввести значение');
    var n = prompt('ввести степень');
    var result=x;
    for  (var i=1; i<n; i++){
        result=x*result;
    }
    if (i<0) {
        console.log ('введите положительное значение');
    } else {
        console.log(result);
    }