// Generics intro 

type Person = {
    name: string;
    age: number;
}

const Boy : Person = {
    name: "Basant",
    age: 18
}

const fruits: Array<Person> = [{name: "hari", age: 43}]
// fruits.push("mango")
// fruits.push("apple")
// fruits.push("banana")
// console.log(fruits);


// Example 2
// function merge<T,U,S>(objA : T, objB: U, objC: S){
//     return {...objA, ...objB, ...objC}
// }

// const result = merge({name: "namraj"}, {role: "Software engineer"},{id: "d1"})
// console.log(result);


// Generics constraints
function createObject<T extends string, U extends number, V extends boolean>(
    key: T,
    value: U,
    isActive: V
): {key: T, value: U, isActive: V} {
    return {key, value, isActive}   
}

const obj = createObject("age",24,true)
// console.log(obj)


// 3. Generic Interface

interface Box<T> {
    value: T
}

const numberBox : Box<number> = {value: 54}
const stringBox : Box<string> = {value: "basu"}
// const stringBox2 : Box<object> = {value: {name: "bhatt"}}
// console.log(numberBox)
// console.log(stringBox)


// Generic Default

interface User<T = string>{
    data: T,
    status: number
}

type Person2 ={
    name: string;
    age:number
}

const response : User = {data: "Success", status: 200} // default to string

const jsonResponse : User<Person2> = {data: {name:"value",age:21}, status: 400}

// console.log(response)
// console.log(jsonResponse)


// Generics with class
class Container<T>{
    private content : T;
    constructor(content: T){
        this.content = content
    }

    getContent(): T{
        return this.content;
    }
}

const stringContainer = new Container<string>("Hello")
// console.log(stringContainer.getContent());

const numberContainer = new Container<number>(100);
// console.log(numberContainer.getContent())


// Generic with Array
function getFirst<T> (arr: T[]): T{
    return arr[0];
}

const firstNumber = getFirst([1,2,3])
const firstString = getFirst(["a","b","c"])
// console.log(firstNumber)
// console.log(firstString)


// Generic with keyof

// const Person = {key: "basant"}
// console.log(Person["key"])

// function getProperty(obj: object, key: string){
//     return obj[key]
// }

// const res1 = getProperty({}, "name")
// console.log(res1)

function getProperty<T extends object, K extends keyof T>(obj: T, key: K) : T[K]{
    return obj[key]
}

const person = {name: "basubhatt", age:22}
const name1 = getProperty(person, "name");
const age = getProperty(person, "age");
console.log(name1)
console.log(age)