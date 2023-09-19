// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["vikas", "vijay"]

const myArr2 = new Array(1, 2, 3, 4)    // array ko new keyword se define karnwe par ( ) use karte hai
// console.log(myArr[1]);

// Array methods
 
// myArr.push(6)        // value add karna ab array mein 0 1 2 3 4 5 6
// myArr.push(7)        // value add hogi 7 .............0 1 2 3 4 5 6 7
// myArr.pop()          // last value kp remove karta hai

// myArr.unshift(9)     // array ki starting mein value add ho jayegi 
// myArr.shift()        // yahan koi parameter dene ki jarurat nhi hai starting mein add huyi value ko remove kar dega

// console.log(myArr.includes(9)); // true false mein reply karta hai boolena type
// console.log(myArr.indexOf(3));  // index puchne par  index batata agar nhi hai to -1 dega

// const newArr = myArr.join()      //.join array ke element ko string bna deta hai join karke 0,1,2,3,4,5,6
// console.log = (typeof newArr);    // string 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);           //

const myn1 = myArr.slice(1, 3)      // 1st include karega 2 ko kaerga 3rd include nahi hoga

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)     // splice se keval required value hi bachti hai baki aaray chage ho jata hai 
console.log("C ", myArr);           // 3rd ko bhi count kar array ko manupulate kar deta hai
console.log(myn2);