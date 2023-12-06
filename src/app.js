// ALL WORK DONE IN THIS PROJECT IS THE WORK OF *MUHAMMAD SUHAIB AYUB* //
let index=0;
let number = 0;
const butnz = document.querySelectorAll('.mill');

function changeColour()
{
// Removes that one that has the class 'greenColor'
  removeClass();
// Takes index and adds the greenColor class which adds the light green colour 
  butnz[index].classList.add(`greenColor`);
// Increases index and then repeats
  index++;

  if(index === 16)
  {
      index = 0;
  }

  stopColours();

}

setInterval(changeColour, 100);

function removeClass()
{
    butnz.forEach(btn =>
    {
        btn.classList.remove(`greenColor`);
    });
}


function stopColours()
{
    number++;
    if(number >= 33)
    {
        butnz[0].classList.remove(`greenColor`);
        butnz[1].classList.remove(`greenColor`);
        butnz[2].classList.remove(`greenColor`);
        butnz[3].classList.remove(`greenColor`);
        butnz[4].classList.remove(`greenColor`);
        butnz[5].classList.remove(`greenColor`);
        butnz[6].classList.remove(`greenColor`);
        butnz[7].classList.remove(`greenColor`);
        butnz[8].classList.remove(`greenColor`);
        butnz[9].classList.remove(`greenColor`);
        butnz[10].classList.remove(`greenColor`);
        butnz[11].classList.remove(`greenColor`);
        butnz[12].classList.remove(`greenColor`);
        butnz[13].classList.remove(`greenColor`);
        butnz[14].classList.remove(`greenColor`);
        butnz[15].classList.remove(`greenColor`);
        
        clearInterval(changeColour);

    // Change colour 
if(round === 1)
if(currentPlace === 0)
{
    document.querySelector(`#zero`).style.backgroundColor = `#2fde26`;
}
else if(round === 2)
if(currentPlace === 0)
{
    document.querySelector(`#only75`).style.backgroundColor = `#2fde26`;
}
else if (round === 3)
if(currentPlace === 0)
{
    document.querySelector(`#hundo15`).style.backgroundColor = `#2fde26`;
}


    }
}


// RULES
// Generate random question, as user answers them correctly, he moves onto next money
// As User reaches $5000, HE PROCEEDS TO ROUND2 where an alert is displayed and current money is reset or is banked automatically (Call round1 again in round2 to display random questions)
// As user reaches 75k, HE PROCEEDS TO ROUND3, HE IS ALERTED THAT THIS IS THE FINAL ROUND! [Current money is reset and round1 is called again to display random set of questions]
// As user wins 1mill, alert he has won a million dollars and game ends.

// AFTER EACH ROUND USER MUST PRESS "BEGIN ROUND #" TO BEGIN THE ROUND

// RULES FOR EACH ROUND
// We check if the value of button is equal to the correctanswer of questionHolder
// Then we remove a question by splicing randomquestion,1
// Then we decrease the # of questions by randomQuestionz--
// Add curentMoney += roundMoney[currentPlane];


// Class of questions
class questions{
    constructor(q1, o1, o2, o3, o4, ans)
    {
        this.question = q1;
        this.option1 = o1;
        this.option2 = o2;
        this.option3 = o3;
        this.option4 = o4;
        this.correctAnswer = ans;
    }
}

// Array that holds the question, options and the answer
let questionHolder = [];

