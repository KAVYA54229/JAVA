import java.util.Scanner;

public class StudentGradeApplication {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Student Grade Application!");

        System.out.print("Enter the number of students: ");
        int numStudents = scanner.nextInt();

        double totalGrade = 0;

        for (int i = 1; i <= numStudents; i++) {
            System.out.print("Enter the grade for student " + i + ": ");
            double grade = scanner.nextDouble();

            // Validate the input grade (assuming valid grades are between 0 and 100)
            if (grade >= 0 && grade <= 100) {
                totalGrade += grade;
            } else {
                System.out.println("Invalid grade. Please enter a grade between 0 and 100.");
                i--; // To repeat the current iteration for the same student
            }
        }

        double averageGrade = totalGrade / numStudents;

        System.out.println("\nAverage Grade: " + averageGrade);
        System.out.println("Thank you for using the Student Grade Application!");
    }
}