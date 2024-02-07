// Operators 
/**
 * ARITHMETIC OPERATOR
 * +, -, *, /, %, **(exponentiation), ++, --
 * 
 * ASSIGNMENT OPERATOR
 * =, +=, -=, *=, %=, **=
 * 
 * COMPARSON OPERATOR   
 * equal to --> ==
 * equal to and Type --> ===
 * not equal to --> !=
 * not equl to and Type --> !==
 * >, >=, <, <=
 * 
 * LOGICAL OPERATOR
 * &&, ||, !
**/

//Conditional Statements
/**
 * 1--> multiple if statements
 * 2--> if-else statement
 * 3--> if-(else-if)-else statement
 */
// let a =5;
// let b = "5" // string -> number
// console.log(a==b);
// console.log(a===b);

//Q1) Get user  to input  a number  using prompt("Enter a Number: "). Check whether the number is a multiple of 5 or not

// let input = prompt("Enter a number");
// if(input%5 === 0){
//     console.log("multile of 5");
// }
// else{
//     console.log("not a multiple of 5");
// }

//Q2) Write a code which can give  grades  to students  according to their scores
let score = prompt("Enter the score");
let grade;
if(score>=80 && score<=100){
    grade = "A";
}
else if(score>=70 && score<=89){
    grade = "B";
}
else if(score>=60 && score<=69){
    grade = "C";
}
else if(score>=50 && score<=59){
    grade = "D";
}
else{
    grade= "F";
}
console.log(grade);