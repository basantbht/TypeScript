// union
// literal types
// type alias/custom types
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine("10", "20", "as-number");
var sum2 = combine(10, 50, "as-number");
var combineName = combine("bhatt", "mernstack", "as-string"); // bhatt mernstack
console.log(sum1, sum2, combineName);
var user = {
    name: "basant",
    age: 22,
    skills: ["reactjs", "nodejs"]
};
function greet(user) {
    console.log("Hi, I am ".concat(user.name));
}
greet(user);
