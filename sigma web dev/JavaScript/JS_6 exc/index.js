/*

YOu need to calculate a faulty calculator
which takes 2 number from the user as input
calculates wrong in 10% of the time
    which is like this:
    + ----> -
    * ----> +
    - ----> /
    / ----> **


*/
var opt = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
function calc(num1, num2,operation){
    let predict = Math.random();
    if (predict > 0.1){
        switch(operation){
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
        }
    }else{
        fault = opt[operation];
        switch(fault){
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
        }
    }
}




let a = prompt("first num:");
let b = prompt("2nd num:");
let c = prompt("Opearation you wanna perform");
prompt(calc(a,b,c));