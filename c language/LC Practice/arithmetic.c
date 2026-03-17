#include<stdio.h>
int main(){

    int a,b;
    int add;
    int sub;
    int mul;
    int div;
    float mod;

    printf("PLEASE ENTER A VALUE:-");
    scanf("%d",&a);

    printf("PLEASE ENTER B VALUE:-");
    scanf("%d",&b);

    add = a+b;
    printf("addition of %d and %d is = %d\n",a,b,add);
    
    sub = a-b;
    printf("subtraction of %d and %d is = %d\n",a,b,sub);

    mul = a*b;
    printf("multipliction of %d and %d is = %d\n",a,b,mul);

    div = a/b;
    printf("division of %d and %d is = %d\n",a,b,div);

    mod = a%b;
    printf("modulo od %d and %d is = %d\n",a,b,mod);

    return 0;
}