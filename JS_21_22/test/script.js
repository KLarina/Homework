var test = {

    pow: function (x,n){
        var result=x;
        for (var i=1; i<n; i++) {
            result*=x;
        }
        return result;
    }};

module.exports = test;