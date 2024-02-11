// class Parent{
//     print(){
//         console.log("this is parent class")
//     }
// }

class Person{
    constructor(){
        console.log("enter parent constructor");
        this.species = "HomoSapines";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    //Method overriding
    work(){
        console.log("Do Nothing");
    }
}