// Push new questions into an array that will hold questions
questionHolder.push(new questions(`Q. Who invented basketball?`, `A. James Naismith`, `B.Michael Jordan`, `C. John Tory`, `D. Kim Jon Un`, `A. James Naismith`));
questionHolder.push(new questions(`Q. Who is the best player in ball?`, `A. James Harden`, `B. Michael Jordan`, `C. Kobe Bryant`, `D. Kareem Abdul Jabbar`, `B. Michael Jordan`));
questionHolder.push(new questions(`Q. What year was basketball invented?`, `A. 1891`, `B. 1998`, `C. 1863`, `D. 500 B.C`, `A. 1891`));
questionHolder.push(new questions(`Q. Which is the only American Football team to go a whole season undefeated, including the Super Bowl?`, `A. The Miami Dolphins, in 1972.`, `B. Green Bay Packers, 1982`, `C. New York Jets, 1969`, `D. Kansas City Chiefs, 1970`, 'A. The Miami Dolphins, in 1972.'));
questionHolder.push(new questions(`Q. How many NBA championships did Michael Jordan win with the Chicago Bulls?`, `A. 4`, `B. 5`, `C. 6`, `D. 7`, `C. 6`));
questionHolder.push(new questions(`Q. Which is the only team to play in every soccer World Cup tournament?`, `A. Brazil`, `B. Argentina`, `C. Germany`, `D. Italy`, `A. Brazil`));
questionHolder.push(new questions(`Q. As of December 2016, which NFL team has won the most Super Bowls?`, `A. Patriots`, `B. Eagles`, `C. Steelers`, `D. China`, `C. Steelers`));
questionHolder.push(new questions(`Q. Who was the only person in NBA history to be named Most Valuable Player, Coach of the Year, and Executive of the Year?`, `A. Michael Jordan`, `B. Phil Jackson`, `C. Larry Bird`, `D. Bill Russell`, `C. Larry Bird`));
questionHolder.push(new questions(`Q. What country won the first World Cup?`,  `A. Brazil`, `B. Argentina`, `C. Germany`, `D. Uruguay`, `D. Uruguay`));
questionHolder.push(new questions(`Q. Who did pelicans draft in 2019 draft?`, `A. Zion`, `B. Lonzo`, `C. RJ Barrett`, `D. Tacko Fall`, `A. Zion`));
questionHolder.push(new questions(`Q. In what year did Connor Mcgregor beat Aldo?`, `A. 2015`, `B. 2014`, `C. 2013`, `D. 2016`, `A. 2015`));
questionHolder.push(new questions(`Q. What 2 compounds make up water?`, `A. Hydrogen and Oxygen`, `B. Mercury and Oxygen`, `C. Oxygen and Carbon`, `D. Water and Molecules`, `A. Hydrogen and Oxygen`));
questionHolder.push(new questions(`Q. You can't live without iron. Where in the body is most of the iron located?`, `A. Bones`, `B. Brain`, `C. Our Skin`, `D. In our Blood`, `D. In our Blood`));
questionHolder.push(new questions(`Q. Organic chemistry is the study of the compounds that make up living organisms. All organic molecules contain:`, `A. Carbon Only`, `B. Carbon and Nitrogen`, `C. Carbon and Hydrogen`, `D. Carbon, Hydrogen, and Oxygen`, `C. Carbon and Hydrogen`));
questionHolder.push(new questions(`Q. Who invented Soccer?`, `A. Johan Cruyff`, `B. Ronaldinho`, `C. Margin J. Jaxon`, `D. Messi`, `A. Johan Cruyff`));
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
questionHolder.push(new questions(`Q. Who drew Mona Lisa?`, `A. Leonardo da Vinci`, `B. Leonardo di Caprio`, `C. James Harden`, `D. Marcelo Vilenti`, `A. Leonardo da Vinci`));
questionHolder.push(new questions(`Q. When was Spongebob invented?`,  `A. 1889`, `B. 2001`, `C. 1956`, `D. 1999`, `D. 1999`));
questionHolder.push(new questions(`Q. When was Shakespeare born?`, `A. 1564`, `B. 1501`, `C. 1456`, `D. 1293`, `A. 1564`));
questionHolder.push(new questions(`Q. In what year did Connor Mcgregor beat Nate Diaz?`, `A. December 21st, 2015`, `B. July 2nd, 2014`, `C. May 5th, 2013`, `D. Aug 20th, 2016`, `D. Aug 20th, 2016`));
questionHolder.push(new questions(`Q. What 2 compounds make up Carbon Dioxide?`, `A. Carbon and Oxygen`, `B. Mercury and Oxygen`, `C. Oxygen and Carbon`, `D. Water and Molecules`, `A. Carbon and Oxygen`));
questionHolder.push(new questions(`Q. Spinach is high in which mineral?`, `A. Vitamin ABC`, `B. Oxygen`, `C. Iron`, `D. Vitamin K`, `C. Iron`));
questionHolder.push(new questions(`Q. Who is Muhammad Ali?`, `A. Baller`, `B. Golfer`, `C. Cricketer`, `D. Boxer`, `D. Boxer`));
questionHolder.push(new questions(`Q. Who invented baseball?`, `A. Abner Doubleday`, `B. Ronaldinho`, `C. Margin J. Jaxon`, `D. Joe Ingles`, `A. Abner Doubleday`));
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
questionHolder.push(new questions(`Q. What country is Manu Ginóbili from?`, `A. France`, `B. United States`, `C. Canada`, `D. Argentina`, 'D. Argentina'));
questionHolder.push(new questions(`Q. What is the record for most regular season wins, set by the Golden State Warriors in 2015-16?`, `A. 82`, `B. 67`, `C. 50`, `D. 73`, 'D. 73'));
questionHolder.push(new questions(`Q. Which of the following was never a teammate of Michael Jordan?`,`A. Steve Kerr`,`B. Dennis Rodman`,`C. Grant Hill`,`D. Toni Kukoc`, `C. Grant Hill`));
questionHolder.push(new questions(`Q. Who was the shortest player to win an MVP?`,`A. Steve Kerr`,`B. Allen Iverson`,`C. Spud Webb`,`D. Steve Nash`, `B. Allen Iverson`));



