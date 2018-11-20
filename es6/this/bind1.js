// 模拟实现一个bind函数 - 简化版

Function.prototype.bind = function(context) {
  var self = this;
  return function() {
    return self.apply(context, arguments);
  }
};

var obj = {
  name: 'seven'
};

var func = function() {
  console.log(this.name);
}.bind(obj);

func();
