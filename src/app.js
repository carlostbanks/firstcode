// allows us to update the DOM virtually


// create a variable 3 different ways
// 1. using "let" <-- allows the variable to change
// 2. using "const" <-- short for "CONSTANT"
// 3. using "var" <---- WE DO NOT USE ANYMORE

let bill = "24"

const tax = 10

let total = bill + tax

// different types of values
// 1. integer <-- any number
// 2. string <-- anything inside of a quote "string"
// 3. object <-- anything between 2 {} that has a property and a value
// 4. array <-- antyhing between 2 [] that has multiple objects or strings or integers or more array

const person1 = {
    firstname: "Carlos",
    lastname: "Banks"
}

const person2 = {
    firstname: "Josh",
    lastname: "Murray"
}

const people = [person1, person2, "Nicholas", 34, {firstname: "Blu"}]

// ------

console.log("Hi from the javascript file")

/////////

let locationh2 = document.getElementById("location")
locationh2.innerHTML = "I live in Miami now."

console.log(locationh2)

//////////

// CREATE A FUNCTION
// is a piece of code, that can run over and over and over again when called upon
// EVERY function has a parenthesis ()

// this is an ANONYMOUS function --- the parenthis is empty ()
function hello() {
    console.log("This is the hello function")
}

// we are the calling the function here
hello();

//////////

// function with a PARAMETER
function saywhat(word) {
    console.log("The word you typed is: ", word)
}

saywhat(6585778);
saywhat("Hello Carlos");
saywhat({name: "Carlos", age: 30});

////////////

let count = 0;

function counter() {
    count = count + 1
    console.log("The button was clicked: ", count)
    let number = document.getElementById("count")
    number.innerHTML = count
}

// console.log("This count is: ", count)
// counter();
// counter();
// counter();
// counter();
// counter();
// console.log("This is the count again: ", count)

////// In JavaScript there are EVENTS that we can listen to
///// what are some events? Click, a scroll, a hover, a type a key, etc

//// FIRST STEP: identify what you want to target
// let button = document.getElementById("button")
// console.log(button)

//// STEP 2: Add a function to the "OnClick" event
// button.onclick = counter;
// console.log(count)

/////


