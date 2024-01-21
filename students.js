import java.util.Scanner;
import java.util.Timer;
import java.util.TimerTask;

public class QuizApplication {
    private static final int TIME_LIMIT_SECONDS = 60;
    private static int currentQuestionIndex = 0;
    private static int score = 0;
    private static Timer timer;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] questions = {
                "What is the capital of France?",
                "Which planet is known as the Red Planet?",
                "What is the largest mammal on Earth?"
        };

        String[] answers = {"Paris", "Mars", "Blue Whale"};

        System.out.println("Welcome to the Quiz Application!");
        System.out.println("You have " + TIME_LIMIT_SECONDS + " seconds to answer all questions.");

        timer = new Timer();
        timer.schedule(new TimerTask() {
            public void run() {
                endQuiz();
            }
        }, TIME_LIMIT_SECONDS * 1000);

        while (currentQuestionIndex < questions.length) {
            System.out.println("\nQuestion " + (currentQuestionIndex + 1) + ": " + questions[currentQuestionIndex]);
            System.out.print("Your answer: ");
            String userAnswer = scanner.nextLine();

            if (userAnswer.equalsIgnoreCase(answers[currentQuestionIndex])) {
                System.out.println("Correct! +1 point");
                score++;
            } else {
                System.out.println("Incorrect. The correct answer is: " + answers[currentQuestionIndex]);
            }

            currentQuestionIndex++;
        }

        endQuiz();
    }

    private static void endQuiz() {
        timer.cancel();
        System.out.println("\nQuiz finished!");
        System.out.println("Your score: " + score + " out of " + currentQuestionIndex);

        if (score == currentQuestionIndex) {
            System.out.println("Perfect score! Well done!");
        } else {
            System.out.println("Better luck next time!");
        }

        System.exit(0);
    }
}