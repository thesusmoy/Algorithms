//using recursion
// function fibonacci(n) {
//     if (n == 0) return 0;
//     if (n == 1 || n == 2) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const n = 5;
// console.log(fibonacci(n));

//using recursion with memorization

const dp = new Array(100).fill(-1);
const n = 50;
function way(n) {
    if (n === 0 || n === 1) return 1;
    if (dp[n] !== -1) return dp[n];
    return (dp[n] = way(n - 1) + way(n - 2));
}

// Example usage
console.log(way(n)); // Output: 8
