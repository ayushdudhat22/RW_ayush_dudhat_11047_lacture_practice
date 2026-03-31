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

/* static var */

let timeRemaining = 300;
let currentQuestion = 0;
let startTime = Date.now();
let selectedAnswer = null;
let score = 0;
let timeInterval;

console.log(score);
console.log("startTime", startTime);



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
}

// timer

const startTimer = () => {
    clearInterval(timeInterval)
    timeInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay()
        console.log(timeRemaining);
        if(timeRemaining <= 0){
            clearInterval(timeInterval)
        }

    } , 1000)
}

const updateTimerDisplay = () => {
    const minutes = Math.floor(timeRemaining / 60);

    const seconds = timeRemaining % 60;

    timer.textContent = `${minutes.toString().padStart(2 , "0")} : ${seconds.toString().padStart(2 , "0")}`

    console.log(timer);
}

// quiz question rendering 

const loadQuestion = () => {

    const question = Questions[currentQuestion]

    selectedAnswer = null;

    nextBtn.disabled = true;

    const progress = (currentQuestion / Questions.length) * 100

    questionCounter.textContent = `Question ${currentQuestion + 1} of ${Questions.length}`

    render question content

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

    /* selection method */      /* remove previous selection */

    document.querySelectorAll(".answer-option").forEach((option) => option.classList.remove("selected"))
    
    // add selection

    option.classList.add("selected")
    selectedAnswer = index;

    console.log("selectedAnswer" , selectedAnswer);

    nextBtn.disabled = false;

}

document.addEventListener("DOMContentLoaded", () => {
    initQuizApp()
    loadQuestion()
    selecteAnswer()
})