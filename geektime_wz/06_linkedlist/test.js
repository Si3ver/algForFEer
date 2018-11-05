var obj = {
  x: 1,
  y: {
    arr: [
      2,
      5,
      [
        'a',
        'b',
        {
          w: 4
        }
      ]
    ],
    z: 3
  }
};
console.log(obj.y.arr[2][2].w);
console.log(obj.y.z);


seajs.use(['toast', 'dialog', 'box'], 
  function (Toast, Dialog, Box) {
    show: function(a) {
      if (a == 'yes') {
        Toast.init(); } 
      }, 
    init: function() {
      this.show();
      Box.init();
    }
  }
);

/><script>alert(document.cookie)</script > <p name=

<input type="text" name="message" value="/><script>alert(document.cookie)</script > <p name=" />
