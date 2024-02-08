// console.dir(document.body)
// console.log(document.body)

/** DOM MANIPULATION 
 * 1.) Selecting by ID
 * document.getElementById("myID")
 * 2.) Selecting with class
 * document.getElementsByClassName("myClass")
 * 3.) Selecting by tag
 * document.getElementsByTagName("p")
 * 
 * instead of using the above method to retrieve html tags try the queryselector method
 *1.)document.querySelector("myid/myclass/tag") // return the first element
 *2.)document.querySelectorAll("myid/myclass/tag") // return all element
*/
// Q.1) Create a H2 heading element with text - "Hello Javascript". Append "from apna college students" to this text using js
let heading = document.querySelector("h2");
heading.innerText = heading.innerText +" from apna college students"

// Q.2) Create 3 divs with common class name - "box". Access them & add some uniques text to each of them. 

let divAll = document.querySelectorAll(".box");
divAll[0].innerText = "hello";
divAll[1].innerText = "Ayush";
divAll[2].innerText = "Verma";