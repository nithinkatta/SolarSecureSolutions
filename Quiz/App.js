var quizdata =[
    {
        question: "Which framework is used for Mobile App Development?",
        a: "React Native",
        b: "Laravel",
        c: "Django",
        d: "Angular",
        correct: "a",
    },

    {
        question: "Which is not a programming language?",
        a: "Java",
        b: "Python",
        c: "HTML",
        d: "C++",
        correct: "c",
    },

    {
        question: "Which is not a framework?",
        a: "React",
        b: "Laravel",
        c: "Django",
        d: "HTML",
        correct: "d",
    },
    {
        question: "Which is not a database?",
        a: "MongoDB",
        b: "MySQL",
        c: "SQLite",
        d: "React",
        correct: "d",

    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll("btn"); 
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a");
const b_text = document.getElementById("b");
const c_text = document.getElementById("c");
const d_text = document.getElementById("d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizdata[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizdata[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizdata.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizdata.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
}

)


