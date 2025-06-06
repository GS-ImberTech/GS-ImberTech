const menuClick = document.getElementById("menubtn");
var show = {showdisplay: true}

// Menu hamburguer
menuClick.addEventListener('click', function (event){

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

// Slider

let slideAtual = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

btnNext.addEventListener('click', function() {
    nextSlide();
});

btnPrev.addEventListener('click', function() {
    prevSlide();
});

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    slideAtual = (slideAtual + 1) % totalSlides;
    showSlide(slideAtual);
}

function prevSlide() {
    slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
    showSlide(slideAtual);
}

setInterval(nextSlide, 5000)

// Quiz
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
const nextButton = document.getElementById("nextbtn");

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

// Mudança de tema
const secoes = [textoenchentes, quiz, enchentes, tecnologia, objetivos, publicoAlvo, beneficios, usoDiario, contato, quizborder]
const gradientes = [btn1, btn2, gradiente0, gradiente, gradiente1, gradiente2, gradiente3, gradiente4, gradiente5, gradiente6, gradiente7, gradiente8]

let lightTheme = document.getElementById("claro");
let darkTheme = document.getElementById("escuro");
let allBlackTheme = document.getElementById("preto");


lightTheme.addEventListener("click", changeBackgroundWhite);
darkTheme.addEventListener("click", changeBackgroundBlack);
allBlackTheme.addEventListener("click", changeBackgroundallBlack);

function changeBackgroundWhite() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    document.getElementById(peopleblue.id).src = "src/assets/imgs/people-blue.png"
    document.getElementById(srclogo.id).src = "src/assets/imgs/logo.png"

    document.getElementById(menubtn.id).style.backgroundColor = "#083d83";
    document.getElementById(menulist.id).style.backgroundColor = "#14488b";
    

    document.getElementById(h1inicio.id).style.color = "black";

    document.getElementById(question.id).style.color = "black";
    document.getElementById(quiz.id).style.color = "white";

    document.getElementById(btnPrev.id).style.backgroundColor = "#3061a4";
    document.getElementById(btnNext.id).style.backgroundColor = "#3061a4";

    document.getElementById(formSend.id).style.backgroundColor = "#3061a4";
    document.getElementById(formReset.id).style.backgroundColor = "#3061a4";
    

    document.getElementById(nextbtn.id).style.backgroundImage = 'radial-gradient(rgb(48, 97, 164), rgb(5, 51, 113))';
    document.getElementById(nextbtn.id).style.color = "white"; 

    document.getElementById(btn0.id).style.color = "black";
    document.getElementById(btn0.id).style.borderColor = "black";
    document.getElementById(btn0.id).style.backgroundColor = "white";

    for (let i = 0; i < secoes.length; i++) {
        document.getElementById(secoes[i].id).style.backgroundColor = 'white';
    }
    for (let i = 2; i < secoes.length; i++) {
      document.getElementById(secoes[i].id).style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px -10px 20px,  rgba(0, 0, 0, 0.22) 0px 19px 38px';
    }  
    for (let i=0; i < gradientes.length; i++){
        document.getElementById(gradientes[i].id).style.backgroundImage = 'radial-gradient(rgb(48, 97, 164), rgb(5, 51, 113))';
    }

}

