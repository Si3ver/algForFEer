/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var hashmap = new Map();
  for(var i = 0, len = nums.length; i < len; ++i) {
    var item = nums[i], delta = target - item;
    if (hashmap[item] !== undefined) {
      return ([hashmap[item], i]);
    }
    hashmap[delta] = i;
  };
  return null;
};

var ret = twoSum([2, 7, 11, 15], 9);
console.log(ret);
