// 模拟实现一个bind函数 - 完整版

Function.prototype.bind = function () {
  var self = this,
      context = [].shift.call(arguments),   // 需要绑定的上下文
      args = [].slice.call(arguments);      // 转成数组
  return function () {
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  }
};

var obj = {
  name: 'seven'
};

var func = function (a, b, c, d) {
  console.log(this.name);
  console.log([a, b, c, d])
}.bind(obj, 1, 2);

func(3, 4);
