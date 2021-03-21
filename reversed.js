// function reverseArr(arr) {
//     var newArr = arr.reverse();
//     return newArr;
// }

// reverseArr([1, 5, 3, 7]);

function reverseArr(arr) {
    var newArr = [];
    var k = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr[k] = (arr[i]);
      k++;
    }
    return newArr;
}

console.log(reverseArr([1, 5, 3, 7]));