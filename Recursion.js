function strLength (str) {
    if (str === "") {
        return 0
    } else {
        return 1 + strLength(str.substring(1));
    }
}

console.log(strLength("some"));