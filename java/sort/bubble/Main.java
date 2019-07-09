import java.io.*;

class Program {
    public static void main(String[] args) {
        int[] arry = new int[] { 1, 2, 3, 4, 1, -1 };
        // Sort sort = new Sort();
        Sort.BubbleSort(arry);
        for (int i = 0; i < arry.length; i++) {
            // Console.printf("\t" + arry[i]);
            System.out.println("\t" + arry[i]);
        }
        // Console.Read();
    }
}