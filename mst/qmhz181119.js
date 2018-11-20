function rep(str, keywords){
  var res = str.slice();
  keywords.forEach(function(key){
    res = res.replace(new RegExp(key, "g"), "["+key+"]");
  });
  return res;
}

var str = "abcd $efgh jklm opqr .stuv wxyz abcd $efgh jklm opqr stuv wxyz abcd $efgh jklm opqr .stuv wxyz";
var keywords = ["$efgh", ".stuv"];
var res = rep(str, keywords);
console.log(res);
