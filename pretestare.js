// the optime version:

function putZeroToTheEndOfTheArray(arr) {
    var othersArr = [];
    var k = 0;
    var s = 0;
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] === 0) {
            k++;
        } else {
            othersArr[s] = arr[i];
            s++
        }
    }
    var returnArr = [...othersArr];

    for (var j = 0; j<k; j++) {
        returnArr[s] = 0;
        s++;
    }
    
    return returnArr;
}

// the general version

function putZeroToTheEndOfTheArray(arr) {
    var zeroArr = [];
    var othersArr = [];
    var k = 0;
    var s = 0;

    for (var i = 0; i<arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr[k] = arr[i];
            k++;
        } else {
            othersArr[s] = arr[i];
            s++
        }
    }
    var returnArr = [...othersArr, ...zeroArr];

    return returnArr;
}

// putZeroToTheEndOfTheArray([0, 2, 3, 0, 4, -1]);

function concatArrays(arr1, arr2) {
    var returnArr = [];
    var k = 0;
    var i = 0;
    var j = 0;

    while (i<arr1.length || j<arr2.length ) {
        if (i < arr1.length) {
            returnArr[k] = arr1[i];
            i++;
            k++;
        }
        if (j < arr2.length) {
            returnArr[k] = arr2[j];
            j++;
            k++;
        }
    }
    return returnArr;
}

// concatArrays([1,2,4], [6,7,9,10]);

function calcFactorial(n) {
    if (n === 1) {
        return 1
    } 
    if (n===0) {
        return 1
    } 
    return n * calcFactorial(n-1);
}

// console.log(calcFactorial(6));

function repeatSpace(n) {
    var repeatingSpaces = "";
    while (n > 0) {
        repeatingSpaces += " ";
        n--
    }
    // console.log(repeatingSpaces);
    return repeatingSpaces;
}

repeatSpace(1);

function drawTriangle(n) {
    var str = '';
    for (let i = 0; i < n; i++) {
        if (i>=2 && i !== n-1) {
            str = '*' + repeatSpace(i-1) + '*';
        } else {
            for (let j = 0; j <= i; j++) {
                str+="*"; 
            }
        }
        console.log(str);
        str = '';
    }
    
}

drawTriangle(7);
