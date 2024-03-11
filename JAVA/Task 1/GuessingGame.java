import java.util.Scanner;

public class GuessingGame {
    public static void main (String args [])
    {
        Scanner scanner = new Scanner(System.in);
        int randomNumber = (int) (Math.random()*100);
        boolean isValid=true;
        int count = 1;
        while(isValid){

            System.out.println("Hi There, I am generating a number between 1 -->100 guess it!");
            int number = scanner.nextInt();
            if(number==randomNumber)
            {
                System.out.println("U got it right in :" +count +"Guesses! the number is:"+ randomNumber);
                isValid=false;
            }
            else if(number<randomNumber)
            {
                System.out.println("Aim a bit Highter");
            }
            else if(number>randomNumber)
            {
                System.out.println("Aim a bit Lower");
            }
            count++;

        }



    }
}