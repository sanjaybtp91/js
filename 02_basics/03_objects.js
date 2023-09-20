// singleton                           // apni tarah ka ek hi boject hai constructor se hamesha banta hai
// Object.create

// object literals

const mySym = Symbol("key1")                // symbol declare karna


const JsUser = {
    name: "Hitesh",                         // name ko string ki tarah treat karta hai lekin value koi bhi de skate hai
    "full name": "Hitesh Choudhary",        // "fullname" ko dot . se access nhi kar skate
    [mySym]: "mykey1",                      // symbolkey ko [ ] se declare karte hai
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)                //object ko access karna
// console.log(JsUser["email"])             // dot mein lene par string ki tarah lene ki jaruat nhi hai
// console.log(JsUser["full name"])         // "fullname" ko [ ] se hi access hoga
// console.log(JsUser[mySym])               // symbol ko [] se hi access karte hai
// console.log(typeof jsUser.mySym)         agar symbol ko [ ] mein declare n kiya ho to string dega

JsUser.email = "sanjay@chatgpt.com"         // email change karne ke liye
// Object.freeze(JsUser)                    // value ko lock karna object freez ho jaeyga
JsUser.email = "sanjay@microsoft.com"
// console.log(JsUser);                        //sanjay@chatgpt.com hi dega

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   // objecgt  mein jo name hai usko lena hai
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());