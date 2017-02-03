/*jshint esversion: 6 */

// let myArray = [9,2,5,6,4,3,7,10,1,8];

function swap(myArray, i, j) {
  var temp = myArray[i];
  myArray[i] = myArray[j];
  myArray[j] = temp;
}

function bubbleSort(myArray) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] !== undefined && myArray[i+1] !== undefined && myArray[i] > myArray[i+1]) {
        swap(myArray, i, i+1);
        // console.log('myArray', myArray);
        swapped = true;
      }
    }
  } while(swapped);
  return myArray;
}

// console.log(bubbleSort(myArray));

module.exports =  bubbleSort;