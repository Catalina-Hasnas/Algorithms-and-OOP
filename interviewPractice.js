
function bigFunc(){
let newArray = new Array(700).fill('♥');
return (element) => newArray[element];
}

let getElement = bigFunc(); // Array is created only once
getElement(599);
getElement(670);


// let hero = {
//     powerLevel: 99,
//     getPower(){
//         return this.powerLevel;
//     }
// }
    
// console.log (hero.getPower);
    
// let hero2 = {powerLevel:42};
// console.log(getPower());
// console.log(getPower.apply(hero2));




function randomFunc(){
for(let i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
}
}

randomFunc();

(function(a){
    return (function(){
      console.log(a);
      a = 23;
      console.log(a);
    })()
})(45);

function rotateArr(arr, rotations) {
    var i = 0;
    while (i<rotations) {
        arr.unshift(arr[arr.length-1]);
        arr.splice(arr.length-1,1);
        console.log(arr);
        i++;
    }
    
    console.log(arr)
}

rotateArr([2,3,4,5,7], 3);

function rotateRight(arr,rotations){
    if(rotations == 0) return arr;
    for(let i = 0; i < rotations;i++){
      let element = arr.pop();
      arr.unshift(element);
      console.log("the other function:" + arr);
    }
    console.log("the other function:" + arr);
  
    return arr;
    
  }

  rotateRight([2,3,4,5,7], 3);


