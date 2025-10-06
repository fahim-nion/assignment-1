async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);
    return 455
    
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
