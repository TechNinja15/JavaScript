"use strict"; // treat all JS code as newer version

// alert(3+3) // we are using node js, not browser

// console.log(3+3); 
// console.log("AKJ");


let name = "AKJ";   // string dataType ("")
let age= 18;        // number
let isLogggedIn = false  //boolean true/false

// console.log(typeof undefined);


//Primitive

// There are 7 Types of primitive data types are
/*
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. bigInt 
*/


const score = 100
const scoreValue = 100.3
const isLoggeIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol("123")

// console.log(id === anotherId);
const bigNumber= 2233549594376574374583746583


//Reference(Non-Primitive)

/*
1. Array
2. Objects
3. Functions
*/


const heros = ["shaktiman", "IronMan", "Thor"]
let myObj = {
    name:"AKJ",
    age : 22,
}



const myFunction= function sum() {
    console.log("Hello World!");
    
}

console.log(typeof anotherId)
