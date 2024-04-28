"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

//*PRIMITIVE DATA TYPES are of 7 types
// number => 2 to the power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value mean no value can be assigned
// undefined => means variable is declared, but no value is assigned. 
// symbol => to find uniqueness

const id = Symbol('213')
const anotherID = Symbol('213')

console.log(id === anotherID);

//* Reference type (Non primitive)
//Arrays, Objects, Functions

//! Arrays
const Rajya = ["Maharashtra", "Gujarat", "Delhi"];

//! Objects
let myObject = {
    name: Gopal,
    age: 21,
    isLoggedIn: true,
}

//! Functions

const thisFunction = function()
{
    console.log("meep!");
}

console.log(typeof undefined); // undefined
console.log(typeof null); // object