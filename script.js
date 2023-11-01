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

["jonas", "Mark", "Adam"].forEach(high5);
