// const student = {
//     fullName: "Ayush",
//     marks: 90,
//     printMarks: function() {
//         console.log("marks: ",this.marks);
//     },
// };

/**
 * JS Objects have a special property called Prototype
 * we can set proprty using __proto__
 */
// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// }

// const karan = {
//     salary : 100000,
// }
// karan.__proto__ = employee;

// class ToyotaCar{

//     constructor(){
//         console.log("initializes the object");
//     }

//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// }

// let fortuner = new  ToyotaCar;
// fortuner.start();
// fortuner.stop();
// fortuner.setBrand("Toyota");


/**
 * Q1) you are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called ViewData() that allows the user to view website data.
 * 
 * Q2) Create a new class called Admin which inherits from User. Add a new method called editData to Admin  that allows it to edit website data.
 */

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`user name: ${this.name}\nuser email: ${this.email}`);
    }
}
class Admin extends User{
    editData(newName, newEmail){
        this.name = newName;
        this.email = newEmail;
        console.log(`User data edited by admin: ${this.name}, ${this.email}`);
    }
}
// let obj1 = new User("Ayush","vermfgweifgiu@gmail.com")
// obj1.viewData();

// let obj2= new User("yash","yashfgweifgiu@gmail.com")
// obj2.viewData();

// let obj3 = new User("arun","arunfgweifgiu@gmail.com")
// obj3.viewData();

let adminObj = new Admin("Admin", "admin@gmail.com");
adminObj.viewData(); // View admin data before edit
adminObj.editData("NewAdmin", "newadmin@gmail.com"); // Edit admin data




