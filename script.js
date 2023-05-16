//variables - chnage value thoruhgout the script
console.log("Hello World");

arr1 = [1, 2, 3, 4];

arr1.push(5);
console.log(arr1);
obj1 = {
  name: "Luciano",
  swe: false,
  number: 23,
};
obj1.chips = "Fritos";
console.log(obj1);

let number = 23;

if (number >= 7 && number < 19) {
  console.log("Hello World");
} else {
  console.log("Goodbye");
}

if (number > 16 || bool2 === false) {
  console.log("Hello World");
} else if (number < 20 && bool2 === true) {
  console.log("How's it going");
} else {
  console.log("Goodbye");
}

const number1 = 1235;
const stringNumber = "1234";

console.log(number1 == stringNumber); //true
console.log(number1 === stringNumber); //false

//For OF , For IN Loops

for (let i = 0; i < 11; i++) {
  console.log(i);
}

//FOR OF, these are loops that you can use with string and arrys. DOES NOT WORK WITH OBJ
let i = "Happy"; //Initializer
for (let char of i) {
  //condiotion & iteration
  //code
}
//Prints out each letter in the string
let str2 = "Sadness";

for (let dog of str2) {
  console.log(dog);
}
//Prints out each element of the array
let animals1 = [null, 112, "moose", "kitten"];

for (let animals of animals1) {
  for (let char of animals) {
    console.log(char);
  }
}

obj1 = {
  name: "Luciano",
  number: 12,
};
