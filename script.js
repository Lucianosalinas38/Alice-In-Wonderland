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
