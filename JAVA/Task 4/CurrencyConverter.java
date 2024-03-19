import java.util.Scanner;

public class CurrencyConverter {

    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Currency Converter!");

        // Get user input for base currency
        System.out.println("Enter the base currency (e.g., USD, EUR, JPY): ");
        String baseCurrency = scanner.nextLine().toUpperCase();

        // Get user input for target currency
        System.out.println("Enter the target currency (e.g., USD, EUR, JPY): ");
        String targetCurrency = scanner.nextLine().toUpperCase();

        // Get exchange rate from external API
        double exchangeRate = getExchangeRate(baseCurrency, targetCurrency);

        // Get user input for amount to convert
        System.out.println("Enter the amount to convert: ");
        double amount = scanner.nextDouble();

        // Convert amount to target currency
        double convertedAmount = amount * exchangeRate;

        // Display result
        System.out.println("[" + amount + " " + baseCurrency + "] converted to [" + convertedAmount + " " + targetCurrency + "]");

        scanner.close();
    }

    public static double getExchangeRate(String baseCurrency, String targetCurrency) throws Exception {
        // Replace with your implementation to fetch real-time exchange rates from an external API
        // For example, you could use a free currency conversion API like Open Exchange Rates or fixer.io
        // This is a placeholder implementation that returns a fixed exchange rate
        if (baseCurrency.equals("USD") && targetCurrency.equals("EUR")) {
            return 0.92;
        } else if (baseCurrency.equals("EUR") && targetCurrency.equals("USD")) {
            return 1.09;
        } else {
            throw new Exception("Unsupported currency conversion");
        }
    }
}
