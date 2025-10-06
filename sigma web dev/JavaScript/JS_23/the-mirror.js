//The Mirror Mirror 😃✔️

let str = "FooBazzMooTazz";
let newStr = '';

for (let index = str.length-1; index >= 0; index--){
    const element = str[index];
    newStr+= element;
}
console.log(str)
console.log(newStr);