var questionsArray = 
[
    {
        "id": 1,
        "Qtext": "DO YOU WASH YOUR HANDS ?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 2,
        "Qtext": "DO YOU LIVE IN ITALY OR CHINE ?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 3,
        "Qtext": "HOW MANY TIMES YOU WASH YOUR HANDS PER DAY ?",
        "ans": 
        [
            1,
            2,
            3
        ]
    },
    {
        "id": 4,
        "Qtext": "HOW OLD ARE YOU?",
        "ans": 
        [
            1,
            2,
            3
        ]
    },
    {
        "id": 5,
        "Qtext": "DO YOU WORK IN A PLACE FULL OF PEOPLE ?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
];

var quiz = document.querySelector('.quiz');
var container = document.querySelector('.container');
var header = document.querySelector('.header');
var question = document.querySelector('.question');
var answer = document.querySelector('.answer');
var next = document.querySelector('.next');
var pre = document.querySelector('.pre');
var qNum = 0;


quiz.addEventListener('click', () => 
{
    quiz.style.display = "none";
    container.style.display = "flex";
    header.style.display = "none";
});

next.addEventListener('click', () => 
{
    answer.innerHTML="";
    question.innerHTML = 
    `
    <div>${questionsArray[qNum].Qtext}</div>
    `;

    answer.innerHTML = 
    `
   ${displayAnswers(questionsArray[qNum].ans)}
    `;

    ++qNum;
});


pre.addEventListener('click', () => 
{
    answer.innerHTML="";
    --qNum;
    question.innerHTML = 
    `
    <div>${questionsArray[qNum].Qtext}</div>
    `;

    answer.innerHTML = 
    `
    ${displayAnswers(questionsArray[qNum].ans)}
    `;
});

console.log(questionsArray[qNum].ans);

var displayAnswers = (answersObj) =>
{
    console.log(answersObj)
   
    for (let i = 0; i < answersObj.length; i++) {
        answer.innerHTML += 
            `
                <div class="option">${i + 1} -  ${ answersObj[i] }</div>
            `;
    }
    return answer.innerHTML;
}



