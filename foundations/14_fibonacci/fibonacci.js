const fibonacci = function(N) {
    if (N < 0) return "OOPS";

    const fib = [0, 1];

    for (let i = 2; i <= N; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[N];
}

// Do not edit below this line
module.exports = fibonacci;
