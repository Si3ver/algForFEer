// 实现一个forEach函数
Array.prototype.myForEach = function(func){
  for(var i = 0, len = this.length; i < len; ++i){
    func(this[i], i, this);
  }
}

var arr = [4, 8 ,9];
arr.myForEach((item, idx, arr)=>{
  console.log(item, idx, arr);
  return;
})
