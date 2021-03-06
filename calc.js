
function ataylor(xValue, numberOfIteration=10){
    return sinFromInternet(xValue, numberOfIteration);
}

function sinFromInternet(x, iterNum, precission=3) {
    var mxx = -x*x;
    var sin = 1;
    var n = 0;
    var term = 1;
    for (var i = 1; i <= 2*iterNum; i++) {
        n = n + 2;
        term = term * mxx / ( n*(n+1) );
        sin = sin + term
    }
    sin = x*sin;

    return parseFloat(sin).toPrecision(precission);

}

module.exports.taylor = ataylor;