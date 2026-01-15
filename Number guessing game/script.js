let number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Enter a valid number (1–100)";
        return;
    }

    attempts++;

    if (guess < number) {
        message.textContent = "Too low! Try again.";
    } else if (guess > number) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `🎉 Congratulations! You guessed it!`;
    }

    attemptsText.textContent = `Attempts: ${attempts}`;
}
