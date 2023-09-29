// Primitive datatypes

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const value = 100
const scoreValue =100.9

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);

console.log(id ===anotherId);

const bigNumber = 123213123313123123131231n



// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Arijit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);