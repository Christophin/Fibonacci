function fibonacci (n)  {
    var fibby = 0;
    if (n <= 2)  {
        fibby += 1;
    } else  {
        fibby+= fibonacci(n - 2) + fibonacci(n - 1);
    }
    return fibby;
}