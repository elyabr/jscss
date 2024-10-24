let score = 0;

function startQuiz() {
    document.getElementById('study-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
}

function checkAnswer(questionNumber, status) {
    const question = document.getElementById(`question${questionNumber}`);
    if (status === 'correto') {
        question.classList.add('correct');
        score++;
    } else {
        question.classList.add('incorrect');
    }
    
    setTimeout(() => {
        question.classList.add('hidden');
        if (questionNumber < 3) {
            document.getElementById(`question${questionNumber + 1}`).classList.remove('hidden');
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    const resultSection = document.getElementById('result-section');
    const resultText = document.getElementById('result');
    resultSection.classList.remove('hidden');
    
    if (score === 3) {
        resultText.innerText = "Parabéns! Você acertou todas as perguntas!";
    } else {
        resultText.innerText = `Você acertou ${score} de 3 perguntas.`;
    }
}

function resetQuiz() {
    score = 0;
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('question1').classList.remove('hidden');
    document.getElementById('question1').classList.remove('correct', 'incorrect');
    document.getElementById('question2').classList.remove('correct', 'incorrect');
    document.getElementById('question3').classList.remove('correct', 'incorrect');
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('study-section').classList.remove('hidden');
}
