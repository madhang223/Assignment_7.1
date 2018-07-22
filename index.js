$(function(){
    var num1 = -8;
    var num2 = 12.5;
    var num3 = -6.769;
    var num4 = 0;
    var num5 = -1;
    var maxNum;

    //Condition to check if num1 is gratest
    if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        maxNum = num1;
    }
    //Condition to check if num2 is gratest
    if(num2 > num1 && num2 > num3 && num2 > num4 && num4 > num5){
        maxNum = num2;
    }
    //Condition to check if num3 is gratest
    if(num3 > num1 && num3 > num2 && num3 > num4 && num1 > num5){
        maxNum = num3;
    }
    //Condition to check if num4 is gratest
    if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
        maxNum = num4;
    }
    //Condition to check if num5 is gratest
    if(num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){
        maxNum = num5;
    }
    
    console.log(maxNum);
});