
//Object
const circle = {
    radius: 1,
    draw: function() {
        console.log('drawn');
    },
};

console.log(circle);

//Factory function
function createCircle(radius) {
    return {
    radius,
    draw: function() {
        console.log("draw");
    },
}
};

const circle1 = createCircle(2);
console.log(circle1);

//Constructor Funtion (FirstLetter Upper)
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Draw");
    };
};

const another = new Circle(10);
console.log(another);


function Car(model, hp, year, maxspeed,) {
    this.model = model;
    this.hp = hp;
    this.year = year;
    this.maxspeed = maxspeed;
    this.turnOn = function() {
        console.log("The car started");
        return this;
    };
    this.turnOff = function() {
        console.log("The car is shut down");
        return this;
    };
    this.move = function() {
        console.log("The car is moving");
        return this;
    };
    this.stop = function() {
        console.log("The car stopped");
        return this;
    }
}
let color = "Blue";
const car1 = new Car("Fiat", 100, 2001, 160);
console.log(car1)
car1.color = color;
console.log(car1);


//Cycle for in- loops though all the properties of fhe object
//if we dont want to see the methots of a obejct
//we use typeof "ObjectName"[key] !== (the name)
for (let key in car1) {
    if (typeof car1[key] !== "function") {
    console.log(key, car1[key]); 
    };
};
//Getiin all the keys (properties only, no functions) in array
const keys = Object.keys(car1);
console.log(keys);

//Cheking if there is the property inside a object
if ("model" in car1) {
    console.log("The car has a model");
}

function Line(x, y) {
    this.x = x;
    this.y = y;
    let pi = 3.14;
    let fromXtoY
    if (x > y) {
    fromXtoY = x - y;
    } 
    else fromXtoY = y - x;
    let optimal_location = x + y;

    this.getoptimal_location = function() {
        console.log(optimal_location);
    }
    this.draw = function () {
        console.log("The line has been drawn");
    };
    this.getRadius = function (){
        console.log(fromXtoY* pi);
    }
    Object.defineProperty(this, "optimalLocation", {
    get: function() {
        return optimalLocation;
    },
    set: function(value) {
        if (!value.x || !value.y) {
           throw new Error("Invalid Location"); 
        };
        optimalLocation = value;
       }
    });
}

const firstLine = new Line(10, 4);
firstLine.draw()
firstLine.getRadius();
firstLine.getoptimal_location();
console.log(firstLine.x)

