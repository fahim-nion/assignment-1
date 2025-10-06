console.log("Hi i am in console")

//method 1 for getting all the boxes by js
// let boxes = document.getElementsByClassName("box");

// console.log(boxes)

// Array.from(boxes).forEach(e=>{
//     console.log(e)
// })

//method 2 using query selector

let boxes = document.querySelector(".container").children
// console.log(boxes)

function getRandomColor(){
    let val1 = Math.floor(0 + (255-0)*Math.random());
    let val2 = Math.floor(0 + (255-0)*Math.random());
    let val3 = Math.floor(0 + (255-0)*Math.random());
    console.log(val1,val2,val3);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})