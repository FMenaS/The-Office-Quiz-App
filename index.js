'use strict';

let currentQuestion= 0;
let correctTotal= 0;
//var medalReceived;

//Create Array of Objects containing all Questions, Choices, and Correct Answers
const questionBank = [
  //question #1
  {
    question: "According to Jim, what kind of Bear is best?",
    choices: ["Black Bear",
              "Grizzly Bear",
              "Panda Bear",
              "Gummy Bear"],
    correctAnswer:"Black Bear",
    srcCorrect: "https://media.giphy.com/media/eaaZmlgHXKH84/giphy.gif",
    srcWrong: "https://j.gifs.com/mQ8nyA.gif",
    alt: "Jim Halpert from the Office"
  },
  //question #2 
  {
    question: "What is the National Sport of Icelandic Paper Companies?",
    choices: ["Paper Sledding",
              "Paper Curling",
              "Flonkerton",
              "Flurnenton"],
    correctAnswer:"Flonkerton",
    srcCorrect: "https://j.gifs.com/l56qv7.gif",
    srcWrong: "https://j.gifs.com/l56qv7.gif",
    alt: "Flonkerton Race"
  },
  //question #3 
  {
    question: "Through pure concentration, why would Dwight want to mentally raise his cholesterol?",
    choices: ["To have a heart attack",
              "To be healthy",
              "So he can lower it",
              "So he can destroy it"],
    correctAnswer: "So he can lower it",
    srcCorrect: "https://j.gifs.com/voJEZg.gif",
    srcWrong: "https://j.gifs.com/D9Em8Y.gif",
    alt: "Dwight Schrute from The Office"
  },
  //question #4 
  {
    question: "According to Prison Mike, what's the worst thing about Prison?",
    choices: ["The Food",
              "The Dementors",
              "The Prison Guards",
              "Spontaneous Dance Flash Mobs"],
    correctAnswer: "The Dementors",
    srcCorrect: "https://media.giphy.com/media/4La9CRyL87fCE/giphy.gif",
    srcWrong: "https://media.giphy.com/media/4La9CRyL87fCE/giphy.gif",
    alt: "Prison Mike talking about The Dementors"
  },
  //question #5
  {
    question: "Michael Scott is not superstitious because:",
    choices: ["He doesn't believe in magic",
              "He's religious",
              "He doesn't believe in super powers",
              "He's only a little stitious"],
    correctAnswer: "He's only a little stitious",
    srcCorrect: "https://media.giphy.com/media/RJPQ2EF3h0bok/giphy.gif",
    srcWrong: "https://media.giphy.com/media/RJPQ2EF3h0bok/giphy.gif",
    alt: "Michael Scott from The Office"
  },
  //question #6 
  {
    question: "When Dwight goes to the hospital, why can't Michael fire him?",
    choices: ["Dwight is unconscious",
              "Dwight doesn't work in the van",
              "Michael is not Dwight's boss",
              "Dwight quits first"],
    correctAnswer: "Dwight doesn't work in the van",
    srcCorrect: "https://j.gifs.com/qY8zg0.gif",
    srcWrong: "https://j.gifs.com/0V3GWL.gif",
    alt: "Dwight Schrute from The Office"
  },
  //question #7
  {
    question: "What is the ratio of Stanley Nickels to Schrute Bucks?",
    choices: ["Same as the ratio of Dollars to Euros",
              "Same as the ratio of Pounds to Kilograms",
              "Same as the ratio of Beets to Carrots",
              "Same as the ratio of Unicorns to Leprechauns"],
    correctAnswer: "Same as the ratio of Unicorns to Leprechauns",
    srcCorrect: "https://j.gifs.com/W7B32v.gif",
    srcWrong: "https://media.giphy.com/media/gC2ih9aLAOjbW/giphy.gif",
    alt: "Stanley from The Office"
  },
  //question #8 
  {
    question: "Who does Michael say the following to: \"This is an environment of welcoming, and you should just get the hell out of here\"?",
    choices: ["Dwight",
              "Toby",
              "Oscar",
              "Kramer"],
    correctAnswer: "Toby",
    srcCorrect: "https://j.gifs.com/G5Kp5y.gif",
    srcWrong: "https://j.gifs.com/wmgGVJ.gif",
    alt: "Michael Scott from The Office"
  },
  //question #9
  {
    question: "If Michael Scott had a gun, with two bullets, and was in a room with Hitler, Bin Laden, and Toby, what would he do?",
    choices: ["Shoot Hitler and Bin Laden",
              "Shoot Toby and Hitler",
              "Shoot Bin Laden and Toby",
              "Shoot Toby twice"],
    correctAnswer: "Shoot Toby twice",
    srcCorrect: "https://j.gifs.com/86YRE5.gif",
    srcWrong: "https://j.gifs.com/yrkL1P.gif",
    alt: "Kevin Malone from The Office"
  },
  //question #10
  {
    question: "Would Michael Scott rather be feared or loved?",
    choices: ["Feared",
              "Loved",
              "Both. He wants people to be afraid of how much they love him",
              "Neither. He loves that people don't fear him"],
    correctAnswer: "Both. He wants people to be afraid of how much they love him",
    srcCorrect: "https://media.giphy.com/media/oHarHzfOTLQKk/giphy.gif",
    srcWrong: "https://media.giphy.com/media/4wrfzbVg6kvsY/giphy.gif",
    alt: "Kelly Kapoor from The Office"
  }];