// Select all elements from HTML such as time, answers, buttons, moneytree,
let d1;
let d2; // call this in round 2
let d3; // call this in round 3
// Timer
let timer = document.querySelector(`.time`);
let time1 = 59;
let time2 = 45;
let time3 = 30;
// Round
let roundNumber = document.querySelector(`#round`);
// Creating arrays to hold round money
let round1Money = [0, 500, 1000, 2000, 3000, 5000, 7500];
let round2Money = [7500, 10000, 15000, 25000, 50000, 75000];
let round3Money = [75000, 150000, 250000, 500000, 1000000];
// Selecting answers
let ans1 = document.querySelector(`.option-1`);
let ans2 = document.querySelector(`.option-2`);
let ans3 = document.querySelector(`.option-3`);
let ans4 = document.querySelector(`.option-4`);
// Selecting all money values
// LAST ROUND (ROUND 3)
    const moneyMill = document.querySelector(`#mill1`),
        money5hundo = document.querySelector(`#hundo5`),
            money25hundo = document.querySelector(`#hundo25`),
                money15hundo = document.querySelector(`#hundo15`),
                // ROUND 2
                    money75hundo = document.querySelector(`#hundo75`),
                        money50Thousand = document.querySelector(`#hundo50`),
                            money25Thousand = document.querySelector(`#only25`),
                                money15Thousand = document.querySelector(`#only15`),
                                    money10Thousand = document.querySelector(`#only10`),
                                    // ROUND 1
                                        money75hundred = document.querySelector(`#only75`),
                                            money5 = document.querySelector(`#only5`),
                                                money3 = document.querySelector(`#only3`),
                                                    money2 = document.querySelector(`#only2`),
                                                        money1 = document.querySelector(`#only1`),
                                                            moneyfinal5 = document.querySelector(`#only500`),
                                                                moneyZero = document.querySelector(`#zero`);
const getQuestionHolder = document.querySelector(`.question`);
let randomQuestionz = 21;
// Get Bank Money Button value
let BankMoney = document.querySelector(`#bmonay`).addEventListener(`click`, saveMoney); // Add event listerner on this
let currentAddedMonay = document.querySelector(`#cmonay`);
let savedMoney = document.querySelector(`#total`);
let currentMoney = 0;
let banked = 0;
let correctlyAnswerd = 0;
let currentPlace = 0;
let round = 1;
let tries = 0;
// Get start button
let strtButton = document.querySelector(`#strt`);
strtButton.innerHTML = `Start Round 1`;
roundNumber.innerHTML = `<h3>Round 1</h3>`;

