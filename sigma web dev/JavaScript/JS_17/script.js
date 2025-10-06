// console.log("faahim")
// console.log("faahim morshed")

// setTimeout(() => {
//     console.log("i am inside the set timer")
// }, 2000);
// console.log("the end")

// const callback = (arg)=>{
//     console.log(arg);

// }

const loadScript = (src,callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("fahim")
    document.head.append(sc);
}

// chat gpt told me

function greet(name, callbackfunc) {
  console.log(`Hello ${name}`);
  callbackfunc();
}

let sayBye = function () {
  setTimeout(() => {
    console.log("GoodBye Mate!");
  }, 2000);
};
greet("Fahim", sayBye);
// function sayBye(){
//     console.log("Goodbye Mate!");
// }
