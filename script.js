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

const calculateAge = function (year) {
  return;
};

// Exercise 5: Function Composition
// Create a function called compose that takes two functions as arguments and returns a new function. The new function should execute the second function with the result of the first function. For example, calling compose(square, double)(3) should return 36 because it first doubles 3 to get 6 and then squares 6 to get 36.

console.log("---------BIND METHOD------");

//BIND METHOD. allows to manually set the this keyword to whatever method its bound.

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");
const bookEW23 = book.bind(euroWings, 23);
bookEW23("Jonas Schmidtmann");
bookEW23("Martin Cooper");
bookEW23("Joe Don");

// Partial application - a part of the argument of the original functions already set.

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// BUY PLANE FUNCTION.

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

lufthansa.buyPlane();

// Partial application.

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

//VAT we use all the time in Portugal - 23%

// const addVAT = addTax.bind(null, 0.23);

// // addVAT = value=> value * 0.23

// console.log(addVAT(200));
// console.log(addVAT(100));

const addVAT = (rate) => (value) => console.log(value + value * rate);

const getVAT = addVAT(0.23);

// addVAT;

getVAT(100);
getVAT(23);

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1: Python", "2. Rust", "3.C++"],
  // This geerates [0,0,0,0]. More in the next section.
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let str = this.options.join("\n");

    let input = Number(
      prompt(`${this.question} \n ${str} \n (Write your option number)`)
    );
    typeof input === "number" &&
      input < this.answers.length &&
      this.answers[input]++;

    let ans = this.answers.join(", ");
    this.displayResults(ans);
  },
  displayResults(type) {
    typeof type === "object"
      ? console.log(type)
      : console.log(`Poll results are ${type}`);
  },
};

// poll.registerNewAnswer();
// console.log(poll);

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

const ark = "new Array(12, 3, 4, 5, 3)";

console.log(typeof poll.answers);

const testData1 = [5, 2, 3];

//IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS

const runOnce = function () {
  console.log("This will never run again");
};

{
  var age = 23;
  const isSexy = true;
}

// console.log(isSexy);
console.log(age);

//CLOSURES

// Testing how arrow functions don't get argument object or the "this" keyword.

console.log("-----Global Execution Context refresher ------");

// function regularFunction() {
//   console.log(arguments);
//   console.log(this);
// }

// const arrowFunction = () => {
//   console.log(arguments);
//   console.log(this);
// };

// regularFunction(1, 2, 3, 4);
// arrowFunction(1, 2, 3, 4);

console.log("----CLOSURES----");

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();

console.dir(booker);

let f;

const g = function () {
  const a = 20;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// f reassigned can cause closure
h();
f();
console.dir(f);

//Example 2.
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// const perGroup = 400;
boardPassengers(99, 3);

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.body.addEventListener("click", () => {
    header.style.color = "blue";
  });
})();

// function that outerVAR();

function outer() {
  let outerVar = 23;
  return function inner() {
    console.log(`number is: ${outerVar}`);
  };
}

const outerFun = outer();
outerFun();

function counter() {
  let count = 1;

  return function () {
    console.log(`${count++} Sheep`);
  };
}

let sheepCounter = counter();

// FUNCTION THAT RETRIVES NAMES.

const createPerson = function (name) {
  let privateName = name;
  return {
    getName: function () {
      return privateName;
    },
    setName: function (newName) {
      privateName = newName;
      return privateName;
    },
  };
};

const nameCreator = createPerson("Alice");
console.log(nameCreator.getName());
console.log(nameCreator.setName("Bob"));
console.log(nameCreator.setName("Smiggy"));
