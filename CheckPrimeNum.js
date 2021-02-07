function checkPrime (n) {
    var z = 2;
    while ( z < n ) {
        if ( n%z === 0 ) {
            return false;
        }
        z++
    }
    return true;
};

function findPrimeNumInArr (a, b) {
    var k = 0;
    var arr = [];
    var i = 0;
    var j = 0;

    while ( i < a.length || j < b.length ) {

        if (i !== a.length) {
            if ( checkPrime(a[i]) ) {
                arr[k] = a[i];
                k++;
            }
            i++
        }

        if (j !== b.length) {
            if ( checkPrime(b[j]) ) {
                arr[k] = b[j];
                k++;
            }
            j++
        }
        
    }

    // for (var i = 0; i < a.length; i++) {
    //     if ( checkPrime(a[i]) ) {
    //         arr[k] = a[i];
    //         k++;
    //     }
    // };

    // for (var j = b.length - 1; j >= 0; j-- ) {
    //     if ( checkPrime(b[j]) ) {
    //         arr[k] = b[j];
    //         k++;
    //     }
    // }
    console.log(arr);
    console.log(i,j);
    return arr;
};

findPrimeNumInArr([3, 4, 5, 6, 10], [7, 11, 62, 61])