function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Attach the event listener after function is declared
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);