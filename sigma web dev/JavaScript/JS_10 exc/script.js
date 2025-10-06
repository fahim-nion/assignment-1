//solution

var arrayTray = [];

function arrFromInput(val){
    for (let i = 1; i <= val; i++) {
        arrayTray[i-1] = i;
    }
    return arrayTray;
};

arrFromInput(prompt("Enter the number of what you want the factorial!"));
console.log(arrayTray);


//using for loop
let res = 1;
for (let i = 0; i < arrayTray.length; i++) {
    const element = arrayTray[i];
    res = element * res;
}

console.log(res);



//Using Reduce now

let factorial = (a,b)=>{
    return a*b;
}

console.log(arrayTray.reduce(factorial));