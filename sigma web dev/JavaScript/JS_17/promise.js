console.log('this is promises');

// let prom1 = new Promise(resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Yes i am Done');
//         resolve("harry")
//     }, 3000);
// }


// prom1.then((a)=>{
//     console.log('a');
// })

//chatgpt

function waitforFriend(){
    return new Promise((resolve, reject)=>{
        let isFriendComing = false;
        
        setTimeout(() => {
            if (isFriendComing){
                resolve("Your Friend Arrived");
            }else{
                reject("Your friend canceled")
            }
        }, 3000);
    });
}


waitforFriend()
    .then((msg)=>{
        console.log(msg);
        
    })
    .catch((err)=>{
        console.log(err);   
    })


// waitforFriend()
//     .then((msg)=>{
//         console.log(msg)
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     })