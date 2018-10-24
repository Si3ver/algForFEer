// example 1
var someOne = {};
Object.defineProperty(someOne, "name", {
    value: "coverguo",
    writable: false,        // 该API默认赋值false
    configurable: false,
    enumerable: false
});
console.log(someOne.name);
someOne.name = "linkzhu";
console.log(someOne.name);
delete someOne.name;
console.log(someOne.name);

// example 2
var obj = {
    test: "hello"
};
obj.test = "hi";
console.log(obj);
Object.defineProperty(obj, "test", {
    writable: false
});
obj.test = "new value";
console.log(obj);
delete obj.test;
console.log(obj);
