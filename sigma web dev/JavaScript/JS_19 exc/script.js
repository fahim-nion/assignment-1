let txt = ["Initialized Hacking...Reading your files",
    "Reading your files",
    "Saved Password files detected",
    "Sending all files to the server",
    "Cleaning up",
    "Done! Now we have all your information!"
]

let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length -1]
    last.innerHTML = last.innerHTML + ".";
    if (last.innerHTML.endsWith("...")){
        last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-2)
    }else{
        last.innerHTML = last.innerHTML + "."
    }
}, 200);
const addItem = async (item)=>{
    await randomDelay()  // wait a random time before doing the next line
    let div = document.createElement("div");
    div.innerHTML = item
    document.body.append(div)
}

// eta ekta async function ja kina random delay ke call korche

const randomDelay = ()=>{
    return new Promise((resolve,reject)=>{
        let timeout = Math.floor(1+(7-1)*Math.random())
        setTimeout(() => {
            resolve() // after timeout seconds, finish the Promise
        }, timeout*1000);
    })
}

//random delay ekta function ja kina promise return korbe kintu ekta nirdishto shomoy por por

// for (const item of txt) {
//     addItem(item)
// }
const showMessages = async () => {
    for (const item of txt) {
      await addItem(item); // this makes them show one after the other
    }
    await randomDelay();
    clearInterval(t)
}

showMessages(); // call the async function to start
