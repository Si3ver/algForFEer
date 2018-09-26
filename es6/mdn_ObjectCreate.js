// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
    this.func = function(){
        console.log('hi');
    };
}

var m1 = Object.create(Shape);
var m2 = new Shape();

console.log(m1.__proto__ === Shape);
console.log(m2.__proto__ === Shape.prototype);
console.log(m1);
m2.func();
