// 2018-10-24 顺时针打印矩阵
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
        var row = circle, col = circle;
        // -> row = circle, col:[circle, cols-circle-1]
        for(; col < cols - circle; ++col) res.push(matrix[row][col]);
        // _|_ row:[circle+1, rows-circle-2], col = cols-circle-1
        for(--col, ++row; row < rows - circle; ++row) res.push(matrix[row][col]);
        // <- row = rows-circle-1, col:[cols-circle-1, circle]
        if(circle !== rows - circle - 1)
            for(--row, --col; col >= circle; --col) res.push(matrix[row][col]);
        // -|- row:[rows-circle-2, circle+1] col = circle
        if(circle !== cols - circle -1)
            for(++col, --row; row > circle; --row) res.push(matrix[row][col]);
    }
    return res;
}

var M = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
var res = printMatrix(M);
console.log(res);
