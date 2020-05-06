exports.insertSort = function (arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var temp = arr[i];
        var j = i - 1;//默认已排序的元素
        while (j >= 0 && arr[j] > temp) {  //在已排序好的队列中从后向前扫描
            arr[j + 1] = arr[j]; //已排序的元素大于新元素，将该元素移到一下个位置
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr
}

