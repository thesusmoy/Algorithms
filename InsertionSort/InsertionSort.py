
def insertion_sort(A):
    for j in range(1, len(A)):
        key = A[j]
        i = j - 1
        while i >= 0 and A[i] > key:
            A[i + 1] = A[i]
            i = i - 1
        A[i + 1] = key
    return A

def main():
    A = [2, 4, 3, 43, 4, 34, 34]
    insertion_sort(A)
    print(A)

main()


