#include <iostream>
#include <vector>

void insertionSort(std::vector<int>& A) {
    for (int j = 1; j < A.size(); j++) {
        int key = A[j];
        int i = j - 1;
        while (i >= 0 && A[i] > key) {
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;
    }

    for (int i = 0; i < A.size(); i++) {
        std::cout << A[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::vector<int> A = {2, 4, 3, 43, 4, 34, 34};
    insertionSort(A);
    return 0;
}
