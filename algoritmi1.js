let arr = [8,2,5,4,1,3,9]

arr[9] = "test";

console.log(arr);

function swapSort(array) {
    let arr = array;
    let sorted = false;

    while(!sorted) {

        sorted = true

        for(i  = 0; i < arr.length - 1; i++){
            console.log("comaparing " + arr[i] + " " + arr[i+1]);
            if(arr[i] < arr[i+1]){
                console.log("swap");
                
                var aux = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = aux;
                
                console.log(arr);
                
                sorted = false;
            }
        }
    }
    return arr;
}

function insertionSort(array) {
    let arr = array;
    for(j = 0; j < arr.length - 1; j++){
        var p = j + 1;
        while(p > 0 && arr[p - 1] < arr[p]) {
            var aux = arr[p];
            arr[p] = arr[p-1];
            arr[p-1] = aux;
            p--;
        }
    }
    return arr;
}

function easySort(arr) {
    for(i = 0; i < arr.length - 1; i++){

        var min = arr[i];
        var poz_min = i;

        for(j = i + 1; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j]
                poz_min = j
            }
        }

        if(poz_min != i) {
            arr[poz_min] = arr[i];
            arr[i] = min;
        }
    }
    return arr;
}

// console.log(insertionSort(arr));
// console.log(swapSort(arr));
console.log(easySort(arr));
