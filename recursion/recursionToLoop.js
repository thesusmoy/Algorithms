function recursion(n) {
    while (n > 0) {
        console.log(n);
        n--;
    }
}

recursion(5); // Time complexity: O(n), Space complexity: O(1) that is more efficient

//Tail Recursion
function recursion(n) {
    if (n > 0) {
        console.log(n);
        return recursion(n - 1);
    }
}

recursion(5); // Time complexity: O(n), Space complexity: O(n)

//Head Recursion
function recursion(n) {
    if (n > 0) {
        return recursion(n - 1);
        console.log(n);
    }
}

recursion(5); // Time complexity: O(n), Space complexity: O(n)
