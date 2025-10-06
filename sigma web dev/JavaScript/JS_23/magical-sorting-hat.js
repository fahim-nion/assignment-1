// the magical sorting hat  😃✔️
let names = ['fahim','morshed','al-hassan','nion','abdul-kaarim','lionel','courtois','kvaratschkaich'];
let houses =[]
for (const i of names) {
    if (i.length < 6){
        houses.push("Gryffindor");
    }else if (i.length < 8 && i.length > 6){
        houses.push("HUfflepuff")
    }else if (i.length < 12 && i.length > 8){
        houses.push("Ravenclaw")
    }else if (i.length >= 12){
        houses.push("Slytherine")
    }
}
console.log(houses);

