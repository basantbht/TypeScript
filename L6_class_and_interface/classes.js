//! Basic class
// class Department {
//     name: string
//     constructor(n: string){
//         this.name = n;
//     }
//     describe(this:Department){
//         console.log("Department", this.name)
//     }
// }
// const accounting = new Department("Accounting");
// accounting.describe()
// const accountingCopy = {
//     name: "Accoounting2",
//     describe: accounting.describe
// }
// accountingCopy.describe()
//! private, public access modifiers
// class Department {
//     // public name: string
//     // private employees: string[]
//     constructor(public name: string, private employees: string[]){ // short hand
//         // this.name = n;
//         // this.employees = []
//     }
//     describe(this:Department){
//         console.log("Department", this.name)
//     }
//     addEmployee(emp: string){
//         this.employees.push(emp);
//     }   
//     printEmployeeInformation(){
//         console.log("Number of emp: ", this.employees.length)
//         console.log(this.employees)
//     }
// }
// const accounting = new Department("Accounting", []);
// accounting.describe()
// accounting.addEmployee("basu");
// accounting.addEmployee("nammu");
// accounting.printEmployeeInformation()
// accounting.employees = ["xyz"]
// accounting.printEmployeeInformation()
//! readonly
// class Department {
//     public name: string
//     private employees: string[]
//     private readonly id: string
//     constructor(n: string){
//         this.name = n;
//         this.id = "d1" // only once you can initialize
//         this.employees = [];
//     }
//     describe(this:Department){
//         console.log("Department", this.name)
//     }
//     addEmployee(emp: string){
//         this.employees.push(emp);
//     }   
//     printEmployeeInformation(){
//         console.log("Number of emp: ", this.employees.length)
//         console.log(this.employees)
//     }
// }
//! Inheritance
//! Override properties and protected access modifier
//! setter and getter method
class Department {
    name;
    employees;
    id;
    constructor(id, n) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id} ${this.name}`);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log("Number of emp: ", this.employees.length);
        console.log(this.employees);
    }
}
class AccoountingDepartment extends Department {
    reports;
    // reports: string[] = []
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(emp) {
        if (emp === "Basant") {
            return;
        }
        this.employees.push(emp);
    }
    get getReports() {
        if (this.reports.length > 0) {
            return this.reports;
        }
        throw new Error("Report not found.");
    }
    set setReports(value) {
        if (!value) {
            throw new Error("Please pass valid value.");
        }
        this.reports.push(value);
    }
}
const accDept = new AccoountingDepartment("d1", []);
accDept.addReports("bugs");
// accDept.printReports();
// accDept.describe()
accDept.addEmployee("Basant");
accDept.addEmployee("namraj");
// accDept.printEmployeeInformation()
// setter and getter
console.log("getter", accDept.getReports);
accDept.setReports = "Code review error";
console.log("getter", accDept.getReports);
//! static method
class Department2 {
    name;
    employees;
    id;
    constructor(id, n) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id} ${this.name}`);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log("Number of emp: ", this.employees.length);
        console.log(this.employees);
    }
    static getSalary() {
        return { salary: 500000 };
    }
}
const salary = Department2.getSalary(); // without creating object , we can access by it class name
console.log(salary);
//! abstract class
class Department3 {
    name;
    employees = [];
    id;
    constructor(id, n) {
        this.id = id;
        this.name = n;
    }
}
class Subclass extends Department3 {
    reports;
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    describe() {
        console.log("Department", this.id);
    }
    displayName() {
        console.log(this.name);
    }
}
const subclass = new Subclass("D1", []);
subclass.describe();
export {};
