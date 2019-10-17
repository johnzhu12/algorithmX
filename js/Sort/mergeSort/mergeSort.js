var { generateArray } = require('../utils/utils.js')
//合并排序

var merge = function (left, right) {
    var result = [], //需要声明归并过程要创建的新数组以及用来迭代两个数组（left和right数组）所需的两个变量
        il = 0,
        ir = 0;
    while (il < left.length && ir < right.length) {//迭代两个数组的过程中
        if (left[il] < right[ir]) {// 我们比较来自left数组的项是否比来自right数组的项小。
            result.push(left[il++]);// 将该项从left数组添加至归并结果数组，并递增迭代数组的控制变量
        } else {
            result.push(right[ir++]);// 从right数组添加项并递增相应的迭代数组的控制变量
        }
    }
    while (il < left.length) { // 将left数组所有剩余的项添加到归并数组中
        result.push(left[il++]);
    }
    while (ir < right.length) { // 将right数组所有剩余的项添加到归并数组中
        result.push(right[ir++])
    }
    return result;
}

function mergeSort(items) {
    if (items.length == 1) {
        return items;
    }
    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
