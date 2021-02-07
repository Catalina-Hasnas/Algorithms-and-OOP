function concatArrays(arr, arr2) {

    var arr3 = [];
    var i = 0;
    var j = 0;
    
    while ( i<arr.length || j<arr2.length ) {
        if (i !== arr.length) {
            arr3 = [...arr3, arr[i]]
            i++;
        }
        if (j !== arr2.length) {
            arr3 = [...arr3, arr2[j]]
            j++
        }
        
    }

    console.log(arr3);
    return arr3;
}

concatArrays(['a', 'b', 'c'], ['1', '2', '3', '4']);