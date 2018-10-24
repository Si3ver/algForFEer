function foo1() {
    var id = 5;
    setTimeout(() => {
      var id = 4;
      console.log('id1:', this.id);
    }, 100);
}
function foo2() {
    var id = 6;
    setTimeout(function(){
      var id = 3;
      console.log('id2:', this.id);
    }, 100);
}

var id = 21;
foo1.call({ id: 42 });
foo2.call({ id: 42 });
console.log('global:', this.id, global.id);
foo1();
