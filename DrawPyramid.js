function generatePyramid(n) {
    var str = '';
    var star = '*';
    var space = '_';
    for (var i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
          for (var j = 1; j <= i; j++) {
        }
    }
        console.log(str);
        str = '';
    }
}

function drawPyramid (n) {
    for (let i = 1; i <= n; i++) {
      let str = ""; 
      for(let j = n - i; j > 0; j--) { 
        str += " ";
      }  
      for(let j = i * 2 - 1; j > 0; j--) { 
        str += "*";
      }
      console.log(str);
    }
  }

  drawPyramid(5);