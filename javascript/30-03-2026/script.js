const Questions = [
    {
        question: "Which keyword is used to describe a varibale in javascript.",
        options: ["var", "int", "string", "define"],
        answer: 0
    },
    {
        question: " Which function is used to serialize an object into a JSON string in Javascript",
        options: ["stringify()", "parse()", "convert()", "None of the above"],
        answer: 0
    },
    {
        question: "Which of the following are closures in Javascript?",
        options: ["Variable", "function", "object", "All of the above"],
        answer: 3
    },
    {
        question: "Which of the following is not a Javascript framework?",
        options: ["Node", "Vue", "React", "Cassandra"],
        answer: 3
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["getElementById()", "getElementByClassName()", "Both A and B", "None of the Above"],
        answer: 2
    }

]

/* static var*/

let timeRemaining = 300;
let currentQuestion = 0;
let startTime = Date.now();
let selectedAnswer = null;
let score = 0;
let timeInterval;

// console.log(score);
// console.log("startTime", startTime);

/* Dom Elements */

const quizBody = document.getElementById("quizBody")
const questionCounter = document.getElementById("questionCounter")
const nextBtn = document.getElementById("nextBtn")
const progressBar = document.getElementById("progressBar")
const timer = document.getElementById("timer")
const resultsContainer = document.getElementById("resultsContainer")
const quizFooter = document.getElementById("quizFooter")
const restartBtn = document.getElementById("restartBtn")

const initQuizApp = () => {

    let timeRemaining = 300;
    let currentQuestion = 0;
    let startTime = Date.now();
    let selectedAnswer = null;
    let score = 0;
    let timeInterval;

    resultsContainer.classList.add("content-hide")

    startTimer()

    loadQuestion()
}

// timer

const startTimer = () => {
    clearInterval(timeInterval)
    timeInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay()
        // console.log(timeRemaining);
        if(timeRemaining <= 0){
            clearInterval(timeInterval)
            showResult()
        }

    } , 1000)
}

const updateTimerDisplay = () => {
    const minutes = Math.floor(timeRemaining / 60);

    const seconds = timeRemaining % 60;

    timer.textContent = `${minutes.toString().padStart(2 , "0")} : ${seconds.toString().padStart(2 , "0")}`

    // console.log(timer);
}

// quiz question rendering 

const loadQuestion = () => {

    if(currentQuestion >= Questions.length){
        showResult()
        return;
    }

    const question = Questions[currentQuestion]

    selectedAnswer = null;

    nextBtn.disabled = true;

    const progress = (currentQuestion / Questions.length) * 100

    questionCounter.textContent = `Question ${currentQuestion + 1} of ${Questions.length}`

    // render question content

    let html = `
    
    <div class="question-container">
        <h3>${currentQuestion + 1}. ${question.question}</h3>
    </div>
    <div>

    `;

    question.options.forEach((option , index) => {
        const letter = String.fromCharCode(65 + index)
        
        html += `
            <div class="answer-option" data-index = ${index}>
                <div>${letter}</div>
                <div>${option}</div>
            </div>
        
        `
        
    });

    quizBody.innerHTML = html

    console.log(progress);
    console.log(question.question);

    document.querySelectorAll(".answer-option").forEach((option) => option.addEventListener("click" , selecteAnswer))
}

const selecteAnswer = (e) => {

    const option = e.currentTarget

    const index = parseInt(option.dataset.index)

    console.log('index',  index);
    

    /* selection method */      /* remove previous selection */

    document.querySelectorAll(".answer-option").forEach((option) => option.classList.remove("selected"))
    
    // add selection

    option.classList.add("selected")
    selectedAnswer = index;

    console.log("selectedAnswer" , selectedAnswer);

    nextBtn.disabled = false;

}

// next question

const nextQuestion = () => {

    console.log("nextQuestion");

    console.log('selectedAnswer' , selectedAnswer);
    
    if(selectedAnswer === null) return ;

    const correct = Questions[currentQuestion].answer

    const option = document.querySelectorAll(".answer-option")

    option.forEach((option) => {
        option.style.pointerEvent = "none"
    })

    nextBtn.disabled = true

    if(selectedAnswer === correct){
        score++;
    }

    option[correct].classList.add("correct")


    if(selectedAnswer != correct){
        option[selectedAnswer].classList.add("incorrect")
    }

    setTimeout(() => {
        if(currentQuestion >= Questions.length){
            showResult()
            return ;
        }

        currentQuestion++;
    
        loadQuestion()

    } , 1000)

}

const showResult = () => {

    document.getElementById("quizContainer").classList.add("content-hide")

    quizBody.innerHTML = "";
    quizFooter.classList.add(".content-hide")

    // result

    resultsContainer.classList.remove("content-hide")

    const timeTaken = Math.floor((Date.now() - startTime) / 1000)


    const persentage = Math.floor((score / Questions.length) * 100)

    document.getElementById("finalScore").textContent = persentage + '%'

    document.getElementById("correctCount").textContent = score;

    document.getElementById("incorrectCount").textContent = Questions.length - score

    document.getElementById("totalQuestions").textContent = Questions.length

    const minute = Math.floor(timeTaken / 60)

    const second = timeTaken %  60

    document.getElementById("timeTaken").textContent = `${minute} : ${second}`


    
}

document.addEventListener("DOMContentLoaded", () => {
    initQuizApp()
    selecteAnswer()
    restartBtn.addEventListener("click" , initQuizApp)
})

nextBtn.addEventListener("click" , nextQuestion)


initQuizApp()