class Oppgave1 {
    public static void main(String[] args){
        Oppgave1 mainObject = new Oppgave1();
        int[] liste = {1, 10, 2, 6, 5, 3};
        int n = liste.length;
        int maxNumber = mainObject.highestProd(liste, n);
        System.out.println("Result: " + maxNumber);
    }

    public int highestProd(int[] liste, int n){
        // if less than tree, no need to perform method
        if(n < 3){
            return 0;
        }

        int max = Integer.MIN_VALUE;

        for(int i = 0; i < n - 2; i++){
            for(int j = i + 1; j < n-1; j++){
                for(int k = j + 1; k < n; k++){
                    max = Math.max(max, liste[i] * liste[j] * liste[k]);
                }
            }
        }
        return max;
    }
}
