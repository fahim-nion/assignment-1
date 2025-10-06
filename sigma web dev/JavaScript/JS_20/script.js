let a = prompt("enter a number:");
let b = prompt("enter the second one:");

if (isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed")
}

let sum = parseInt(a) + parseInt(b)
let x = 1;
try {
    console.log(sum *x) //try to run this code man
} catch (error) {
    console.log("error aa geya bhai");
} finally{
    console.log('files are being closed');
    
}


