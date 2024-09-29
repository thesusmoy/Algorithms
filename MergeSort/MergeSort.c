#include <stdio.h>

void merge(int a[], int l, int mid, int h) { //using Recursing
    int i=l; 
    int j=mid+1;
    int k=l;
    int temp[10];
    while(i<=mid && j<=h) {
        if(a[i]<=a[j]) {
            temp[k]= a[i];
            i++;
            k++;
        } else {
            temp[k]=a[j];
            j++;
            k++;
        }
    }
    if(i>mid){
        while(j<=h){
            temp[k]=a[j];
            j++;
            k++;
        }
    } else{
        while(i<=mid){
           temp[k]=a[i];
           i++;
           k++;
        }
    }
    for(k=l;k<=h;k++){
        a[k]=temp[k];
    }
}
void mergesort(int a[], int l, int h) {
    if(l<h) {
        int mid=(l+h)/2; //or l+(h-l)/2
        mergesort(a,l,mid) ;
        mergesort(a, mid+1, h) ;
        merge(a,l, mid, h);
    }
}
int main() {
    int n;
    printf("enter the number of element : ");
    scanf("%d",&n);
    int a[n];
    printf("Enter Elements : ");
    for(int i=0; i<n; i++) {
        scanf("%d",&a[i]);
    }
    mergesort(a,0,n-1);
    printf("After Sorting : ");
    for(int i=0; i<n; i++) {
        printf("%d ",a[i]);
    }
    return 0;
}