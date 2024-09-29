function funA(n) {
    if (n > 0) {
        console.log(Math.ceil(n));
        return funB(n - 1);
    }
}

function funB(n) {
    if (n > 1) {
        console.log(Math.ceil(n));
        return funA(n / 2);
    }
}

funA(19);
