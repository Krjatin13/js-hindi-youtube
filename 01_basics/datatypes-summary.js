// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 56110611536515065n 


// Reference (Non Primitive)

// Array, Objects, Functions


const heroes = ["shaktiman", "naahraj", "doga"]

let myObj = {
    name: "hitesh", 
    age: 22,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);


// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non - primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);









