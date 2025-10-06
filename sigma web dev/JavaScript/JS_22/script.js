console.log('Advance Javascript');
async function sleep() {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 2000);
    })    
}

function sum(a,b,c){
    return a + b + c
}

(async function main(){
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // let [x,y,...rest] = [2,3,4,5,6,3,56,3,45,6,4];
    // console.log(x,y,rest);

    // let obj  = {
    //     a : 1,
    //     b : 2,
    //     c : 3
    // }

    // let {a,b} = obj

    // console.log(a,b)
    

    let arr = [1,5,4]
    console.log(arr[0]+arr[1]+arr[2])
    console.log(sum(...arr));
})()