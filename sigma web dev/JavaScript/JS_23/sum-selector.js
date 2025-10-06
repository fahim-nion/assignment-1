//The Sum Selector 😃✔️

let arr = [1,2,3,4,9,-3,1,2,5,2,1,3,4,5,8,3,5,6,6,7,9,2,3,4,6,-7]

let summation = (arr)=>{
    let sum = 0;
    for (const elem of arr) {
        if (elem > 0){
            sum += elem
        }else{
            break;
        }
    }
    return sum;
};

console.log(summation(arr))