'use strict';

const  questions=[
    {

        question:'Which is larger animal in the world',
        answers:[
            { text:'Shark',correct:false},
            { text:'Blue whale',correct:true},
            { text:'Elephant',correct:false},
            { text:'Giraffe',correct:false},
        ]
    },

    {

        question:'Which is the smallest continent in the world',
        answers:[
            { text:'Asia',correct:false},
            { text:'Australia',correct:true},
            { text:'Arctic',correct:false},
            { text:'Africa',correct:false},
        ]
    },

    {

        question:'Which is the largest desert in the world',
        answers:[
            { text:'Kalahari',correct:false},
            { text:'Gobi',correct:false},
            { text:'Sahara',correct:false},
            { text:'Antarctica',correct:true},
        ]
    },

    {

        question:'Which is the smallest country in the world',
        answers:[
            { text:'Vatican',correct:true},
            { text:'Bhutan',correct:false},
            { text:'Nepal',correct:false},
            { text:'Shri Lanka',correct:false},
        ]
    }
];

const questionElement=document.getElementById('question');
const answerButton=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');



let currentQuestionindex=0;
let score=0;

function startQuiz(){
    currentQuestionindex=0;
    score=0;
    nextButton.innerHTML='Next';
    showQuestion();
     
}


function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionindex];
    let questionNO=currentQuestionindex + 1;
    questionElement.innerHTML= questionNO + '. ' + currentQuestion.question;


    currentQuestion.answers.forEach( answer =>{
        const button= document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    })
}

function resetState(){
    nextButton.style.display='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect=selectedBtn.dataset.correct==='true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
confetti();

        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct');
        }
        button.disabled='true';
    });

    nextButton.style.display='block';
}


function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML='Play Again';
    nextButton.style.display='block';
}

function handleNextButton(){
    currentQuestionindex ++;
    if(currentQuestionindex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionindex < questions.length){
        handleNextButton();

    } else{
        startQuiz();
    }
})
startQuiz();


var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});