// Declare the variable outside but by putting its value inside round1,
// this variable gets the value thats passed into Round 1
let randomQues;


console.log(questionHolder);

// Window.onload ask player name, sex and age


// Function to disable all buttons after the player wins or looses
function disable()
{
    ans1.disabled = true;
    ans2.disabled = true;
    ans3.disabled = true;
    ans4.disabled = true;
    document.querySelector(`#bmonay`).disabled = true;
    clearInterval(d1);
    clearInterval(d2);
    clearInterval(d3);
    // strtButton.disabled = true;
}

disable();

function enable()
{
    ans1.disabled = false;
    ans2.disabled = false;
    ans3.disabled = false;
    ans4.disabled = false;
    document.querySelector(`#bmonay`).disabled = false;
    strtButton.disabled = false;
}


// Random Questions
function round1()
{
    // let value = ans1;
    randomQues = (Math.floor(Math.random() * randomQuestionz) + 1);
    console.log(randomQues);
    // Select question innerHTML from the HTML file
    getQuestionHolder.innerHTML = `${questionHolder[randomQues].question}`;

    console.log(randomQues);

    console.log(getQuestionHolder);

    // if(randomQues === 14)
    // {
    //     getQuestionHolder.innerHTML = (questionHolder[randomQues].question) - 1;
    // }

    // Selecting buttons and adding random values in them
    ans1.innerHTML = questionHolder[randomQues].option1;
    ans2.innerHTML = questionHolder[randomQues].option2;
    ans3.innerHTML = questionHolder[randomQues].option3;
    ans4.innerHTML = questionHolder[randomQues].option4;
    ans1.value = questionHolder[randomQues].option1;
    ans2.value = questionHolder[randomQues].option2;
    ans3.value = questionHolder[randomQues].option3;
    ans4.value = questionHolder[randomQues].option4;

    if(`${questionHolder[randomQues].question}` === undefined)
    {
        alert(`You have ran out of questions!`);
    }
}

round1();


// Check if button clicked is the right answer
function checkAnswer(value)
{
    if(round===1)
    {
    if(value===questionHolder[randomQues].correctAnswer)
    {
            alert(`Correct Answer!`);
            console.log(questionHolder[randomQues].correctAnswer);
            // Bottom code removes the question from the questionHolder array
            questionHolder.splice(randomQues, 1);
            // Bottom line reduces the multiplacation value which means number of questions
            randomQuestionz--;
            // If currentPlace is not yet 5, keep doign round1 and increasing currentplace
            if(currentPlace !== 5)
            {
                currentPlace++;
            }
            // Add money to the bank
            currentMoney = round1Money[currentPlace];
            currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
            setTreeColour();
            round1();
        }
        else
        {
            tries = tries + 1;
            checkTries();
            currentPlace = 0;
            currentMoney = 0;
            alert(`Incorrect Answer!`);
            questionHolder.splice(randomQues, 1);
            resetTreeColour();
            round1();
            randomQuestionz--;
        }
    } 
    else if(round === 2)
    {
        
        if(value === questionHolder[randomQues].correctAnswer)
        {
            if(currentPlace === 0)
            {
                money5.style.backgroundColor = ``;
                money75hundred.style.backgroundColor = `#2fde26`;
            }   
            alert(`Correct Answer!`);
            console.log(questionHolder[randomQues].correctAnswer);
            questionHolder.splice(randomQues, 1);
            randomQuestionz--;
            if(currentPlace !== 5)
            {
                currentPlace++;
            }
            // Adding round2 money if question is correct
            currentMoney = round2Money[currentPlace];
            currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
            setTreeColour2();
            round1();
        }
        else
        {
            tries = tries + 1;
            checkTries();
            currentPlace = 0;
            currentMoney = 0;
            alert(`Incorrect Answer!`);
            questionHolder.splice(randomQues, 1);
            resetTreeColour2();
            round1();
            randomQuestionz--;
        }
        
    }
    else if (round === 3)
    {
        if(value === questionHolder[randomQues].correctAnswer)
        {
            alert(`Correct Answer!`);
            questionHolder.splice(randomQues, 1);
            randomQuestionz--;
            if(currentPlace !== 5)
            {
                currentPlace++;
            }
            // Adding round2 money if question is correct
            currentMoney = round3Money[currentPlace];
            currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
            correctlyAnswerd++;
            console.log(`Correct: ${correctlyAnswerd}`);
            setTreeColour3();
            round1();
            if(currentMoney === 1000000)
            {
                alert(`You have won $1,000,000 Million Dollars!`);
                disable();
                strtButton.disabled = true;
                clearInterval(d3);
            }
        }
        else
        {
            tries = tries + 1;
            checkTries();
            currentPlace = 0;
            currentMoney = 0;
            alert(`Incorrect Answer!`);
            questionHolder.splice(randomQues, 1);
            resetTreeColour3();
            round1();
            randomQuestionz--;
        }
    }
    
}


