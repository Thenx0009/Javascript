/**
 * 1.) Inline event handling
 * 2.) Event handling in js
 * -->node.event = () => {
 *             // 
 * }
 * 3.) Event listeners
 * --> node.addEventListener(event,callback)
 * --> node.removeEventListener(event,callback)
 */
// let btn1 = document.querySelector("#btn1")
// btn1.onclick = () =>{
//     console.log("button is pressed");
// }


//Q.1) Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let modebtn = document.querySelector("#btn1"); 
let body = document.querySelector("body");
let currMode = "light";

modebtn.addEventListener("click",() =>{
    if(currMode==="light"){
        currMode = "dark";
        body.style.backgroundColor = "#15292B";
    }
    else{
        currMode ="light";
        body.style.backgroundColor = "white";
    }
})