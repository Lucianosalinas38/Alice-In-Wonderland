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

// Function to get a random item from an array

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
let teaCupsColor = [
  "TeaCupColor1",
  "TeaCupColor2",
  "TeaCupColor3",
  "TeaCupColor4",
  "TeaCupColor5",
  "TeaCupColor6",
  "TeaCupColor7",
  "TeaCupColor8",
  "TeaCupColor9",
  "TeaCupColor10",
];
let teaPlatesColor = [
  "TeaPlateColor1",
  "TeaPlateColor2",
  "TeaPlateColor3",
  "TeaPlateColor4",
  "TeaPlateColor5",
  "TeaPlateColor6",
  "TeaPlateColor7",
  "TeaPlateColor8",
  "TeaPlateColor9",
  "TeaPlateColor10",
];
// Now we need to assign all the keys and values for each guest from the tables I made (and yes I did get bored of coming up with names )

function getRandomTeaSupply(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

for (let i = 0; i < 10; i++) {
  let guest = {};
  guest.firstName = firstName[i];
  guest.lastName = lastName[i];
  guest.species = species[i];
  guest.teaCup = true;
  guest.teaPlate = true;
  guest.dessert = getRandomTeaSupply(desserts);
  guest.teaCupColor = getRandomTeaSupply(teaCupsColor);
  guest.teaPlateColor = getRandomTeaSupply(teaPlatesColor);
  guests.push(guest);
}

console.log(guests);
