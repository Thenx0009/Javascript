/** async function hello(){
    console.log("hello")
}
hello();

function api() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
          console.log("weather data");
          resolve(200);
        },2000)
    })
}

async function getWeatherData(){
    await api(); //1st call
    await api(); //2nd call (first the 1st call will complete then the 2nd call will complete)
}
*/



function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data ",dataID);
            resolve("success");
        },2000);
    });
}
//Async -await
// async function printData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);   
//     await getData(4);
//     await getData(5);   
// }

//IIFE: Immediately Invoked Function Expression
(async function(){
    await getData(1);
    await getData(2);
    await getData(3);   
    await getData(4);
    await getData(5);   
})();


