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
