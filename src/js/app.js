const menuClick = document.getElementById("menubtn");
var show = {showdisplay: true}


menuClick.addEventListener('click', function (event){
    displaymenu = document.getElementById("menulist");

    event.preventDefault();
    if (show.showdisplay == true){
    menulist.style.display = 'flex';
    show.showdisplay = false
    }
    else{
    menulist.style.display = 'none';
    show.showdisplay = true
    }

})

// SLIDER

let contagem = 0
document.getElementById("radio1").checked = true;
const totalSlide = document.querySelectorAll(".slide");

setInterval(function(){
    nextSlide();
}, 2000);

function nextSlide(){
    contagem = contagem + 1;
    if( contagem > totalSlide.length){
        contagem = 0;
    }
    document.getElementById("radio" + contagem).checked = true;
}

// QUIZ
const questions = [
    {
        question: "Qual é o mais bonito?",
        answers: [
            { id: 1, text: "Rafa", correct:false },
            { id: 2, text: "João", correct:true },
            { id: 3, text: "Marcos", correct:false },
            { id: 4, text: "Célia", correct:false }
        ]
    },

    {
        question: "Que ano o Rafa nasceu",
        answers: [
            { id: 1, text: "2015", correct:false },
            { id: 2, text: "2014", correct:false },
            { id: 3, text: "2010", correct:false },
            { id: 4, text: "2011", correct:true }
        ]
    },

    {
        question: "O que vamos almoçar?",
        answers: [
            { id: 1, text: "Churrasco", correct:true },
            { id: 2, text: "Pizza", correct:false },
            { id: 3, text: "Hamburgues", correct:false },
            { id: 4, text: "Comida da mamãe", correct:false }
        ]
    },

    {
        question: "Goat no Marvel Rivals?",
        answers: [
            { id: 1, text: "Tocha Humana", correct:true },
            { id: 2, text: "Homem Aranha", correct:false },
            { id: 3, text: "Thor", correct:false },
            { id: 4, text: "Adam Warlock", correct:false }
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach((answer) => { 
        const button = document.createElement("button"); //novos botoes dinamicamente
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button);
    })
}

function selectAnswer(e) {
    const answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Voce acertou ${score} de ${questions.length}!`
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion()
    } else {
        showScore()
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length ){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();