function createCard(title,cName,views,monthsOld,duration,thumbnile){
    let viewStr;
    if (views<1000){
        viewStr = views;
    }else if (views>1000000){
        viewStr = views /1000000 + "M";
    }else{
        viewStr = views /1000 + "K"
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnile}" alt="">
                <div class="capsule"> ${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} Views . ${monthsOld} months ago</p>
            </div>
        </div>`
    
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

    //“Find the box called .container, then put in all the stuff that’s already there PLUS this new card I made.
}

createCard("Introduction to backend | Sigma web dev video #2","CodeWithHarry",560000,7,"31:32","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg")