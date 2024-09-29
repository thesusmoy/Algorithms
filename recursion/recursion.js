let staticVar = 0;
function recursion(n) {
    if (n == 0) return 0;
    if (n > 0) {
        staticVar++;
        // console.log('printed before recursive call: ' + n);
        return recursion(n - 1) + staticVar;
    }
}

function main() {
    const x = 5;
    // recursion(x);
    const result = recursion(x);
    console.log(result);
}

main();
