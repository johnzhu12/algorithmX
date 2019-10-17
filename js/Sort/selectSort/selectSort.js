//选择排序
exports.selectionSort = function (arr) {
    let len = arr.length;
    arr.forEach((item, index) => {
        let min = index;
        for (let i = index; i < len; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }

        }
        if (min !== index) {
            [arr[min], arr[index]] = [arr[index], arr[min]];
        }
    });
    //console.log(arr);
    return arr;
}