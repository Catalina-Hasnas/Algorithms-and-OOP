function concatStoredArrays(arr, arr2) {
    var arr3 = [];
    var i = 0;
    var j = 0;

    while ( i<arr.length && j<arr2.length ) {
        if (arr[i] <= arr2[j]) {
            arr3 = [...arr3, arr[i]];
            i++;
        } else {
            arr3 = [...arr3, arr2[j]]
            j++;
        }
    };

    while ( i < arr.length ) {
        arr3 = [... arr3, arr[i]];
        i++;
    }

    console.log(arr3);
    return arr3;
}

concatStoredArrays([1, 1, 7, 10, 12, 13], [0, 2, 11]);