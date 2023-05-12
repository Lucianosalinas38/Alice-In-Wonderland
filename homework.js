/*
 *Home Work!
 * To create a scenario! Imagine this...
 * you are in Alice in Wonderland world and you are setting up the table for the tea party
 * There are 10 guests, that will arrive soon, you need to make sure that
 * that every guest has a tea cup, tea plate, and a small dessert.
 *
 */

// let teaGuests [
//     {
//     name: "",
//     lastName:,
//     species:,
// }
// ]

// Expected output
// {
//     firstName:,
//     lastName:,
//     species:,
//     teacup:,
//     teaCupColor:,
//     teaPlate:,
//     teaPlateColor:,
//     smallDessert:,
//     dessertType:,
// }

//Challenge! Try to randomaize the dessert to each guest along with the color of the tea cup and the tea plate
//You can ONLY use Math (JS), BUT if you are able to do it with ONLY what was taught today, $20 :) First 3

// This is where all the information of the guestes will be stored
let guests = [];

//Possible Guest firstNames, lastNames , plates, cups and desserts.
let firstName = [
  "Ashe",
  "Darius",
  "Rammus",
  "Syndra",
  "Tristana",
  "Neeko",
  "Shaco",
  "Vayne",
  "Nasus",
  "Veigar",
];
let lastName = [
  "LN1",
  "LN2",
  "LN3",
  "LN4",
  "LN5",
  "LN6",
  "LN7",
  "LN8",
  "LN9",
  "LN10",
];
let desserts = [
  "Dessert1",
  "Dessert2",
  "Dessert3",
  "Dessert4",
  "Dessert5",
  "Dessert6",
  "Dessert7",
  "Dessert8",
  "Dessert9",
  "Dessert10",
];
let species = [
  "Species1",
  "Species2",
  "Species3",
  "Species4",
  "Species5",
  "Species6",
  "Species7",
  "Species8",
  "Species9",
  "Species10",
];
// let teaCups = [
//   "TeaCup1",
//   "TeaCup2",
//   "TeaCup3",
//   "TeaCup4",
//   "TeaCup5",
//   "TeaCup6",
//   "TeaCup7",
//   "TeaCup8",
//   "TeaCup9",
//   "TeaCup10",
// ];
// let teaPlates = [
//   "TeaPlate1",
//   "TeaPlate2",
//   "TeaPlate3",
//   "TeaPlate4",
//   "TeaPlate5",
//   "TeaPlate6",
//   "TeaPlate7",
//   "TeaPlate8",
//   "TeaPlate9",
//   "TeaPlate10",
// ];
// Now we need to assign all the keys and values for each guest from the tables I made (and yes I did get bored of coming up with names )

for (let i = 0; i < 10; i++) {
  let guest = {};
  guest.firstName = firstName[i];
  guest.lastName = lastName[i];
  guest.species = species[i];
  guest.teaCup = true;
  guest.teaPlate = true;
  guest.dessert = desserts[i];
  guests.push(guest);
}
console.log(guests);
console.log(Math.random);
