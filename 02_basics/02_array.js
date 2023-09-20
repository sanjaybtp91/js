const marvel_heros = ["rajveer", "arvind", "vijay"]
const dc_heros = ["gaurav", "sanjay", "rahul"]

// marvel_heros.push(dc_heros)          // merge nhi hote array ke ander array ajta hai 
                                        // array ko hi as a data le leta hai
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);     // 3 element hi ek array hai usme se 1st value

// const allHeros = marvel_heros.concat(dc_heros)  // dono array ko merge karta hai
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spead kar dega dono array ko concate se behtar hai

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // array ke ander array ko real array mein spread out 
console.log(real_another_array);        
 


console.log(Array.isArray("sanjay"));            // ye to aaray nhi hai
console.log(Array.from("sanjay"));              // array bana dega s,a,n,j,a,y
console.log(Array.from({name: "sanjay"}));   // interesting empty array dega peh pehel bstana padta hai kiska array banana hai key ka ya value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));