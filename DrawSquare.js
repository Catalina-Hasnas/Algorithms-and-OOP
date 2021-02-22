function drawSquare (n) { 
    var str = "";

    for (var i = 0; i < n; i++) {
        if (i == 0 || i == n-1) {
            var m = n;
            while (m > 0) {
                str+= "#";
                m--;
            }
        } else {
            var s = n-2;
            var space = "";
            while (s > 0 ) {
                space+= " ";
                s--;
            }
            str = "#" + space + "#";
        }

        console.log(str);
        str = "";
    }
    return str;
}

drawSquare(7);

function drawLine(n, symbol) {
    str = "";
    
    while (n > 0) {
        str+= symbol;
        n--;
    }

    console.log(str);
}

// drawLine(4, "@");

function drawSpace(n, str) {
    var s = n-2;
    var space = "";

    while (s > 0 ) {
        space+= " ";
        s--;
    }
    console.log(str + space + str);
}

function drawZebra(n, str) {
    for (var i = 0; i < n; i++) {
        if (i % 2 == 0) {
            drawSpace(n, str)
        } else {
            drawLine(n, str)
        }
    }
}

drawZebra(20, "@");