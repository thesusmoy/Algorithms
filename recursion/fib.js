// const A = new Array(10);
const A = new Array(1000).fill(-1);
// console.log(A.length);

function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return (A[n] = fib(n - 1) + fib(n - 2));
}

console.log(fib(50));

// function main() {
//     let i = 0;
//     for (i; i < 10; i = i + 1) {
//         A[i] = -1;
//     }
//     console.log(fib(50));
// }

// main();
