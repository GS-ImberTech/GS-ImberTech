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
    question: "O que causa a maioria das enchentes nas cidades brasileiras?",
    answers: [
        { id: 1, text: "Erupções vulcânicas", correct: false },
        { id: 2, text: "Chuvas intensas e falta de drenagem", correct: true },
        { id: 3, text: "Ondas de calor", correct: false },
        { id: 4, text: "Desmatamento da Amazônia", correct: false }
    ]
},
{
    question: "Qual é uma das principais consequências das enchentes no Brasil?",
    answers: [
        { id: 1, text: "Deslizamentos de terra", correct: true },
        { id: 2, text: "Redução do nível dos rios", correct: false },
        { id: 3, text: "Formação de desertos", correct: false },
        { id: 4, text: "Aumento da fertilidade do solo", correct: false }
    ]
},
{
    question: "Qual região brasileira sofre mais frequentemente com enchentes urbanas?",
    answers: [
        { id: 1, text: "Região Sudeste", correct: true },
        { id: 2, text: "Região Norte", correct: false },
        { id: 3, text: "Região Nordeste", correct: false },
        { id: 4, text: "Região Centro-Oeste", correct: false }
    ]
},
{
    question: "Qual cidade brasileira é famosa por sofrer com enchentes recorrentes?",
    answers: [
        { id: 1, text: "Fortaleza", correct: false },
        { id: 2, text: "Curitiba", correct: false },
        { id: 3, text: "Belo Horizonte", correct: true },
        { id: 4, text: "Brasília", correct: false }
    ]
},
{
    question: "Além das chuvas, qual outro fator contribui para as enchentes?",
    answers: [
        { id: 1, text: "A construção de praças públicas", correct: false },
        { id: 2, text: "O excesso de áreas impermeabilizadas", correct: true },
        { id: 3, text: "A falta de calçadas largas", correct: false },
        { id: 4, text: "A presença de florestas", correct: false }
    ]
},
{
    question: "O que significa impermeabilização do solo nas cidades?",
    answers: [
        { id: 1, text: "Construção de lagos artificiais", correct: false },
        { id: 2, text: "Retirada de lixo das ruas", correct: false },
        { id: 3, text: "Cobertura do solo por asfalto e concreto", correct: true },
        { id: 4, text: "Uso de árvores para bloquear a chuva", correct: false }
    ]
},
{
    question: "Como o lixo acumulado nas ruas contribui para as enchentes?",
    answers: [
        { id: 1, text: "Impede o escoamento da água, entupindo bueiros", correct: true },
        { id: 2, text: "Absorve a água das chuvas", correct: false },
        { id: 3, text: "Reduz a quantidade de água da chuva", correct: false },
        { id: 4, text: "Aumenta a fertilidade do solo", correct: false }
    ]
},
{
    question: "Quais são medidas preventivas contra enchentes urbanas?",
    answers: [
        { id: 1, text: "Implantação de sistemas de drenagem pluvial", correct: true },
        { id: 2, text: "Construção de casas em áreas de risco", correct: false },
        { id: 3, text: "Desmatar áreas próximas aos rios", correct: false },
        { id: 4, text: "Cimentar praças e parques", correct: false }
    ]
},
{
    question: "Como o desmatamento afeta as enchentes no Brasil?",
    answers: [
        { id: 1, text: "Favorece a infiltração da água", correct: false },
        { id: 2, text: "Aumenta a erosão e o assoreamento dos rios", correct: true },
        { id: 3, text: "Diminui o volume de água nos rios", correct: false },
        { id: 4, text: "Promove o equilíbrio hídrico", correct: false }
    ]
},
{
    question: "Qual dessas alternativas NÃO é uma consequência das enchentes?",
    answers: [
        { id: 1, text: "Melhoria na infraestrutura urbana", correct: true },
        { id: 2, text: "Danos materiais", correct: false },
        { id: 3, text: "Doenças de veiculação hídrica", correct: false },
        { id: 4, text: "Perda de vidas humanas", correct: false }
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

// Mudança de fundo
let lightTheme = document.getElementById("claro");
let darkTheme = document.getElementById("escuro");
let greyTheme = document.getElementById("cinza");

lightTheme.addEventListener("click", changeBackgroundWhite);
darkTheme.addEventListener("click", changeBackgroundBlack);
greyTheme.addEventListener("click", changeBackgroundGrey);

function changeBackgroundWhite() {
    document.body.style.backgroundColor = "white";
}

function changeBackgroundBlack() {
    document.body.style.backgroundColor = "black";
}

function changeBackgroundGrey() {
    document.body.style.backgroundColor = "grey";
}



