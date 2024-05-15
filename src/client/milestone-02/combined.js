let theUsername = "";
const ani = document.querySelectorAll(".highway, .city, .wheel img");
const playButtonElement = document.getElementById("play_button");


if (playButtonElement) {
 playButtonElement.addEventListener('click', async function() {
   const username = document.getElementById('username').value.trim();
   if (username !== '') {
     theUsername = username;
     localStorage.setItem('username', theUsername);
     window.location.href = "combined.html";
   } else {
     alert('Please enter a username.');
   }
 });
}


theUsername = localStorage.getItem('username');


function displayUsername(username) {
 const usernameDisplayElement = document.getElementById('username_display');
 if (usernameDisplayElement) {
   usernameDisplayElement.innerHTML = `Username: ${username}`;
 }
}


const car = document.querySelector('.car');
const highway = document.querySelector('.highway');
const city = document.querySelector('.city');


let carAnimationId;
let highwayAnimationId;
let cityAnimationId;
let currentQuestion = 1;
let timer;
let timeLeft;
let score = 0;
let quizQuestions = [];
const originalTimerCount = 30; // Store the original timer count


function startCarAnimation() {
 carAnimationId = requestAnimationFrame(startCarAnimation);
}


function startHighwayAnimation() {
 highwayAnimationId = requestAnimationFrame(startHighwayAnimation);
}


function startCityAnimation() {
 cityAnimationId = requestAnimationFrame(startCityAnimation);
}


async function startQuiz() {
 await fetchQuizQuestions();
 setTimeout(() => {
   displayQuizQuestion();
   startTimer();
 }, 2500);
}


async function fetchQuizQuestions() {
 try {
   const response = await fetch('/questions.json');
   if (!response.ok) {
     throw new Error('Failed to fetch quiz questions');
   }
   quizQuestions = await response.json();
 } catch (error) {
   console.error('Error fetching quiz questions:', error);
 }
}


function nextQuestion() {
 const container = document.getElementById('quiz-container');
 const currentQuestionElement = document.getElementById(`question${currentQuestion}`);


 if (currentQuestionElement) {
   const selectedAnswer = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
   const answer = selectedAnswer ? selectedAnswer.value : '';


   if (answer === quizQuestions[currentQuestion - 1].correctAnswer) {
     score++;
   }


   currentQuestionElement.style.display = 'none';
 }


 currentQuestion++;


 if (currentQuestion <= quizQuestions.length) {
   displayQuizQuestion();
   startTimer(); // Restart the timer for the next question
 } else {
   showScore();
 }
}


function startTimer() {
 clearInterval(timer); // Clear any previous timer
 timeLeft = originalTimerCount; // Reset the timer to its original count


 function updateTimer() {
   document.getElementById('time-left').innerText = timeLeft;
   timeLeft--;


   if (timeLeft < 0) {
     clearInterval(timer);
     nextQuestion();
   }
 }


 updateTimer();
 timer = setInterval(updateTimer, 1000);
}


function displayQuizQuestion() {
 if (currentQuestion <= quizQuestions.length) {
   const quizContainer = document.getElementById('quiz-container');
   quizContainer.style.display = 'block';


   ani.forEach(e => {
     e.classList.add('paused-animation');
   });


   const questionsContainer = document.getElementById('questions-container');
   questionsContainer.innerHTML = '';


   const question = quizQuestions[currentQuestion - 1];
   const questionElement = document.createElement('div');
   questionElement.classList.add('question');
   questionElement.id = `question${currentQuestion}`;
   questionElement.innerHTML = `
     <p>${question.question}</p>
     <img src="${question.image}" alt="Question ${currentQuestion} Image" />
     <div class="options">
       ${question.options.map((option, index) => `
         <label><input type="radio" name="q${currentQuestion}" value="${option}" /> ${option}</label> <br>
       `).join('')}
     </div>
   `;
   questionsContainer.appendChild(questionElement);
 }
}


function showScore() {
  // Stop the timer
  clearInterval(timer);
 
 
  // Remove this section if you want to display the question and timer if the player hasn't finished answering the question
  // Clear the questions container
  const questionsContainer = document.getElementById('questions-container');
  questionsContainer.innerHTML = '';
 
 
  // Show the score container
  const scoreContainer = document.getElementById('score');
  scoreContainer.style.display = 'block';
 
 
  // Display the score
  const scoreResult = document.getElementById('score-result');
  scoreResult.innerHTML = `Your score is: ${score}/${quizQuestions.length}`;
 
 
  // Hide the next button
  const nextButton = document.getElementById('next-btn');
  nextButton.style.display = 'none';
 
 
  // Resume animations if 70% of the questions are answered correctly
  if (score >= quizQuestions.length*.7) {
    ani.forEach(e => {
      e.classList.remove('paused-animation');
    });
  }
 }
 
 


window.addEventListener('load', () => {
 displayUsername(theUsername);
 startCarAnimation();
 startHighwayAnimation();
 startCityAnimation();
 startQuiz();
});