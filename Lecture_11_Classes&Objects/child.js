// class Child extends Parent{
//     // print(){
//     //     console.log("this is child class");
//     // }
// }

// let obj = new Child();
// obj.print();


class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super(); //to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor")
    }
    work(){
        super.eat();
        console.log("solve problems");
    }
}


let ayushObj = new Engineer("computer engineer");
// ayushObj.work();
// ayushObj.eat();
// ayushObj.sleep();