//Function to Handle Start quiz button
function startQuiz(){
  $(".start-button").on('click',function (event){
    console.log('startQuiz ran');
    $(".js-quiz-page").removeClass("hidden");
    $(".js-start-page").addClass("hidden");
  });
}  

//Function to display the generated question
function displayQuestion(){
  console.log('displayQuestion ran');
  $(".js-quiz-page").html(generateQuestion());
 
}

//Function to generate question
function generateQuestion(){
  console.log('generateQuestion ran');
  //HTML displayed for each question and answer
  
  return   `<div class= "js-question-answer-form">
            <form>
            <fieldset style="border:none">
              <legend> Question: ${questionBank[currentQuestion].question} </legend>  
              <label class="radio-button">
                <input type="radio" name="answer-option" value="${questionBank[currentQuestion].choices[0]}" required>
                <span>${questionBank[currentQuestion].choices[0]}</span>
              </label>
       
              <label class="radio-button">
                <input type="radio" name="answer-option" value="${questionBank[currentQuestion].choices[1]}" required>
                <span>${questionBank[currentQuestion].choices[1]}</span>
              </label>
       
              <label class="radio-button">
                <input type="radio" name="answer-option" value="${questionBank[currentQuestion].choices[2]}" required>
                <span>${questionBank[currentQuestion].choices[2]}</span>
              </label>
          
              <label class="radio-button">
                <input type="radio" name="answer-option" value="${questionBank[currentQuestion].choices[3]}" required>
                <span>${questionBank[currentQuestion].choices[3]}</span>
              </label>
              
              <input type="submit" value="Submit Answer">
        
              </fieldset>
          </form>
          <footer>
          <div class="current-question">Question: <span class= "question-number">${currentQuestion + 1} </span> of 10
          </div>
          <div class="current-score">Score: <span class= "correct-answer">
          ${correctTotal}</span 
          </div>
          </footer>
          </div>`;  
          
}

//Function to handle answers,update counter and score
function handleAnswer(){
  $('form').on('submit',function(event){
    event.preventDefault();
    console.log('handleAnswer ran');
    var userAnswer= $('input:checked').val();
    console.log(userAnswer);
    console.log(questionBank[currentQuestion].correctAnswer);
    
    checkAnswer(userAnswer);
    updateQuestion();
    
  });
  
}

