//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["tokyo", "Halsinki", "Karachi"];
let myObj = {
    name: "Hammad",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// Stack & Heap:
// Stack uses the primitive datatypes,while heap uses a Non-primitive datatypes. 
// stack gives the copy of object, while heap give the refrence of object. 

// https://262.ecma-international.org/5.1/#sec-11.4.3