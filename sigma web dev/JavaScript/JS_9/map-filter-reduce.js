let arr = [2,5,11,13,25,67];
// let arr = [2,5,11,13,25];
let newArr =[]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr[index] = element**2;
    
}
// console.log(newArr);


//is there any better efficient way to this?
//map

// let newArr = arr.map(e=>{
//     return e**2;
// })
// console.log(newArr);



// const greaterThanSeven = (e)=>{
//     if (e > 7){
//         return true;
//     }
//     return false;
// };


// console.log(newArr.filter(greaterThanSeven))



let arr2 = [1,2,3,4,5,6];

const sum_func = (a,b)=>{
    return a+b;
}

console.log(arr2.reduce(sum_func));