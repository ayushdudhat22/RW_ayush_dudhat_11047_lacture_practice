#include<stdio.h>
int main(){

    float half=0.5;
    float b,h,triangle;

    printf("PLEASE ENTER B VALUE:-");
    scanf("%f",&b);

    printf("PLEASE ENTER H VALUE:-");
    scanf("%f",&h);

    triangle = half*b*h;

    printf("triagle = %.5f",triangle);

    return 0;
}