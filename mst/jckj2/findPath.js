// 未完成!!!
// 找出矩阵路径
/*

*/

function solve(M, startRow, startCol) {
    var lenRow = M.length, lenCol = M[0].length;
    var rows = M.length - startRow, cols = M[0].length - startCol;



    if((rows === 2 && cols === 1) || (rows === 1 && cols === 2)){
      return M[lenRow-1][lenCol-1] + M[startRow][startCol];
    }else{
        return Math.max(M[startRow+1][startCol] + solve(M, startRow+1, startCol), M[startRow][startCol+1] + solve(M, starRow, startCol+1));
    }
}

function solve2(M, startRow, startCol) {
    var dp = [];
    for (var i = 0; i < lenRow; ++i) {
        var tmp = [];
        for (var j = 0; j < lenCol; ++j) {
            tmp.push(0);
        }
        dp.push(tmp);
    }
    function lambda(M, startRow, startCol) {
        var rows = M.length - startRow, cols = M[0].length - startCol;
        var lenRow = M.length, lenCol = M[0].length;
        if (rows === 2 || cols === 2) {
            //....
        } else {
            if (dp[startRow][startCol] !== 0) {
                return dp[startRow][startCol];
            } else {
                return Math.max(M[startRow + 1][startCol] + lambda(M, startRow + 1, startCol), M[startRow][startCol + 1] + lambda(M, starRow, startCol + 1));
            }

        }   
    }
}

function solveWrap(M){
    if(M.length < 2){
        return sum(...M);
    }
    if(M[0].length < 2){
        var res = 0;
        for(var j = 0; j < M[0].length; ++j){
            res += M[0][j];
        }
        return res;
    }
    return M[0][0] + solve(M, 0, 0);
}

// f(i, j) = f(i +1, j) + f(i, j +1) = 2f(i+1, j)  2^(n+m)
