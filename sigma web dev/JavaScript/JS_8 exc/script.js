// Business name generator

let first, sec, third;
random = Math.random();
// console.log(random)

if (random < 0.33){
    first = "Crazy";
}else if(random > 0.33 && random < 0.66){
    first = "Amazing";
}else{
    first = "Fire";
};

random = Math.random();

if (random < 0.33){
    sec = "Engine";
}else if(random >=0.33 && random < 0.66){
    sec = "Food";
}else{
    sec = "Garments";
};

random = Math.random();

if (random < 0.33){
    third = "Bros";
}else if(random > 0.33 && random < 0.66){
    third = "Limited";
}else{
    third = "Hub";
};

console.log(`${first} ${sec} ${third}`)