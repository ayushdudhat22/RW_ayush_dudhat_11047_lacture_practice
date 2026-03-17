#include<stdio.h>
int main(){

int a,b,ans;

printf("PLEASE ENTER A VALUE:-");
scanf("%d",&a);

printf("PLEASE ENTER B VALUE:-");
scanf("%d",&b);

ans = (a*a) + (2*a*b) + (b*b);

printf("your answer is =%d",ans);

    return 0;
}