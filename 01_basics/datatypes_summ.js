//Primitive Type
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const number = 100;
const string = "100";
const boolean = true;
const value = null; // typeof gives value Object
let valueUn ; //will give undefined value

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log (Id == anotherId)
console.log (typeof(Id))
console.log (typeof(anotherId))

const bigNumber = 1121213112322254545545n // typeof gives value undefined
console.log (typeof(bigNumber))

//Refernce(Non primitive)

// Array, Objects, Functions

// JavaScript is a dynamically typed language, meaning that the data types of variables are determined at runtime and can change throughout the program. 
//In contrast, statically typed languages, like TypeScript, require the data type of a variable to be explicitly declared. 

const heros = ["shaktiman", "naagraj", "doga"]// array
let empDetails = {
    name: "Mayur", //Inside curlly bracket are objects
    age: 35

}

const myFunctions = function(){
    console.log("Hello World!!")
    console.log (typeof myFunctions)
}
console.log(myFunctions)

// ++++++++++++++++++++++++++++  Stack VS Heap  +++++++++++++++++++++++++++++++++++++

// stack memory (Primitive) - get copy of original value, below the example


let OriginalyoutubeChannel = "my1stChannel"
let CopyyoutubeChannel = OriginalyoutubeChannel
CopyyoutubeChannel ="my2ndChannel"

console.log(OriginalyoutubeChannel) //result my1stChannel
console.log(CopyyoutubeChannel) //result my2ndChannel

// Heap memory (Non-Primitive) - reference of Original value wgich means change affect Original value

let cusDeatils = {
  name : "Mayur",
  email : "m.india@gm.com",
  city : "Noida"
}
let cusDeatils1=cusDeatils
cusDeatils1.city = "Gwl"
console.log(cusDeatils) // { name: 'Mayur', email: 'm.india@gm.com', city: 'Gwl' }
console.log(cusDeatils1) // { name: 'Mayur', email: 'm.india@gm.com', city: 'Gwl' }