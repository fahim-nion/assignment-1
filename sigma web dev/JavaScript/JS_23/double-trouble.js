// The Double Trouble  😃✔️

let arr = [1,2,3,4,9,3,1,2,5,2,1,3,4,5,8,3,5,6,6,7,9,2,3,4,6,7]

let newArr = [];

for (const elem of arr) {
    if (!newArr.includes(elem)){
        newArr.push(elem)
    }else{
        continue;
    }
}
// console.log(newArr);
newArr.map((e)=>{
    return e*2;
})
console.log(newArr);