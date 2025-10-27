// Generics intro 
var Boy = {
    name: "Basant",
    age: 18
};
var fruits = [{ name: "hari", age: 43 }];
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
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("age", 24, true);
var numberBox = { value: 54 };
var stringBox = { value: "basu" };
var response = { data: "Success", status: 200 }; // default to string
var jsonResponse = { data: { name: "value", age: 21 }, status: 400 };
// console.log(response)
// console.log(jsonResponse)
// Generics with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
// console.log(stringContainer.getContent());
var numberContainer = new Container(100);
// console.log(numberContainer.getContent())
// Generic with Array
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3]);
var firstString = getFirst(["a", "b", "c"]);
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
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "basubhatt", age: 22 };
var name1 = getProperty(person, "name");
var age = getProperty(person, "age");
console.log(name1);
console.log(age);
