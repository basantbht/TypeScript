// Object, Array, Tuple, Enum

//! --------------Object
// const person: {
//   firstName: string;
//   age: number;
//   xyz: {
//     address: string
//   }
// } = {
//   firstName: "Basant",
//   age: 22,
//   xyz: {
//     address: "kanchanpur"
//   }
// };


// -----------------Array
// const person: {
//   firstName: string;
//   age: number;
//   skills: string[];
// } = {
//   firstName: "Basant",
//   age: 22,
//   skills: ["Reactjs", "Nodejs","5"]
// };

// let favouriteLanguage : string[];
// favouriteLanguage = ["english","nepali"]

// let favouriteLanguage1 : any[]; // loose ts power
// favouriteLanguage1 = ["english","nepali",21,true]

// console.log(person);


// //! -------------Tuple

// const person: {
//   name: string;
//   age: number;
//   skills: string[];
//   product: [number,string];
// } = {
//   name: "Basant",
//   age: 22,
//   skills: ["reactjs", "nodejs"],
//   product: [14,"bdasdf"]
// }

// person.product[0] =8;

// console.log(person);


//! ----------Enum

enum Role {ADMIN, AUTHOR, READ_USER_ONLY}

const person = {
  name: "basant",
  age: 22,
  skills: ["react","node"],
  product: [10,"macbook air"],
  role: Role.READ_USER_ONLY
}

if(person.role === Role.AUTHOR){
  console.log("Author")
} else if(person.role === Role.ADMIN){
  console.log("Admin")
} else if(person.role === Role.READ_USER_ONLY){
  console.log("Read Only User")
}