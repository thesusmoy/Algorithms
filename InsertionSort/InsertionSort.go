package main

import (
	"fmt"
)

func insertionSort(A []int) {
	for j := 1; j < len(A); j++) {
		key := A[j]
		i := j - 1
		for i >= 0 && A[i] > key {
			A[i+1] = A[i]
			i = i - 1
		}
		A[i+1] = key
	}
	fmt.Println(A)
}

func main() {
	A := []int{2, 4, 3, 43, 4, 34, 34}
	insertionSort(A)
}
