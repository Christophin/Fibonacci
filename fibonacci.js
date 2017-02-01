//function fibonacci (n)  {
//    var fibby = 0;
//    if (n <= 2)  {
//        fibby += 1;
//    } else  {
//        fibby += fibonacci(n - 2) + fibonacci(n - 1);
//    }
//    return fibby;
//}


var obj = {};
function fibonacci (n) {
    if (obj[n]) {
        console.log(obj);
        return obj[n];
    } else {
        var fibby = 0;
        if (n <= 2) {
            fibby += 1;
        } else {
            fibby += fibonacci(n - 2) + fibonacci(n - 1);
        }
        console.log(obj);
        obj[n] = fibby;
        return obj[n];
    }
}