package InsertionSort;

import java.util.Arrays;

public class InsertionSort {
    public static void insertionSort(int[] A) { //
        for (int j = 1; j < A.length; j++) { // 
            int key = A[j]; // A[1]= 4;
            int i = j - 1; // i = 1 - 1= 0; 
            while (i >= 0 && A[i] > key) { // i = 0 but key > A[i] so loop stoped; 
                A[i + 1] = A[i]; // stoped,
                i = i - 1; // stoped,
            }
            A[i + 1] = key; // A[0+1] = 4;
        }
        System.out.println(Arrays.toString(A)); //
        
    }

    public static void main(String[] args) {
        int[] A = {2, 4, 3, 43, 4, 34, 34};
        insertionSort(A);
    }
}

// Loop(1): {2, 4, 3, 43, 4, 34, 34}; 
// Loop(2):
// Loop(3):
// Loop(4):
// Loop(5):
// Loop(6):