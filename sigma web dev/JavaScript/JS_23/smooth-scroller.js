document.querySelector("button").addEventListener("click",()=>{
    document.querySelector(".note").scrollTo(
        {
            top : 0,
            behavior: "smooth"
        }
    )
})