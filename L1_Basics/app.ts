// number, string, boolean

function add(num1: number ,num2: number, printResult: boolean,someText: string){
    // if(typeof num1 === "number" && typeof num2 === "number"){

    //     return num1 + num2;
    // }else{
    //     return +num1 + num2;
    // }
    if(printResult){
        console.log(`${someText} ${num1+num2}`);
    }else{
        return n1 + n2;
    }
}

const n1=220; //number
const n2=30; //number

const printResult = true;
const someText = "sum of two numbers is ="

 add(n1,n2,printResult,someText);
