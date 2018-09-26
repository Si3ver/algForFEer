// // var
// var a = [];
// for(var i = 0; i < 10; ++i){
//     a[i] = function(){
//         console.log(i);
//     };
// }
// a[6]();      // 10
// console.log(a[3].toString());

// let， 实际上，下述代码有十个i在不同的作用域内。
var a = [];
for(let i = 0; i < 10; ++i){
    a[i] = function(){
        console.log(i);
    };
}
a[6]();
console.log(a[3].toString());
