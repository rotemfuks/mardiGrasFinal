const questions=[
{
   question:"What does mardi gras means?",
   answers:[
    {text:"SHROVE MONDAY", correct: false},
    {text:"ASH WEDNESDAY", correct: false},
    {text:"GOOD FRIDAY", correct: true},
    {text:"FAT TUESDAY", correct: false},
   ]
},
{
     question:"what is the mardi gras slogan? ",
   answers:[
    {text:"QUE LA FETE COMMENCE", correct: false},
    {text:"VIVRE VITE,MOURIR JEUNE", correct: false},
    {text:"VOULEZ-VOUS COUCHER AVEC MOI", correct: false},
    {text:"LAISSEZ LES BONS TEMPS ROULER", correct: true},
   ]
},
{
     question:"what groups organize the mardi gras parades?",
   answers:[
    {text:"FAXIONS", correct: false},
    {text:"CHOROS", correct: false},
    {text:"KREWES", correct: true},
    {text:"REVELRIES", correct: false},
   ]
},
{
     question:"mardi gras is part of what larger festival?",
   answers:[
    {text:"CARNIVAL", correct: true},
    {text:"SAMHAIN", correct: false},
    {text:"LUBILEE", correct: false},
    {text:"SATURNALIA", correct: false},
   ]
},
{
     question:"who started the bead-throwing tradition?",
   answers:[
    {text:"GYPSY ROSE LEE", correct: false},
    {text:"THEODORE ROOSEVELT", correct: false},
    {text:"DINYSUS", correct: false},
    {text:"SANTA CLAUS", correct: true},
   ]
},
{
     question:"where was the first organized mardi gras celebration in thr united states?",
   answers:[
    {text:"GALVESTON, CANADA", correct: false},
    {text:"MOBILE, ALABAMA", correct: true},
    {text:"ST.LOUIS, MISSOURI", correct: false},
    {text:"FAT TUESDAY", correct: false},
   ]
},
{
     question:"what are the official colors of mardi gras?",
   answers:[
    {text:"BLACK, GREEN & GOLD", correct: false},
    {text:"PURPLE, BLACK & GOLD", correct: false},
    {text:"PURPLE, GREEN & GOLD", correct: true},
    {text:"PURPLE, GREEN & BLACK", correct: false},
   ]
},
{
     question:"what day does carnial season begin in new orleans?",
   answers:[
    {text:"EIGHT NIGHT", correct: false},
    {text:"SIXTH NIGHT", correct: false},
    {text:"TENTH NIGHT", correct: false},
    {text:"TWELFTH NIGHT", correct: true},
   ]
},
{
     question:"What is the oldest known krewe?",
   answers:[
    {text:"KREWE OF BACCHUS", correct: false},
    {text:"KREWE OF CLEOPATRA", correct: false},
    {text:"KREWE OF COMUS", correct: true},
    {text:"KREWE OF ORPHEUS", correct: false},
   ]
},
{
     question:"What kind of cake is associated with mardi gras?",
   answers:[
    {text:"KING CAKE", correct: true},
    {text:"QUEEN CAKE", correct: false},
    {text:"ANGEL'S FOOD CAKE", correct: false},
    {text:"DEVIL'S FOOD CAKE", correct: false},
   ]
}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML= questionNo +". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState()
{
    nextButton.style.display="none";
    while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect= selectedBtn.dataset.correct==="true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
if(button.dataset.correct==="true"){
    button.classList.add("correct");
}
button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML= `you scored ${score} out of ${questions.length}!`; 
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
