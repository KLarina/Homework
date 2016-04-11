// Заполнить массив циклом //

var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(prompt( "Введите имя", ''));
}

user = prompt('введите свое имя', "");
var variable;
for (var i = 0; i < arr.length; i++) {
    if (user == arr[i]) {
        alert(user+ ' вы успешно вошли!');
        variable=true;
        break;
    }
}
if(variable===undefined)

{alert("неверное имя","");

}