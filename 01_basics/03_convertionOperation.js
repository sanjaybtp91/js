/* let score = 33  //let score ="33" =>string

//let age ="22sanju"



console.log(typeof score);
console.log(typeof (score));
//console.log(typeof age);


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//let valueInNumbers = Number(age)   
//console.log(valueInNumbers);

let someNumber = 33
let stingNumber = String(someNumber)
console.log(stingNumber);  // 33 
console.log(typeof stingNumber); // after convertion string

let isloggedIn = 1
let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn); // 1=> true , 0=> false

*/



// ************** Operations ***********

//let  value = 3
// let negValue = -value
// console.log(negValue);
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/3);
//console.log(2%3);

let str1 = "hello"
let str2 = " sanjay"
let str3 = str1+str2 ;
console.log(str3);



//console.log("1" + 2);    =>12
//console.log(1 + "2");    =>12
//console.log("1" + 2 + 2);  =>122
console.log(1 + 2 + "2");    //=>32

console.log(+true);   // 1  but true+ possible nahi hai


let num1,  num2, num3
num1 = num2 = num3 = 2+2
console.log(num1); // =>4

let gameCounter = 100
gameCounter++; // =>101 // ++gameCounter =>101 same hi aayega
console.log(gameCounter);


