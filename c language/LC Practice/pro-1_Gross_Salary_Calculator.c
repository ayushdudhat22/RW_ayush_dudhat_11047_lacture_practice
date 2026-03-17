#include<stdio.h>
int main(){

float basic,hra,da,ta,gross;
float hra_per,da_per,ta_per;
int x =100;

printf("ENTER BASIC SALARY:-");
scanf("%f",&basic);

printf("Enter HRA percentage:-");
scanf("%f",&hra_per);

printf("Enter DA percentage:-");
scanf("%f",&da_per);

printf("Enter TA percentage:-");
scanf("%f",&ta_per);

hra = basic*hra_per / x;

da = basic*da_per / x;  

ta = basic*ta_per / x;

gross = basic + hra + da + ta;

printf("gross salary is =%.2f",gross);

    return 0;
}