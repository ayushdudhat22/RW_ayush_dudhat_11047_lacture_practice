#include<stdio.h>
int main(){

int mul;
int a,b;

printf("PLEASE ENTER A VALUE:-\n");
scanf("%d",&a);

printf("PLEASE ENTER B VALUE:-\n");
scanf("%d",&b);

mul = a*b;
printf("---------\n");
printf("|       |\n");
printf("|%d*%d=%d |\n",a,b,mul);
printf("|       |\n");
printf("---------");

    return 0;
}