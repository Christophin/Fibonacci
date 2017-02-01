

//Step 1.
function fibonacci (n)  {
    if (n === 1 || n === 0)  {
        return n;
    } else  {
       return fibonacci(n - 2) + fibonacci(n - 1);
    }
}


// Step 3
var obj = {};
function fibonacci (n) {
    if (obj[n]) {
        console.log(obj);
        return obj[n];
    } else {
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


// HARD MODE
function memoize(fn) {
    var cached = {};
    return function (n){
        if (cached[n])  {
            return cached[n];
        }   else    {
            cached[n] = fn(n);
            return cached[n];
        }
    };
}

var memoized = memoize(fibonacci);



// Negative and Positive Fibonacci
//
//function trueFib (n) {
//    var fibonacci = function (n) {
//        if (n === 1 || n === 0) {
//            return n;
//        } else if (n > 1) {
//            return fibonacci(n - 2) + fibonacci(n - 1);
//        } else {
//            return trueFib(Math.pow(-1, Math.abs(n) + 1) * fibonacci(Math.abs(n)));
//        }
//    };
//    return fibonacci(n);



//    if (n > 1)    {
//        fibonacci(n);
//    }   else  {
//            return trueFib(Math.pow(- 1, Math.abs(n) + 1) * fibonacci(Math.abs(n)));
//    }
//    console.log(-6 === -8);
//    console.log(-5 === 5);
//    console.log(-4 === -3);
//}
