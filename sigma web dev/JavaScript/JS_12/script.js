console.log("Hello")


// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "red"


document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e=>{
    // console.log("e");
    e.style.backgroundColor = "pink"
    
})


// array = [1,2,4,50]
// array.forEach(element => {
//     console.log(element)
// });


console.log(document.getElementsByTagName("div"))