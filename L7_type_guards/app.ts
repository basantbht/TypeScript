//! Type Guards

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable){
    // add type guards
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString();
    }
    return a + b;
}

// console.log(add(20,30));
// console.log(add("20",30));


// 2.

type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date
}

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

const emp1: ElevatedEmployee = {
    name: "basant",
    privileges: ["create-server"],
    startDate: new Date()
}

function printEmployeeInformation(emp: UnknownEmployee){
    console.log("Name: ", emp.name)
    // console.log("Privileges: ", emp.privileges)

    // start adding type guards
    // if(typeof emp === "object"){ // wrong code
    //     console.log(emp.privileges)
    // }

    // use in keyword that build in js
    if('privileges' in emp){
        console.log(emp.privileges)
    }

    if('startDate' in emp){
        console.log(emp.startDate)
    }
}

// printEmployeeInformation(emp1)
// printEmployeeInformation({name: "Hari", startDate: new Date()})



// 3. type guards in class

class Car {
    drive(){
        console.log("Driving a car...")
    }
}

class Truck {
    drive(){
        console.log("Driving a truck...")
    }
    loadCargo(amount: number){
        console.log("Loading cargo...", amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    // vehicle.loadCargo(500);

    if('loadCargo' in vehicle){
        vehicle.loadCargo(500);
    }

    // if(vehicle instanceof Truck){
    //     vehicle.loadCargo(500)
    // }
}

// useVehicle(v1)
useVehicle(v2)



// type casting / type assertion

// const userInput = <HTMLInputElement>document.getElementById("user-input")!;

const userInput = document.getElementById("user-input") as HTMLInputElement;
userInput.value = "hi there"