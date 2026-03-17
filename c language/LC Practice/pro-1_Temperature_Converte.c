#include<stdio.h>
int main(){

        float celsius,fahrenheit;
        int x=32;
        float half=1.8;

        printf("PLEASE ENTER CELSIUS VALUE:-");
        scanf("%f",&celsius);

        fahrenheit = (half*celsius)+x;

        printf("fahrenheit = %f",fahrenheit);

    return 0;
}