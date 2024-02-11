//This is Asynchronous programming
// console.log("one");
// console.log("two");

// function hello() {
//     console.log("hello");
// }
// setTimeout(hello,2000)//timeout 2s = 2000ms

// console.log("three");
// console.log("four");
/** 
function getData(DataID,getNextData){
    setTimeout(()=>{
        console.log("Data ",DataID);
        if(getNextData){
            getNextData();
        }
    },2000)
}
//Callback Hell(Nested Callback) to overcome this situation Promises came./
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        })
    })
})
*/


///Promises

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     reject("error")
// })

//example for promise
// function getData(DataID,getNextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("Data ",DataID);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000)
//     })
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         })
//     })
// })



const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log("I am promise");
        //resolve("success");
        reject("Network error");
    })
}

//If Promise is fulfilled ==> promise.then((result)=>{......})
let promise = getPromise();
promise.then((result) => {
    console.log("promise fullfilled",result);
})

//If Promise is rejected ==> promise.catch((error)=>{.......})
promise.catch((error)=>{
    console.log("rejected",error);
})





