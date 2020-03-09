var questionsArray = 
[
    {
        "id": 1,
        "Qtext": "HOW OLD ARE YOU?",
        "ans": 
        [
            "YOUNGER THAN 40",
            "OLDER THAN 40",
        ]
    },
    {
        "id": 2,
        "Qtext": "DO YOU LIVE IN CHINA?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 3,
        "Qtext": "HOW MANY TIMES DO YOU WASH YOUR HANDS WITH SOAP PER DAY?",
        "ans": 
        [
            "1 OR 2 TIMES",
            "3 TO 5 TIMES",
            "MORE THAN 5 TIMES"
        ]
    },
    {
        "id": 4,
        "Qtext": "HOW LONG DO YOU WASH YOUR HANDS FOR?",
        "ans": 
        [
            "LESS THAN 10 SECONDS",
            "10 TO 20 SECONDS",
            "20 SECONDS OR MORE"
        ]
    },
    {
        "id": 5,
        "Qtext": "DO YOU USE AN ALCOHOL-BASED HAND SANITIZER THROUGHOUT THE DAY?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 6,
        "Qtext": "DO YOU SHAKE HANDS, HUG, OR KISS PEOPLE?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 7,
        "Qtext": "DO YOU SHAKE HANDS, HUG, OR KISS PEOPLE?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 8,
        "Qtext": "DO YOU WEAR A MASK WITH FFP2 OR FFP3 BASED FILTER?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 9,
        "Qtext": "DO YOU KEEP AT LEAST ONE METER AWAY FROM OTHER PEOPLE?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 10,
        "Qtext": "DO YOU TOUCH YOUR EYES, NOSE OR MOUTH WITH YOUR HANDS?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 11,
        "Qtext": "DO YOU COVER YOUR MOUTH AND NOSE WHEN YOU SNEEZE OR COUGH?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 12,
        "Qtext": "DO YOU COVER YOUR MOUTH AND NOSE WHEN YOU SNEEZE OR COUGH?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 13,
        "Qtext": "DO YOU CLEAN THE SURFACES WITH CHLORINE DISINFECTANTS OR ALCOHOL-BASED PRODUCTS?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 14,
        "Qtext": "DID YOU HAVE A RECENT TRIP TO CHINA?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 15,
        "Qtext": "HAVE YOU BEEN IN CONTACT WITH PEOPLE BACK FROM CHINA?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 16,
        "Qtext": "DO YOU WEAR OVERLAPPING MASKS?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 17,
        "Qtext": "WHEN YOU COUGH, DO YOU COVER YOUR MOUTH WITH YOUR HANDS?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 18,
        "Qtext": "WHEN YOU COUGH, DO YOU COUGH INTO YOUR ELBOW?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 19,
        "Qtext": "WHEN YOU COUGH, DO YOU COUGH INTO A DISPOSABLE HANDKERCHIEF?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 20,
        "Qtext": "DO YOU WASH YOUR HANDS WITH SOAP AFTER CONTACT WITH PETS/ANIMALS?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 21,
        "Qtext": "DO YOU HAVE FEVER, COUGH, DIFFICULTY BREATHING, MUSCLE ACHES, OR FATIGUE?",
        "ans": 
        [
            "YES",
            "NO",
        ]
    },
    {
        "id": 22,
        "Qtext": "IF ANSWERED YES, HOW WOULD YOU RATE THEIR INTENSITY?",
        "ans": 
        [
            "NORMAL",
            "STRONGER THAN USUAL",
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
 * 4. Responsiveness.     
 * 6. ADS.
 * 7. Testing.
 * 8. Hosing.
 * 
 *  */  