//Function to check for correct/incorrect answer
function checkAnswer(answer){
    if (answer === questionBank[currentQuestion].correctAnswer){
      console.log("Great Job. That's correct.");
      $(".js-question-answer-form").addClass("hidden");
      $(".js-quiz-page").html(displayCorrectAnswerMessage());
      updateScore();
    }
    else{
      console.log("I'm sorry. That's not correct.");
      $(".js-question-answer-form").addClass("hidden");
      $(".js-quiz-page").html(displayWrongAnswerMessage());
    } 
}

//Function to display correct answer 
function displayCorrectAnswerMessage(){
  return `<section class="feedback-page popup">
            <h1> Nice job! That's correct. </h1>
            <img class= "answer-message" src="${questionBank[currentQuestion].srcCorrect}" alt="${questionBank[currentQuestion].alt}">
            <button class= "next-button" value="next-button"> Next Question</button>
          </section>`;
  }

//Function to display Wrong answer
function displayWrongAnswerMessage(){
  let displayAnswer= `${questionBank[currentQuestion].correctAnswer}`;
  return `<section class="feedback-page popup">
            <h1> Incorrect. The correct answer is ${displayAnswer}. </h1>
            <img class= "answer-message" src="${questionBank[currentQuestion].srcWrong}" alt="${questionBank[currentQuestion].alt}">
            <button class= "next-button" value="next-button"> Next Question</button>
          </section>`;
  }

//Function to update score and question #
function updateScore(){
  correctTotal ++;
  console.log('updateScore ran');
}

//Function to move to next question
function nextQuestion(){
  $('.main-section').on ('click','.next-button',function(event){
   event.preventDefault();
   console.log('nextQuestion ran');
   
  if (currentQuestion < 10){
    displayQuestion();
    handleAnswer();
  }
  else {
    displayResults();
  }
  
  })
}


//Function to get next question
function updateQuestion(){
  currentQuestion++;
  console.log(currentQuestion);
}



//Function to display results
function displayResults(){
   //Hide Quiz & show results;
  $(".js-quiz-page").addClass("hidden");
  $('.feedback-page').addClass("hidden");
  $(".js-quiz-result").removeClass("hidden");
  console.log("displayResults ran");

  //Display Results
  $(".js-quiz-result").html(showFinalScore());
  //Restart Quiz
  restartQuiz();

}
//Function to restart quiz
function showFinalScore(){
  console.log("showFinalScore ran")
  
  //Call awardMedal function and store result in variable
  var medalReceived = awardMedal(correctTotal);
  return `<section class="js-quiz-result">
            <h1 class="results-score"> You correctly answered ${correctTotal} out of 10 questions.</h1>
            <h2 class="results-medal"> You have been awarded the ${medalReceived} medal!<h2>
            <img class= "results-message" src= "https://media.giphy.com/media/d1BiAaVqLJXLG/giphy.gif" alt= "Medal Award Ceremony">
            <h2 class="play-again"> Would you like to play again? </h2>
            <button class= "restart-button" value="restart-btn"> Play Again</button>
          </section>`;
          
}

//function to award medal
function awardMedal(correctTotal){
  var medal= "Gold"
  
  if (correctTotal >= 9){
     medal= "Gold"
  }
  else if (correctTotal >= 7 && correctTotal <= 8){
     medal= "Silver"
  }
  else {
     medal= "Bronze"
  }
  return medal;
}

//Function to Restart Quiz
function restartQuiz(){
  $('.main-section').on ('click','.restart-button', function(event){
    console.log("restart button has been clicked");
    //event.preventDefault();
   // currentQuestion = 0;
  //  correctTotal=0;
 // $('.js-quiz-result').addClass("hidden");
 // $('.js-start-page').removeClass("hidden");
 //startQuiz();
    location.reload();
    
  })
}

//Function to Start Quiz
function takeQuiz(){
  console.log('takeQuiz ran');
  startQuiz();
  displayQuestion();
  handleAnswer();
  nextQuestion();
 
  
}
//when the page loads, call 'takeQuiz'
$(takeQuiz());
