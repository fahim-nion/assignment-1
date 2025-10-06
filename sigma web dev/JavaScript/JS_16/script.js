let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    // alert("i was clicked");
    document.querySelector(".box").innerHTML = "<b>yayy</b> you clicked finally!!"

})


document.addEventListener("keydown",(e)=>{
    console.log(e.key , e.keyCode)
})