function partition(arr, left, right)
{
    var pivot = arr[left];
    while ( left < right ){
        while ( left < right && arr[right] > pivot ) --right;
        if ( left < right )  arr[left] = arr[right];
        while ( left < right && arr[left] < pivot )  ++left;
        if ( left < right )  arr[right] = arr[left];
    }
    arr[left] = pivot;
    return left;
}

function quickSort(arr, left, right)
{
    var stack = [];
    stack.push(left);
    stack.push(right);
    while ( stack.length > 0 ) {
        var right = stack.pop(),
            left = stack.pop();
        var pivotIdx = partition(arr, left, right);
        if (pivotIdx + 1 < right) {
            stack.push(pivotIdx + 1);
            stack.push(right);
        }
        if (left + 1 < pivotIdx) {
            stack.push(left);
            stack.push(pivotIdx - 1);
        }
    }
}

var arr = [394, 129, 11, 39, 28];
quickSort(arr, 0, arr.length-1);
console.log(arr);
