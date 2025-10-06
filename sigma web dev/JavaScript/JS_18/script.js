async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 2000);
    })
}

async function main() {
    
    console.log('Loading Modules');
    console.log('Do something else');
    console.log('Load Data');
    
    let data = await getData()
    
    console.log(data);
    console.log('process data');
    console.log('task 2');
}


main();


//if this throws an error then?

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Failed to fetch data"); // Reject instead of resolve
        }, 2000);
    });
}

async function main() {
    console.log('Loading Modules');
    console.log('Do something else');
    console.log('Load Data');

    try {
        let data = await getData(); // This might throw an error
        console.log(data);
    } catch (error) {
        console.error('Error caught:', error); // This will catch the rejection
    }

    console.log('process data');
    console.log('task 2');
}

main();



