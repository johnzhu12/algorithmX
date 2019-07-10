/// <summary>
/// 快速排序
/// </summary>
/// <param name="arry">要排序的数组</param>
/// <param name="left">低位</param>
/// <param name="right">高位</param>
class FastSort {
    public static void QuickSort(int[] arry, int left, int right) {
        // 左边索引小于右边，则还未排序完成
        if (left < right) {
            // 取中间的元素作为比较基准，小于他的往左边移，大于他的往右边移
            int middle = arry[(left + right) / 2];
            int i = left - 1;
            int j = right + 1;
            while (true) {
                // 移动下标，左边的往右移动，右边的向左移动
                while (arry[++i] < middle && i < right)
                    ;
                while (arry[--j] > middle && j > 0)
                    ;
                if (i >= j)
                    break;
                // 交换位置
                int number = arry[i];
                arry[i] = arry[j];
                arry[j] = number;

            }
            QuickSort(arry, left, i - 1);
            QuickSort(arry, j + 1, right);
        }
    }
}