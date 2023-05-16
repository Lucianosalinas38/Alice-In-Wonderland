// let dessert = ["pie", "Taco","chicken"]

// for (i = 0; i < 10; i++){
//     guest = {}
//     guest.teaCup = true;
//     guest.teaPlate = true;
//     guest.firstName = "Luciano";
//     guest.lastName = "Salians";
//     guest.dessert = "Pie";
// }

// function pickRandom(array) = Math.floor(Math.random() * Array.length)
let arr = [-5, 13, 22, -1000, 55];
let sorted = false;

while (!sorted) {
  sorted = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      sorted = false;
    }
  }
}

console.log(arr);
