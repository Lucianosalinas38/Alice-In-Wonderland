let arr = [-5, 13, 22, -1000, 55];
let sorted = false;

while (!sorted) {
  //Will always run until the array is sorted
  sorted = true; //Declared true at the start so once its sorted it will end and wont run anymore

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      sorted = false; //Delcared false once its ran through the for loop to ensure to check again to make sure its fully sorted
    }
  }
}

console.log(arr);
