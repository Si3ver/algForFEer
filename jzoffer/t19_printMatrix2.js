// 2018-10-24 顺时针打印矩阵 (这个版本更清晰)
/*
  1  2  3  4
  5  6  7  8
  9 10 11 12
 13 14 15 16
 => 1 2 3 4 8 12 16 15 14 13 9 5, 6 7 11 10
*/
function printMatrix(matrix)
{
    var rows = matrix.length, cols = matrix[0].length;
    var res = [], circles = Math.ceil(Math.min(rows,cols)/2);
    for(var circle = 0; circle < circles; ++circle){
        var left = circle, 
            right = cols - circle - 1, 
            top = circle, 
            bottom = rows - circle - 1;
        // left to right
        for(var j = left; j <= right; ++j) res.push(matrix[top][j]);
        // top to bottom
        for(var i = top+1; i <= bottom; ++i) res.push(matrix[i][right]);
        // right to left
        if(top !== bottom)
            for(var j = right-1; j >= left; --j) res.push(matrix[bottom][j]);
        // bottom to top
        if(left !== right)
            for(var i = bottom-1; i >= top+1; --i) res.push(matrix[i][left]);
    }
    return res;
}

var M = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
var res = printMatrix(M);
console.log(res);
