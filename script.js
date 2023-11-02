"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //this is the es5 way of setting default values.
  //   flightNum ||= 1;
  //   numPassenger ||= 1;
  //   price ||= 0.0;

  const booking = {
    flightNum,
    numPassenger,
    price: "$" + price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("CH123", 6);
createBooking("CH123", 7);
createBooking("CH123", undefined, 1000);

console.log(bookings);

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNumb, passenger) {
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log("Check in");
  } else {
    console.log("Wrong Passport!");
  }
};

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas.passport);

// PASSING BY VALUES AND PASSING BY VALUE.
//javascript does not pass by reference.

//function that turns numbers to negative

function makeNegative(number) {
  //   console.log(number.toString());
  const numStr = number.toString().includes("-");
  numStr || number === 0 ? console.log(number) : console.log(-1 * number);
}

makeNegative(-5);
makeNegative(0.12);
makeNegative(-1);
makeNegative(0);

const arr = ["f", "g", "r", "e"];
const mess = "Hello World";
let mer = "";

for (const x of mess) {
  //   console.log(x + x);
  mer += x + x;
}

console.log(mer);

const oneWord = function (word) {
  return word.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

//HIGHER ORDER FN - TAKES IN A FUNCTION.
const transformer = function (str, fn) {
  console.log(str);
  console.log(`transformed string: ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`);
};

transformer("ja is almighty", oneWord);

transformer("javascript is the best", upperFirstWord);

console.log(transformer.name);

// JS uses callbacks all the tiiiiime!
const high5 = function () {
  console.log("WAVE");
};

// ["jonas", "Mark", "Adam"].forEach(high5);

// document.body.addEventListener("click", high5);

// FUNCTION THAT RETURN OTHER FUNCTIONS.

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet("Wagwan")("Synthia");
// this is usefull for functional paradigm

// CALL AND APPLY METHODS

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNumber}`, name });
  },
};

lufthansa.book(239, "Mark Paul");
lufthansa.book(635, "Shug Smith");

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// some frist class functions happening here bro
const book = lufthansa.book;

book.call(euroWings, 23, "Sarah Williams");
console.log(euroWings);

book.call(lufthansa, 234, "Justus Nyabange");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 538, "Mary Cooper");

//Apply Method.
const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

// SOME EXERCISES.

// Exercise 1: Function Returning Function
// Create a function called greetMaker that takes a name as an argument and returns a function. The returned function should take another name as an argument and return a greeting string. For example, if you call greetMaker("Hello")("Alice"), it should return "Hello, Alice!"

const greetMaker = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};

greetMaker("Hello")("Mark");

// Exercise 2: Sum Using Call and Apply
// Create a function called sum that can take any number of arguments and return their sum. Use the call and apply methods to achieve this. For example, calling sum(1, 2, 3) should return 6.
// const list = [1, 2, 3, 4];

// const sum = (argumentse) => {
//   let totalSum = 0;
//   for (let i = 0; i < argumentse.length; i++) {
//     totalSum += argumentse[i];
//   }
//   console.log(totalSum);
// };

// sum.apply(list);

// Exercise 3: Calculator Object
// Create an object called calculator with properties and methods for basic arithmetic operations (add, subtract, multiply, divide). Each method should take two arguments and return the result of the operation. For example, calling calculator.add(5, 3) should return 8.

const calculator = {
  answers: [],
  add(a, b) {
    this.answers.push(a + b);
    return a + b;
  },
  subtract(a, b) {
    this.answers.push(a - b);
    return a - b;
  },
  multiply(a, b) {
    this.answers.push(a * b);
    return a * b;
  },
  divide(a, b) {
    this.answers.push(a / b);
    return a / b;
  },
};

const add = calculator.add;

const ans = {
  answers: [],
};

calculator.divide(5, 3);

calculator.add(4, 5);

console.log(calculator.answers);

add.call(ans, 3, 4);
console.log(ans);

// Exercise 4: Age Calculator
// Create a function called calculateAge that returns a function. The returned function should take a birth year as an argument and return the age. Use the call method to pass the current year as this. For example, if you call calculateAge(1990)(new Date().getFullYear()), it should return the age.

// Exercise 5: Function Composition
// Create a function called compose that takes two functions as arguments and returns a new function. The new function should execute the second function with the result of the first function. For example, calling compose(square, double)(3) should return 36 because it first doubles 3 to get 6 and then squares 6 to get 36.

// Exercise 1: Function Returning Function
// Create a function called greetMaker that takes a name as an argument and returns a function. The returned function should take another name as an argument and return a greeting string. For example, if you call greetMaker("Hello")("Alice"), it should return "Hello, Alice!"
