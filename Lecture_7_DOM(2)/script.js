/**DOM MANIPULATION
 * 1.)Attributes
 * getAttribute(attr)
 * setAttribute(attr,value)
 * 2.)style
 * node.style.
 * 3.)Insert element
 * create element
 * add element
 * node.append(el)
 * node.prepend(el)
 * node.before(el)
 * node.after(el)
 * */
//Q.1) Create a new button element. Give it a text "Click Me", background color of red & text color of white.
//          Insert the button as the first element inside the body tag.

let el = document.createElement("button");
el.innerText = "Click Me";
el.style.backgroundColor = "red";
el.style.color = "white"

let bodyTag = document.querySelector("body");
bodyTag.prepend(el);

//Q.2) Create a <p> tag  in html, give it a class & some styling.
//Now Create a new class in css and try  to append  this class  to the <p> element.
//solve this problem using the classlist
let para = document.querySelector("p");
console.log(para.getAttribute("class"));//content
para.classList.add("newClass");// this will override the newClass properties as well as content class properties