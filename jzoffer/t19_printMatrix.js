function printMatrix(matrix)
{
    var res = [];
    var row = matrix.length, col = martix[0].length;
    var i = 0, j = 0;
    while(i < row/2 && j < col/2){
        while(j++ < col) res.push(matrix[i][j]);
        while(i++ < row) res.push(matrix[i][j]);
        while(j-- >= 0) res.push(matrix[i][j]);
        while(i-- >= 0) res.push(matrix[i][j]);
        console.log(res);
    }
    return res;
}

/*
In:
 1  2  3  4
 5  6  7  8
 9 10 11 12
13 14 15 16
Out:
 1  2  3  4  8 12 16 15 14 13  9  5 | 6  7 11 10
*/

var res = printMatrix();
console.log(res);