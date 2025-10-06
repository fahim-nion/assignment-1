console.log('Welcome to Coffee Daily Machine');
console.log('Order here please!');


//coffee machine 

async function randomDelay(){
    return new Promise((resolve,reject)=>{
        let timeout = 1+((10-1)*Math.random())
        setTimeout(() => {
            return resolve(2)
        }, timeout*1000);
    })
}


async function brewCoffee(c_Type) {
    await randomDelay();
    console.log(`${c_Type} is ready 🍵`)
}

//extra

async function brewAllCoffeesSequentially(coffeeList) {
    for (let coffee of coffeeList) {
        await brewCoffee(coffee);
    }
}

// brewCoffee("cappuccino")

brewAllCoffeesSequentially(["Espresso", "Latte", "Cappuccino", "Americano"]);