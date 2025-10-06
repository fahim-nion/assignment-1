//The password validator 😃✔️

let passValidator = (passStr)=>{
    let char_8 = false
    let upper_case = false;
    let lower_case = false;
    let digit = false;
    let arr = []
    
    for (let i = 0; i < passStr.length; i++) {
        // const element = passStr[i];
        if(passStr.length >= 8){
            char_8 = true;
        }
        if (passStr.charCodeAt(i) >= 65 && passStr.charCodeAt(i) <= 90){
            upper_case = true;
        }
        //Regex alt
        if (/[a-z]/.test(passStr[i])){
            lower_case = true;
        }
        if(passStr.charCodeAt(i) >= 48 && passStr.charCodeAt(i) <= 57){
            digit = true;
    }
    
}
if (char_8 == false){
    arr.push("Password Length is less than 8")
}
if (upper_case == false){
    arr.push("Need an upperCase letter too")
}
if (lower_case == false){
    arr.push("Need an lowerCase letter too")
}
if (digit == false){
    arr.push("Need a digit though")
}

if (arr.length > 0){
    arr.forEach(element => {
        console.log(`${element} \n`)
    });
}
else{
    console.log("Your Password is okay ✔️")
}}

passValidator("abcks0A211")