// Button clicked event listerners on all buttons and pass check
ans1.addEventListener(`click`, function()
{
    checkAnswer(ans1.value);
})

ans2.addEventListener(`click`, function()
{
    checkAnswer(ans2.value);
})

ans3.addEventListener(`click`, function()
{
    checkAnswer(ans3.value);
    
})

ans4.addEventListener(`click`, function()
{
    checkAnswer(ans4.value);
    
})


// Bank function in which player can click to put money in banked money
// If bank current money is clicked, add the money to banked money total
function saveMoney()
{
    savedMoney.innerHTML = `Banked Money Total: ${banked}`;
    currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
    if(currentPlace !== 0)
    {
        alert(`You are walking away with ${currentMoney} dollars!\n\n Thanks for Playing!`); 
    }
    else
    {
        alert(`You are walking away with ${banked} dollars!\n\n Thanks for Playing!`); 
    }
    disable();
    strtButton.disabled = true;
}


// Set tree colour depending on current place for ROUND 1
function setTreeColour()
{
    if(currentPlace === 1)
    {
        moneyZero.style.backgroundColor = ``;
        moneyfinal5.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 2)
    {
        moneyfinal5.style.backgroundColor = ``;
        money1.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 3)
    {
        money1.style.backgroundColor = ``;
        money2.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 4)
    {
        money2.style.backgroundColor = ``;
        money3.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 5)
    {
        money3.style.backgroundColor = ``;
        money5.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 6)
    {
        money5.style.backgroundColor = ``;
        money75hundred.style.backgroundColor = `#2fde26`;
    }

}

// Set tree colour depending on current place FOR ROUND 2
function setTreeColour2()
{

    if(currentPlace === 1)
    {
        money75hundred.style.backgroundColor = ``;
        money10Thousand.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 2)
    {
        money10Thousand.style.backgroundColor = ``;
        money15Thousand.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 3)
    {
        money15Thousand.style.backgroundColor = ``;
        money25Thousand.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 4)
    {
        money25Thousand.style.backgroundColor = ``;
        money50Thousand.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 5)
    {
        money50Thousand.style.backgroundColor = ``;
        money75hundo.style.backgroundColor = `#2fde26`;
    }

}

// Set tree colour depending on current place FOR ROUND 3
function setTreeColour3()
{
    if(currentPlace === 1)
    {
        money75hundo.style.backgroundColor = ``;
        money15hundo.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 2)
    {
        money15hundo.style.backgroundColor = ``;
        money25hundo.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 3)
    {
        money25hundo.style.backgroundColor = ``;
        money5hundo.style.backgroundColor = `#2fde26`;
    }
    else if(currentPlace === 4)
    {
        money5hundo.style.backgroundColor = ``;
        moneyMill.style.backgroundColor = `#2fde26`;
    }

}

