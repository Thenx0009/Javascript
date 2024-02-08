/**
 * Q1) For a given array with marks of students [85,97,44,37,76,60]
 * Find the average marks of entire class.
 */
let students = [85,97,44,37,76,60];
let sum =0;
for (const i of students) {
    sum += i;
}
let average = sum/students.length;
console.log(`average marks of the class = ${average}`);

/**
 * Q2) For a given array with prices of items ->[250,645,300,900,50]
 * All items have an offer of 10% OFF on them. Change the array to store final price  after applying the offer.
 */
let prices = [250,645,300,900,50];
for(let i=0;i<prices.length;i++){
    discounted_price = prices[i]-(prices[i]*0.1);
    prices[i] = discounted_price;
}
for (const j of prices) {
    console.log(`value after offer ${j}`);
}

/**Array Methods
 * push()
 * pop()
 * toString()
 * concat()
 * unshift()
 * shift()
 * slice() --> return the piece of array
 * splice() --> change the original array(startidx,delCount,newEl1....)
 */

/** Q3) Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
 * a. Remove the first comapny from the array
 * b. Remove Uber & Add Ola in its place
 * c. Add Amazon at the end
 */
let comapanies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
comapanies.shift();
console.log(`Remove the first comapny from the array: ${comapanies}`)
comapanies.splice(1,1,"Ola");
console.log(`Remove Uber & Add Ola in its place: ${comapanies}`);
comapanies.push("Amazon");
console.log(`Add Amazon at the end: ${comapanies}`);