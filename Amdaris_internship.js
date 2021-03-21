function rotateArrToLeft(arr) {
    var temp = [];
    var i = 0
    for (i = 0; i<arr.length - 1; i++) {
        console.log(i);
        temp[i] = arr[i+1];
        console.log(temp)
    }
    temp[i] = arr[0];
    console.log(temp);
    console.log(arr + 'is arr');
    return temp;
}

function rotateArrToLeftNTimes(arr, n) {
    newArr = arr;
    while (n--) {
        newArr = rotateArrToLeft(newArr)
    }
    return newArr
}

// console.log(rotateArrToLeftNTimes([1,7,3,4,5,6], 2));

function checkSubstring(str1, str2) {
    for (var i = 0; i<str1.length; i++) {
        for (var j = 0; j<str2.length; j++) {
            var result = true;
            if (str1[i + j] !== str2[j]) {
                result = false;
            }
        }
        if (result) {
            return true
        } 
    }
    return false
}

// console.log(checkSubstring("carpet", "pet"));
// console.log(checkSubstring("candidate", "car"));

function checkSubstring2(smallStr, bigStr) {
    for (var i = 0; i<bigStr.length; i++) {
        var result = true;
        for (var j = 0; j<smallStr.length; j++) {
            console.log(i + ' is i and ' + j + ' is j');
            if (smallStr[j] != bigStr[i+j]) {
                result = false;
                console.log(result);
                break;
            } 
        }
        if (result) {
            return true
        }
    }
    return false
}

console.log(checkSubstring2("pet", "carpet"));
// console.log(checkSubstring2("car", "candidate"));

