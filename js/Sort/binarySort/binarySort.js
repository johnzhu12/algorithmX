exports.binaryInsertSort = function (arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var key = arr[i], left = 0, right = i - 1;
        while (left <= right) {       //在已排序的元素中二分查找第一个比它大的值
            var mid = parseInt((left + right) / 2); //二分查找的中间值
            if (key < arr[mid]) { //当前值比中间值小  则在左边的子数组中继续寻找   
                right = mid - 1;
            } else {
                left = mid + 1;//当前值比中间值大   在右边的子数组继续寻找
            }
        }
        for (var j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    return arr;
}

