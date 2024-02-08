//LOOPs
/**
 * 1--> for Loop
 * 2--> while Loop
 * 
 * 3--> do{
 *         
 *      }while(condition);
 * 
 * 4--> for-of loop ; It helps to apply loop on STRINGS and ARRAYS
 * 5--> for-in loop ; It helps to apply loop on OBJECTS
 */


//do-while example
// let i = 1;
// do{
//     console.log(5*i);
//     i++;
// }while(i<=10);

//for-of example
// let str = "javascript"
// for (const i of str) {
//     console.log(i)
// }
// let arr = ["apple","mango","banana","guava","grapes"];
// for (const i of arr) {
//     console.log(i)
// }

//for-in loop example
// const profile = {
//     username : "thenx09",
//     followers : 525,
//     following : 5,
//     isFollow : false,
//     posts : 10,
//     Bio : "giufgruifgruifgr"
// }
// for (const key in profile) {
//     console.log(key+ ":" +profile[key]);
// }

//STRINGS

//Template Literal and String interpolation
// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString);

/**
 * String methods
 * str.toUpperCase()
 * str.toLowerCase()
 * str.trim()
 * str.slice(startidx,endidx)
 * str1.concat(str2)
 * str.replace(searchval,newval)
 * str.charAt(idx)
**/

/**Q1) Prompt the user to enter their full name.Generate a username for them based on the input. 
 * Start username with @, followed by their full name and ending with the fuullname length.
 * user name = "ayushverma", username should be "@ayushverma10" **/

let user_name = prompt("Enter your user name");
console.log(`@${user_name}${user_name.length}`)