// Reset tree colour if answer is answered incorrectly
function resetTreeColour()
{
    moneyZero.style.backgroundColor = `#2fde26`;
    moneyfinal5.style.backgroundColor = ``;
    money1.style.backgroundColor = ``;
    money2.style.backgroundColor = ``;
    money3.style.backgroundColor = ``;
    money5.style.backgroundColor = ``;
    money75hundred.style.backgroundColor = ``;
    money10Thousand.style.backgroundColor = ``;
    money15Thousand.style.backgroundColor = ``;
    money25Thousand.style.backgroundColor = ``;
    money50Thousand.style.backgroundColor = ``;
    money75hundo.style.backgroundColor = ``;
    money15hundo.style.backgroundColor = ``;
    money25hundo.style.backgroundColor = ``;
    money5hundo.style.backgroundColor = ``;
    moneyMill.style.backgroundColor = ``;
    currentMoney = 0;
    currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
}


function resetTreeColour2()
{
    moneyZero.style.backgroundColor = ``;
    moneyfinal5.style.backgroundColor = ``;
    money1.style.backgroundColor = ``;
    money2.style.backgroundColor = ``;
    money3.style.backgroundColor = ``;
    money5.style.backgroundColor = ``;
    money75hundred.style.backgroundColor = `#2fde26`;
    money10Thousand.style.backgroundColor = ``;
    money15Thousand.style.backgroundColor = ``;
    money25Thousand.style.backgroundColor = ``;
    money50Thousand.style.backgroundColor = ``;
    money75hundo.style.backgroundColor = ``;
    money15hundo.style.backgroundColor = ``;
    money25hundo.style.backgroundColor = ``;
    money5hundo.style.backgroundColor = ``;
    moneyMill.style.backgroundColor = ``;
    currentMoney = 0;
    currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
}

function resetTreeColour3()
{
    moneyZero.style.backgroundColor = ``;
    moneyfinal5.style.backgroundColor = ``;
    money1.style.backgroundColor = ``;
    money2.style.backgroundColor = ``;
    money3.style.backgroundColor = ``;
    money5.style.backgroundColor = ``;
    money75hundred.style.backgroundColor = ``;
    money10Thousand.style.backgroundColor = ``;
    money15Thousand.style.backgroundColor = ``;
    money25Thousand.style.backgroundColor = ``;
    money50Thousand.style.backgroundColor = ``;
    money75hundo.style.backgroundColor = `#2fde26`;
    money15hundo.style.backgroundColor = ``;
    money25hundo.style.backgroundColor = ``;
    money5hundo.style.backgroundColor = ``;
    moneyMill.style.backgroundColor = ``;
    currentMoney = 0;
    currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
}



function decreaseTime1()
{
    timer.innerHTML = `<h4>Timer: ${time1}</h4>`;
    time1--;
    console.log(time1);
    // If time goes less than 0 or player earns more than 5k, clear the time and start round2
    if(currentMoney >= 5000 || banked >= 5000)
    {
        money5.style.backgroundColor = ``;
        money75hundred.style.backgroundColor = `#2fde26`;
        round = 2;
        round2();
        clearInterval(d1);
    }
    if(time1 <= 0)
    if(currentMoney <= 5000)
    {
        alert(`You have used all the time! You are going have with $${currentMoney}!`);
        clearInterval(d1);
        disable();
        strtButton.disabled = true;
    }
}

// ROUND 2 (takes in decreaseTime2 if money is over 5k)
function round2()
{
    currentPlace = 0;
    round = 2;
    strtButton.innerHTML = `Start Round 2`;
    if(currentMoney >= 5000)
    {
        let sure = confirm(`You have reached Round 2!\n\nYou have earned ${currentMoney}!\n\nDo you want to continue?`);
        if (sure === true) {
            alert(`Lets move on to Round 2! \n\n Please Click "Start Round" To Begin!`);
            disable();
            currentMoney = 0;
            banked = 7500;
            savedMoney.innerHTML = `Banked Money Total: ${banked}`;
            currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
          } else {
            alert(`You have earned ${currentMoney} and you are going home!`);
            disable();
            strtButton.disabled = true;
            banked = 5000;
            savedMoney.innerHTML = `Banked Money Total: ${banked}`;
          }
    }
}


