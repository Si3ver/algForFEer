// 最长回文子串长度
// 参考 https://segmentfault.com/a/1190000003914228

function LPStr(str)
{
    var len = str.length, pal = [], maxLen = 0, res;
    for(var i = 0; i < len; ++i){
        var arr = [];
        for(var j = 0; j < len; ++j){
            arr.push(0);
        }
        pal.push(arr);
    }

    for(var i = 0; i < len; ++i){       // 终点     
        for(var j = i; j >= 0; --j){    // 起点
            if(str[j] === str[i] && (i-j < 2 || pal[j+1][i-1])){
                pal[j][i] = 1;
                if(maxLen < i-j+1) {
                    res = str.substring(j, i+1);
                    maxLen = i-j+1;
                }
            }
        }
        console.log(i, pal);
    }
    return res;
}

console.log(LPStr("google"));
console.log(LPStr("abcda"));
console.log(LPStr("exlgoogle"));
