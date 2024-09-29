function insertionSort(A) {
    for (let j = 1; j < A.length; j++) {
        let key = A[j];
        let i = j - 1;
        while (i >= 0 && A[i] > key) {
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;
    }
    console.log(A);
}

const A = [2, 4, 3, 43, 4, 34, 34];
insertionSort(A);
