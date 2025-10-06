//LOCAL Storage

// if(localStorage.getItem("name")){
//     let a = localStorage.getItem("name")
//     document.write("Welcome "+a);
// }else{
//     let a = prompt("Enter your name");
//     localStorage.setItem("name",a);
//     document.write("Welcome "+a)
// }

//for object storing

// let a = {
//     "harry":1,
//     "rohan":67
// }

// let b = JSON.stringify(a); //string e convert hoye gelo

// localStorage.setItem("guys",b);

// console.log(localStorage.getItem("guys"));

// JSON.parse(localStorage.getItem("guys"))  //uno reverse


//************************************************************* */

function saveNoteToLocalStorage(arg){
    localStorage.setItem("note",arg);
}

let note = localStorage.getItem("note")

if (note){
    document.querySelector(".note").innerHTML = note
}

document.querySelector("button").addEventListener("click",()=>{
    let msg = prompt("what is your note?")
    saveNoteToLocalStorage(msg);
    document.querySelector(".note").innerHTML = document.querySelector(".note").innerHTML + msg +"<br>";
})