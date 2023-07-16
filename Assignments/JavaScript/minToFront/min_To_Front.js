//find the min value and index

function minToFront(arr) { 


let min = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++){ //iterates through the array to find min
  if (arr[i] < min){
    min = arr[i];
    minIndex = i;
  }
}

//Move min value to the front of array
if (minIndex !== 0){
  for (let i = minIndex; i > 0; i++){
    arr[i] = arr[i - 1];
  }
  arr[0] = min;
}
return arr;
}

//Test code
const array = [4, 2, 1, 3, 5];
const result = minToFront(array);
console.log(result);


