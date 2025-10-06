//The Vowel Counter 😃✔️

let vowels = ['a','e','i','o','u','A','E','I','O','U'];
let vowelCounter = (str)=>{
    let Counter = 0;
    for (const i of str) {
        if (!vowels.includes(i)){
            continue;
        }else{
            Counter+=1
        }
    }
    return Counter
}
console.log(vowelCounter("abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"))