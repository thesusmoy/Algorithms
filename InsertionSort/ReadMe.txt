Example Walkthrough
Let's walk through the example array {2, 4, 3, 43, 4, 34, 34} to see how it changes.

Initial array: [2, 4, 3, 43, 4, 34, 34]
First iteration (j = 1):
key = 4, i = 0
Since A[i] = 2 is not greater than key, no shifting is needed.
Array remains [2, 4, 3, 43, 4, 34, 34].
Second iteration (j = 2):
key = 3, i = 1
A[i] = 4 is greater than key, so 4 is shifted to the right.
Array becomes [2, 4, 4, 43, 4, 34, 34].
Now, i = 0, A[i] = 2 is not greater than key, so 3 is inserted at position i + 1 = 1.
Array becomes [2, 3, 4, 43, 4, 34, 34].
Third iteration (j = 3):
key = 43, i = 2
Since A[i] = 4 is not greater than key, no shifting is needed.
Array remains [2, 3, 4, 43, 4, 34, 34].
Fourth iteration (j = 4):
key = 4, i = 3
A[i] = 43 is greater than key, so 43 is shifted to the right.
Array becomes [2, 3, 4, 43, 43, 34, 34].
Now, i = 2, A[i] = 4 is not greater than key, so 4 is inserted at position i + 1 = 3.
Array becomes [2, 3, 4, 4, 43, 34, 34].
Fifth iteration (j = 5):
key = 34, i = 4
A[i] = 43 is greater than key, so 43 is shifted to the right.
Array becomes [2, 3, 4, 4, 43, 43, 34].
Now, i = 3, A[i] = 4 is not greater than key, so 34 is inserted at position i + 1 = 4.
Array becomes [2, 3, 4, 4, 34, 43, 34].
Sixth iteration (j = 6):
key = 34, i = 5
A[i] = 43 is greater than key, so 43 is shifted to the right.
Array becomes [2, 3, 4, 4, 34, 43, 43].
Now, i = 4, A[i] = 34 is not greater than key, so 34 is inserted at position i + 1 = 5.
Array becomes [2, 3, 4, 4, 34, 34, 43].
Final Output
At the end of the process, the array is fully sorted:

java
Copy code
[2, 3, 4, 4, 34, 34, 43]
This is what is printed by System.out.println(Arrays.toString(A));.