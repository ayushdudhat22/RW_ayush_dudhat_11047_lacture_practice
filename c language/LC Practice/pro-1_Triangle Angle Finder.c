#include<stdio.h>
int main(){

int angle1,angle2,angle3;
int degree = 180;

printf("ENTER YOUR FIRST ANGLE VALUE:-");
scanf("%d",&angle1);

printf("ENTER YOUR SECOND ANGLE VALUE:-");
scanf("%d",&angle2);

angle3 = degree - (angle1 + angle2);

printf("Third angle Value is %d",angle3);

    return 0;
}