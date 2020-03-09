var questionsArray = // Score starts at 0.2%
[
    {
        "id": 1,
        "Qtext": "HOW OLD ARE YOU?",
        "ans": 
        [
            "YOUNGER THAN 40", // + 0%
            "OLDER THAN 40", // + 3%
        ]
    },
    {
        "id": 2,
        "Qtext": "DO YOU LIVE IN CHINA?",
        "ans": 
        [
            "YES", // + 1%
            "NO", // + 0%
        ]
    },
    {
        "id": 3,
        "Qtext": "HOW MANY TIMES DO YOU WASH YOUR HANDS WITH SOAP PER DAY?",
        "ans": 
        [
            "1 OR 2 TIMES", // + 0.03%
            "3 TO 5 TIMES", // + 0%
            "MORE THAN 5 TIMES" // - 0.03%
        ]
    },
    {
        "id": 4,
        "Qtext": "HOW LONG DO YOU WASH YOUR HANDS FOR?",
        "ans": 
        [
            "LESS THAN 10 SECONDS", // + 0.03%
            "10 TO 20 SECONDS", // + 0.03%
            "20 SECONDS OR MORE" // + 0%
        ]
    },
    {
        "id": 5,
        "Qtext": "DO YOU USE AN ALCOHOL-BASED HAND SANITIZER THROUGHOUT THE DAY?",
        "ans": 
        [
            "YES", // + 0%
            "NO", // + 0.03%
        ]
    },
    {
        "id": 6,
        "Qtext": "DO YOU SHAKE HANDS, HUG, OR KISS PEOPLE?",
        "ans": 
        [
            "YES", // + 0.03%
            "NO", // + 0%
        ]
    },
    {
        "id": 7,
        "Qtext": "DO YOU WEAR A MASK WITH FFP2 OR FFP3 BASED FILTER?",
        "ans": 
        [
            "YES", // + 0%
            "NO", // + 0.03%
        ]
    },
    {
        "id": 8,
        "Qtext": "DO YOU KEEP AT LEAST ONE METER AWAY FROM OTHER PEOPLE?",
        "ans": 
        [
            "YES", // + 0%
            "NO", // + 0.03%
        ]
    },
    {
        "id": 9,
        "Qtext": "DO YOU TOUCH YOUR EYES, NOSE OR MOUTH WITH YOUR HANDS?",
        "ans": 
        [
            "YES", // + 0.03%
            "NO", // + 0%
        ]
    },
    {
        "id": 10,
        "Qtext": "DO YOU COVER YOUR MOUTH AND NOSE WHEN YOU SNEEZE OR COUGH?",
        "ans": 
        [
            "YES", // + 0%
            "NO", // + 0.03%
        ]
    },
    {
        "id": 11,
        "Qtext": "DO YOU CLEAN THE SURFACES WITH CHLORINE DISINFECTANTS OR ALCOHOL-BASED PRODUCTS?",
        "ans": 
        [
            "YES", // + 0%
            "NO", // + 0.03%
        ]
    },
    {
        "id": 12,
        "Qtext": "DID YOU HAVE A RECENT TRIP TO CHINA?",
        "ans": 
        [
            "YES", // + 1.5%
            "NO", // + 0%
        ]
    },
    {
        "id": 13,
        "Qtext": "HAVE YOU BEEN IN CONTACT WITH PEOPLE BACK FROM CHINA?",
        "ans": 
        [
            "YES", // + 1%
            "NO", // + 0%
        ]
    },
    {
        "id": 14,
        "Qtext": "DO YOU WEAR OVERLAPPING MASKS?",
        "ans": 
        [
            "YES", // - 0.01%
            "NO", // + 0.01%
        ]
    },
    {
        "id": 15,
        "Qtext": "WHEN YOU COUGH, DO YOU COVER YOUR MOUTH WITH YOUR HANDS?",
        "ans": 
        [
            "YES", // + 0.4%
            "NO", // + 0%
        ]
    },
    {
        "id": 16,
        "Qtext": "WHEN YOU COUGH, DO YOU COUGH INTO YOUR ELBOW?",
        "ans": 
        [
            "YES", // - 0.02%
            "NO", // + 0.02%
        ]
    },
    {
        "id": 17,
        "Qtext": "WHEN YOU COUGH, DO YOU COUGH INTO A DISPOSABLE HANDKERCHIEF?",
        "ans": 
        [
            "YES", // - 0.02%
            "NO", // + 0.02%
        ]
    },
    {
        "id": 18,
        "Qtext": "DO YOU WASH YOUR HANDS WITH SOAP AFTER CONTACT WITH PETS/ANIMALS?",
        "ans": 
        [
            "YES", // + 0%
            "NO", // + 0.06%
        ]
    },
    {
        "id": 19,
        "Qtext": "DO YOU HAVE FEVER, COUGH, DIFFICULTY BREATHING, MUSCLE ACHES, OR FATIGUE?",
        "ans": 
        [
            "YES", // + 5%
            "NO", // + 0%
        ]
    },
    {
        "id": 20,
        "Qtext": "IF ANSWERED YES, HOW WOULD YOU RATE THEIR INTENSITY?",
        "ans": 
        [
            "NORMAL", // + 0%
            "STRONGER THAN USUAL", // + 10%
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
    console.log(correct);

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
    <div>${questionsArray[qNum-1].Qtext}</div>
    `;

    answer.innerHTML = 
    `
    ${displayAnswers(questionsArray[qNum-1].ans)}
    `;
}); 


var displayAnswers = (answersObj) =>
{
    for (let i = 0; i < answersObj.length; i++) 
    {
        if(correct.includes(answersObj[i]))
        {
            answer.innerHTML += 
            `
                <div class="option"><input type="radio" name="option" checked value="${ answersObj[i] }" />${i + 1} -  ${ answersObj[i] }</div>
            `;
        }
        else
        {
            answer.innerHTML += 
            `
                <div class="option"><input type="radio" name="option" value="${ answersObj[i] }" />${i + 1} -  ${ answersObj[i] }</div>
            `;
        }
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
 * [DONE] 2. Previous Button show the chosen result when clicked.
 * 3. Show results using ChartJS and a text and the sources of the data, 
      and the formula of the result. 
 * 4. Responsiveness.     
 * 6. ADS.
 * 7. Testing.
 * 8. Hosing.
 * 
 *  */  
