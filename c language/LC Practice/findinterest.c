#include<stdio.h>
int main(){

float p,r,n,interest;
int x=100;

printf("PLEASE ENTER P VALUE:-");
scanf("%f",&p);

printf("PLEASE ENTER R VALUE:-");
scanf("%f",&r);

printf("PLEASE ENTER N VALUE:-");
scanf("%f",&n);

interest = (p*r*n)/x;

printf("interest = %.5f",interest);

    return 0;
}