function decreaseTime2()
{
    timer.innerHTML = `<h4>Timer: ${time2}</h4>`;
    time2--;
    if(currentMoney >= 75000)
    {
        clearInterval(d2);
        round3();
    }

    if(time2 <= 0)
    if(currentMoney <= 75000)
    {
        alert(`You have used all the time! You are going have with $${banked}!`);
        clearInterval(d2);
        disable();
        strtButton.disabled = true;
    }
    
}


function round3()
{
    currentPlace = 0;
    round = 3;
    strtButton.innerHTML = `Start Round 3`;
    if(currentMoney >= 75000)
    {
        let sure = confirm(`You have reached Round 3!\n\nYou have earned ${currentMoney}!\n\nDo you want to continue?`);
        if (sure === true) {
            alert(`Lets move on to Round 3! \n\n Please Click "Start Round 3" To Begin!`);
            disable();
            currentMoney = 0;
            banked = 75000;
            savedMoney.innerHTML = `Banked Money Total: ${banked}`;
            currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
          } else {
            alert(`You have earned ${currentMoney} and you are going home!`);
            disable();
            strtButton.disabled = true;
          }
    }
}


function decreaseTime3()
{
    timer.innerHTML = `<h4>Timer: ${time3}</h4>`;
    time3--;
    if(currentMoney === 10000000)
    {
        alert(`You have won a milli!`);
    }

    if(time3 <= 0)
    if(currentMoney <= 1000000)
    {
        alert(`You have used all the time! You are going have with $${banked}!`);
        clearInterval(d3);
        disable();
        strtButton.disabled = true;
    }
}


// Different times when start button is clicked
strtButton.addEventListener(`click`, function()
{
    if(round === 1)
    {
        alert(`Round 1 has started!\n\nGuess 5 questions correctly to move on!`);
        enable();
        d1 =  setInterval(decreaseTime1, 1000);
    }
    if (round === 2)
    {
        clearInterval(d1);
        console.log(strtButton);
        alert(`Round 2 has started!\n\nGuess 5 questions correctly to move on!`);
        enable();
        d2 =  setInterval(decreaseTime2, 1000);
        roundNumber.innerHTML = `<h3>Round 2</h3>`;
    }

    if (round === 3)
    {
        clearInterval(d2);
        enable();
        alert(`Round 3 has started!\n\nGuess 5 questions correctly to move on!`);
        d3 =  setInterval(decreaseTime3, 1000);
        roundNumber.innerHTML = `<h3>Round 3</h3>`;
        strtButton.innerHTML = `Start Round 3`;
    }
})


// IF USER GETS 3 ANSWERS WRONG, THEY LOOSE AUTOMATICALLY AND GO HOME WITH BANKED AMOUNT!
function checkTries()
{

if(tries === 1)
{
    document.querySelector(`.one`).style.visibility = `visible`;
}
else if (tries === 2)
{
    document.querySelector(`.one`).style.visibility = `visible`;
    document.querySelector(`.two`).style.visibility = `visible`;
}
else if(tries === 3)
{
    document.querySelector(`.one`).style.visibility = `visible`;
    document.querySelector(`.two`).style.visibility = `visible`;
    document.querySelector(`.thr`).style.visibility = `visible`;
}

if(tries === 3)
{
    savedMoney.innerHTML = `Banked Money Total: ${banked}`;
    currentAddedMonay.innerHTML = `Current Money: ${currentMoney}`;
    alert(`You are walking away with ${banked} dollars!\n\n Thanks for Playing!`);
    disable();
}

}