function changeBackgroundBlack() {
    document.body.style.backgroundColor = "rgb(4, 12, 22)";
    document.body.style.color = "white";

    document.getElementById(srclogo.id).src = "src/assets/imgs/logo-dark.png"
    document.getElementById(peopleblue.id).src = "src/assets/imgs/people-blue.png"

    document.getElementById(menubtn.id).style.backgroundColor = "rgb(0, 25, 58)";
    document.getElementById(menulist.id).style.backgroundColor = "rgb(5, 32, 67)";

    document.getElementById(h1inicio.id).style.color = "white";

    document.getElementById(question.id).style.color = "white";
    document.getElementById(quiz.id).style.color = "rgb(0, 15, 34)";

    document.getElementById(btnPrev.id).style.backgroundColor = "rgb(0, 15, 34)";
    document.getElementById(btnNext.id).style.backgroundColor = "rgb(0, 15, 34)";

    document.getElementById(formSend.id).style.backgroundColor = "rgb(8, 40, 83)";
    document.getElementById(formReset.id).style.backgroundColor = "rgb(8, 40, 83)";

    document.getElementById(nextbtn.id).style.backgroundImage = 'radial-gradient(rgb(8, 40, 83),rgb(0, 25, 58)';
    document.getElementById(nextbtn.id).style.color = "white"; 

    document.getElementById(btn0.id).style.color = "white";
    document.getElementById(btn0.id).style.borderColor = "black";
    document.getElementById(btn0.id).style.backgroundColor = "rgb(4, 12, 22)";

    for (let i = 0; i < secoes.length; i++) {
        document.getElementById(secoes[i].id).style.backgroundColor = 'rgb(0, 15, 34)';
    }
    for (let i = 2; i < secoes.length; i++) {
      document.getElementById(secoes[i].id).style.boxShadow = 'rgba(3, 3, 3, 0.3) 0px 19px 38px, rgba(3, 3, 3, 0.22) 0px 15px 12px';
    }  
    for (let i=0; i < gradientes.length; i++){
        document.getElementById(gradientes[i].id).style.backgroundImage = 'radial-gradient(rgb(8, 40, 83),rgb(0, 25, 58)';
    }
}

function changeBackgroundallBlack() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "white";

    document.getElementById(srclogo.id).src = "src/assets/imgs/logo-allblack.png"
    document.getElementById(peopleblue.id).src = "src/assets/imgs/people-white.png"

    document.getElementById(menubtn.id).style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById(menulist.id).style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById(menulist.id).style.borderColor = "rgb(255, 255, 255)";

    document.getElementById(h1inicio.id).style.color = "black";

    document.getElementById(question.id).style.color = "white";
    document.getElementById(quiz.id).style.color = "rgb(0, 0, 0)";

    document.getElementById(btnPrev.id).style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById(btnNext.id).style.backgroundColor = "rgb(0, 0, 0)";

    document.getElementById(formSend.id).style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById(formReset.id).style.backgroundColor = "rgb(0, 0, 0)";

    document.getElementById(nextbtn.id).style.backgroundImage = 'radial-gradient(rgb(255, 255, 255),rgb(255, 251, 251)';
    document.getElementById(nextbtn.id).style.color = "black"; 
    
    document.getElementById(btn0.id).style.color = "black";
    document.getElementById(btn0.id).style.borderColor = "black";
    document.getElementById(btn0.id).style.backgroundColor = "white";

    for (let i = 0; i < secoes.length; i++) {
        document.getElementById(secoes[i].id).style.backgroundColor = 'rgb(0, 0, 0)';
        document.getElementById(secoes[i].id).style.boxShadow = 'none';
    }
    for (let i=0; i < gradientes.length; i++){
        document.getElementById(gradientes[i].id).style.backgroundImage = 'radial-gradient(rgb(0, 0, 0),rgb(0, 0, 0)';
    }
}

// Validação campos formulário
document.getElementById("formInfo").addEventListener("submit" , function(event){
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let telefone = document.getElementById("telefone")
    let autorização = document.getElementById("autorização")

    if (nome.value == "" && telefone.value == "" && email.value == ""){
        alert("Preencha todos os campos para registrar interesse")
        event.preventDefault();
    } 

    else if (nome.value == "" && telefone.value == "" || nome.value == "" && email.value == "" ||
        telefone.value == "" && nome.value == "" || telefone.value == "" && email.value == "" ||
        telefone.value == "" && email.value == "" || nome.value == "" && email.value == ""){
        alert("Preencha os dois campos vazios para registrar interesse")
        event.preventDefault();
    } 

    else if (nome.value == ""){
        alert("Para registrar interesse é necessário informar seu nome")
        event.preventDefault();}
    else if (telefone.value == ""){
        alert("Para registrar interesse é necessário informar um telefone para contato")
        event.preventDefault();}
    else if (email.value == ""){
        alert("Para registrar interesse é necessário informar um e-mail para contato")
        event.preventDefault();}
    else if (!(autorização.checked)){
        alert("Para registrar interesse é necessário autorizar o compartilhamento dos dados")
        event.preventDefault()
    }
})
