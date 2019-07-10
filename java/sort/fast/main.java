class Program {
    public static void main(String[] args) {
        int[] arry = new int[] { 34, 1, 221, 50, 44, 58, 12, 1, 1 };
        // arry.BubbleSort();
        FastSort.QuickSort(arry, 0, arry.length - 1);
        for (int i = 0; i < arry.length; i++) {
            System.out.println("\t" + arry[i]);
        }
    }
}