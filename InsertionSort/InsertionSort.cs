using System;

class Program
{
    static void InsertionSort(int[] A)
    {
        for (int j = 1; j < A.Length; j++)
        {
            int key = A[j];
            int i = j - 1;
            while (i >= 0 && A[i] > key)
            {
                A[i + 1] = A[i];
                i = i - 1;
            }
            A[i + 1] = key;
        }

        Console.WriteLine(string.Join(", ", A));
    }

    static void Main(string[] args)
    {
        int[] A = { 2, 4, 3, 43, 4, 34, 34 };
        InsertionSort(A);
    }
}
