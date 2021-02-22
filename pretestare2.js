function deleteAll(arr, n) {
    var newArr = [];
    var k = 0;
    for (var i = 0; i<arr.length; i++) {
        if (arr[i]!==n) {
            newArr[k] = arr[i];
            k++;
        }
    }
    console.log(newArr);
    console.log("deleted " + (arr.length - k) + " elements");
}

deleteAll([1, 1, 12, 0, 3, 4, 24], 0);

function toThePowerOf(n, m) {
    if (m === 1) {
        return n
    };
    if (m === 0) {
        return 1
    };
    return n * toThePowerOf(n, m-1)
};

console.log(toThePowerOf(2,4));

function drawLine(n) {
    str="";
    for (var i = 0; i<n; i++) {
        str+="#"
    }
    return str
};

function drawSpaces(n) {
    str="";
    while (n>0) {
        str+=" ";
        n--;
    }
    return str;
};

drawSpaces(2);

function drawWindow(n) {
    if (n%2 === 0) {
        console.log('sorry, gotta give an odd number')
    } else {
        var str="";
        var middle = (n-1)/2
        var numOfSpaces = middle-1;
        for (var i = 0; i<n; i++) {
            if (i == 0 || i == n-1 || i == middle) {
                str += drawLine(n);
            } else {
                str = "#" + drawSpaces(numOfSpaces) + "#" + drawSpaces(numOfSpaces) + "#"
            }
        console.log(str);
        str = "";
        }
    }
};

drawWindow(5);