var { selectionSort } = require('./selectSort.js')

function test() {
    var myitems = [4, 5, 6, 3, 2, 1]
    console.log(myitems)
    var res = selectionSort(myitems);
    console.log('排序结果', res)
}
test();