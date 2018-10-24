var obj = {};
var initValue = "hello";
Object.defineProperty(obj, "newKey", {
    get: function () {
        return initValue;
    },
    set: function (value) {
        initValue = value;
    }
});
console.log( obj.newKey );
obj.newKey = 'hi';
console.log( obj.newKey );
