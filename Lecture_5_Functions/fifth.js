/**
 * function functionName(){
 *          //
 * }
 * 
 * function functionName(param1,param2......){
 *          //
 * }
 */
// function print(){
//     console.log('Hello World!')
// }
// print();
/**
 * ARROW FUNCTIONS
 * const functionName = (param1,param2) =>{
 *          //
 * }
 */

// const sum = (a,b) => {
//     return a+b;
// }
// console.log(sum(52,2));

/**
 *Q1) Create the Arrow function that takes  a String as ana argument & returns the number of vowels in the string.
 * 
 */
// const vowels = (str) =>{
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i)==='a'||str.charAt(i)==='e'||str.charAt(i)==='i'||str.charAt(i)==='o'||str.charAt(i)==='u'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(vowels('javascript'));

//ForEach loop in arrays
// let arr = [1,2,3,4,5,6];

// arr.forEach(function printval(val){ //value at each index
//     console.log(val);
// })

/**Q2) For a given array of numbers, print the square of each number using the forEach loop*/

let arr = [1,2,3,4,5,6,7];

arr.forEach((num)=>{
    console.log(num*num);
})

//Map in arrays
arr.map((val)=>{
    console.log(val);
})
/**Difference between foreach and map is that for each is used when we generally want to perform normal calculation 
 * or want to print something but map is used when we want to use the vale and want to create a new array.
 */
//filter in arrays 
console.log("*********************");

let newArr = arr.filter((val)=>{
    return val%2==0
})

console.log(newArr);

//reduce in arrays
let marks = [10,20,30,40,50];
const sum = marks.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(sum);