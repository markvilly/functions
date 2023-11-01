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
    alert("Check in");
  } else {
    alert("Wrong Passport!");
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
