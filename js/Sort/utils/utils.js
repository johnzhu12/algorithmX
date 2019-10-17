exports.generateArray = function (length) {
    let arr = Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = Math.random().toFixed(2);
    }
    return arr;
};