class Shape {
    static customName = "Shape";
    static description = "Drawing a shape";

    draw () {
        console.log("Abstract drawing");
    }
}

class AbstractFigure extends Shape {
    static customName = "some figure";
    static description = "idk how to draw";

    draw () {
        super.draw();
        console.log(AbstractFigure.description);
    }
}

class Square extends Shape{
    static description = "Drawing a square"

    draw () {
        console.log("####");
        console.log("####");
        console.log("####");
        console.log("####");
    }
}

class Pyramid extends Shape{
    static customName = "like in egypt"

    draw () {
        console.log("    #    ");
        console.log("   ###   ");
        console.log("  #####  ");
        console.log(" ####### ");
    }
}

var pyramid = new Pyramid();
pyramid.draw()

var shape = new Shape();

console.log(Pyramid.description);
console.log(Pyramid.customName);

var square = new Square();
if(square instanceof Shape){
    square.draw();
}

var abstractFigure = new AbstractFigure ();

if(abstractFigure instanceof Shape) {
    abstractFigure.draw();
}

var array = [
    new AbstractFigure(),
    new Shape(),
    new Square(),
    12,
    "some shit"
]

console.log();
console.log("For loop");
array.forEach(el => {
    if(el instanceof Shape){
        el.draw();
    } else {
        console.log("Not a shape");
    }
})