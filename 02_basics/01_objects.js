// singleton

// object literals

const mySym = Symbol("key1")
const jsUser = {
    name : "Arijit",
    "full name":"Arijit Debnath",
    age: 20,
    [mySym] : "mykey1",
    location:"WestBengal",
    email:"arijit@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Tuesday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser.email = "arijit@riot.com"

// Object.freeze(jsUser)
jsUser.email = "arijit@microsoft.com"
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greeting2 = function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
