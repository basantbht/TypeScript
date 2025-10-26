//! Interface

// interface Person {
//     name: string;
//     age: number;
//     greet(text:string): void
// }

// let user : Person;

// user = {
//     name: "Basant",
//     age:32,
//     greet(text): void{
//         console.log(`${text} ${this.name}`)
//     },
// }

// console.log(user)
// user.greet("Hi there, I am")


// interface Greetable {
//     name: string;
//     greet(text: string): void;
// }

// class Person implements Greetable {
//     name: string;
//     constructor(n: string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text}, ${this.name}`)
//     }
// }

// const p1 = new Person("Basant");
// p1.greet("Hi there I am ")


//! readonly
// interface Greetable {
//     readonly name: string;
//     greet(text: string): void;
// }

// class Person implements Greetable {
//     name: string;
//     constructor(n: string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text}, ${this.name}`)
//     }
// }

// let user1 : Greetable
// user1 = new Person("Namraj");
// user1.name = "namraj pant" ; error

//! Extending Interface
// interface Named {
//     readonly name: string;
// }

// interface Greetable extends Named {
//     greet(text: string): void;
// }

// class Person implements Greetable{
//     name: string;
//     constructor(n: string){
//         this.name =n
//     }
//     greet(text: string): void {
//         console.log(`${text}, ${this.name}`)
//     }
// }

// let user1 : Greetable;
// user1 = new Person("Basant");
// console.log(user1)



// type addFun = (a: number, b: number) => number;

interface addFun {
    (a: number, b: number): number;
}

let add : addFun;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

console.log(add(5,6));


// optional (?)

interface Named{
    readonly name: string;
    outputName?: string
}

class Person implements Named{
    name:string
    constructor(n: string){
        this.name = n
    }
}