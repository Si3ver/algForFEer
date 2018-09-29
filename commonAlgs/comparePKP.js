// 比较扑克牌
// 计算权和
function calcPri(arr)
{
    var len = arr.length, pri = 0;
    for(var i = 0; i < len; ++i){
        pri += arr[i];
        pri *= 100;
    }
    return pri;
}

function whichType(arr)
{
    var len = arr.length, flag, pri;
    // 四条
    if(arr[1] === arr[2] && arr[2] === arr[3]){		
        if(arr[0] === arr[1]){	
            pri = calcPri([arr[0], arr[4]]);
            return [7, pri];
        }
        if(arr[3] === arr[4]){
            pri = calcPri([arr[4], arr[0]]);
            return [7, pri];
        }
    }
    // 三带二
    if(arr[0] === arr[1] && arr[1] === arr[2] && arr[3] === arr[4]){
        pri = calcPri([arr[0], arr[4]]);
        return [6, pri];
    }
    if(arr[2] === arr[3] && arr[3] === arr[4] && arr[0] === arr[1]){
        pri = calcPri([arr[4], arr[0]]);
        return [6, pri];
    }
	// 顺子
    flag = true;
    for(var i = len-1; i > 0; --i){
        if(arr[i] - arr[i-1] !== 1){
            flag = false;
        }
    }
    if(flag){
        return [5, arr[len-1]];
    }
    if(arr[0] === 2 && arr[1] === 3 && arr[2] === 4 && arr[3] === 5 && arr[4] === 14){
        return [5, 5];
    }
    // 统计相同数字个数cnt
    var cnt = 0;
    for(var i = len - 1; i > 0; --i){
        if(arr[i] === arr[i-1]){
            ++cnt;
        }
    }
    if(cnt === 2){
        if(arr[1] === arr[2] && arr[2] === arr[3]){
            // 三条
            pri = calcPri([arr[1], arr[4], arr[0]]);
            return [4, pri];
        }else{
            // 两对
            if( arr[0] === arr[1] && arr[2] === arr[3] )
            	pri = calcPri([arr[2], arr[0], arr[4]]);
            if( arr[0] === arr[1] && arr[3] === arr[4] )
                pri = calcPri([arr[3], arr[0], arr[2]]);
            if( arr[1] === arr[2] && arr[3] === arr[4] )
                pri = calcPri([arr[3], arr[1], arr[0]]);            
            return [3, pri];
        }
    }else if(cnt === 1){
        // 一对
        if( arr[0] === arr[1] )
            pri = calcPri([arr[0], arr[4], arr[3]], arr[2] );
        if( arr[1] === arr[2] )
            pri = calcPri([arr[1], arr[4], arr[3]], arr[0] );        
        if( arr[2] === arr[3] )
            pri = calcPri([arr[2], arr[4], arr[1]], arr[0] );         
        if( arr[3] === arr[4] )
            pri = calcPri([arr[3], arr[2], arr[1]], arr[0] );         
        return [2, pri];
    }else{
        // 散牌
        var pri = 0;
        pri = calcPri(arr.reverse());
        return [1, pri];
        
    } 
}

function compare(arr1, arr2)
{
    var x1 = whichType(arr1);
    var x2 = whichType(arr2);
    if(x1[0] > x2[0]){
        return 1;
    }else if(x1[0] < x2[0]){
        return 2;
    }else{
        if(x1[1] > x2[1]){
            return 1;
        }else if(x1[1] < x2[1]){
            return 2;
        }else{
            return 0;
        }
    }
}

// var n = parseInt(read_line());
// for(var i = 0; i < n; ++i){
//     var arr1 = read_line().split(" ").map(function(item){return parseInt(item)}).sort(function(x, y){return x-y});
//     var arr2 = read_line().split(" ").map(function(item){return parseInt(item)}).sort(function(x, y){return x-y});
// 	print(compare(arr1, arr2));
// }



var arr1 = [2,3,4,5,6];
var arr2 = [4,4,4,4,11];
console.log(compare(arr1, arr2));

arr1 = [2,3,8,9,10];
arr2 = [2,3,8,9,10];
console.log(compare(arr1, arr2));

arr1 = [4,4,7,7,8];
arr2 = [4,4,7,8,8];
console.log(compare(arr1, arr2));

