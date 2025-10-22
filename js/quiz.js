// impliment a randomw quiz for quiz1.html. Math.random is from 0 to 1 not including 1

var num1= Math.floor(Math.random()*200+100);
document.getElementById("M").textContent=num1;

var num2= Math.floor(Math.random()*50+100);
document.getElementById("N").textContent=num2;

var num3=Math.floor(Math.random()*10+1);
document.getElementById("O").textContent=num3;

var ans1=num1 - (num2 + num3);
document.getElementById("P").textContent=num1 + " - " + (num2 + num3) + " = " + ans1;

var ans2=num1 - num2 + num3;
document.getElementById("S").textContent=num1 + " - " + (num2 + num3) + " = " + ans2;

var ans3=num1 - num2 - num3;
document.getElementById("T").textContent=num1 + " - " + num2 + " - " + num3 + " = " + ans3;

var ans4= num1 - num2 + num3;
document.getElementById("U").textContent=num1 + " - " + num2 + " + " + num3 + " = " + ans4;