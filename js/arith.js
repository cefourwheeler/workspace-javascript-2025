// get the element 

// element --- property
const sE =document.getElementById("num1");
var num1=parseInt(sE.textContent);
const sE2 =document.getElementById("num2");
var num2 =parseInt(sE2.textContent);

console.log("Get num1:" + num1 + " Get num2:" + num2);



//process
var c = num1 + num2;

//display
document.write(c);