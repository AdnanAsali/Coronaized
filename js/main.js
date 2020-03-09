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
        "Qtext": "DO YOU LIVE IN ITALY OR CHINA ?",
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
var correct = [];
var qNum = 0;


quiz.addEventListener('click', () => 
{
    quiz.style.display = "none";
    container.style.display = "flex";
    header.style.display = "none";
});

next.addEventListener('click', () => 
{
    if(qNum !== 0)
    {
        saveAns(qNum);
    }
    
    answer.innerHTML="";
    question.innerHTML = 
    `
    <div>${questionsArray[qNum].Qtext}</div>
    `;
    
    answer.innerHTML = 
    `
    ${displayAnswers(questionsArray[qNum].ans)}
    `;
    
    if( qNum !== questionsArray.length )
    {
        ++qNum;
    }
    console.log(qNum);
    
    if(qNum == questionsArray.length)
    {
        console.log('finished the quiz');
        answer.innerHTML= "FINISHED THE QUIZ GO TO RESULTS";
    }
});


pre.addEventListener('click', () => 
{ 
    if(qNum !== 0)
    {
        --qNum;
    }
    answer.innerHTML="";
    question.innerHTML = 
    `
    <div>${questionsArray[qNum].Qtext}</div>
    `;

    answer.innerHTML = 
    `
    ${displayAnswers(questionsArray[qNum].ans)}
    `;
}); 


var displayAnswers = (answersObj) =>
{
    for (let i = 0; i < answersObj.length; i++) 
    {
        answer.innerHTML += 
            `
                <div class="option"><input type="radio" name="option" value="${ answersObj[i] }" />${i + 1} -  ${ answersObj[i] }</div>
            `;
    }

    return answer.innerHTML;
}

var saveAns = (n) =>
{
    let chosen = document.querySelector('input:checked')
    --n;
    for (let i = 0; i < questionsArray[n].ans.length; i++) 
    {
        if(chosen.value == questionsArray[n].ans[i])
        {
            correct.push(questionsArray[n].ans[i]);
            break;
        }
    }
}

/**
 * TODO:
 * 
 * 1. Local Storage instead of a DB.
 * 2. Previous Button show the chosen result when clicked.
 * 3. Show results using ChartJS and a text and the sources of the data, 
      and the formula of the result. 
 * 4. ADS
 * 5. Testing
 * 6. Hosing
 * 
 *  */  
