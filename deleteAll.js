function deleteAll (el, arr) {
    let newArr = [];

    for (var i = 0; i< arr.length; i++) {
        if (arr[i] !== el) {
            newArr = [...newArr, arr[i]]
        }
    }
    console.log(newArr);
    return newArr;
    
}





deleteAll("x", [1, "b", 40, "x", "someString", -210, "x"]);