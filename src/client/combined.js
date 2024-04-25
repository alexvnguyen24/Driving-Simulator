let theUsername = "";

 const playButtonElement = document.getElementById("play_button");
if(playButtonElement) {

  playButtonElement.addEventListener('click', async function() {

    const username = document.getElementById('username').value.trim();
  if (username !== '') {
      theUsername = username;
      localStorage.setItem('username', theUsername); // Store the username in local storage
      window.location.href = "combined.html";
    }

    else {
      alert('Please enter a username.');
    }

  });
}

theUsername = localStorage.getItem('username');
function displayUsername(username) {



  const usernameDisplayElement = document.getElementById('username_display');
  if (usernameDisplayElement) {


    usernameDisplayElement.innerHTML = username;

  }

}

 
// Car animation control
const car = document.querySelector('.car');
const highway = document.querySelector('.highway');
const city = document.querySelector('.city');

let carAnimationId;
let highwayAnimationId;
let cityAnimationId;
let quizTimer;
let currentQuestion = 1;
let timer;
let timeLeft = 15; // Initial time for each question
let score = 0;

// Function to start the car animation
function startCarAnimation() {
  carAnimationId = requestAnimationFrame(startCarAnimation);
  // Add your car animation logic here
  // For example, you can move the car horizontally or vertically
  // by updating its position or applying CSS transforms
}

// Function to start the highway animation
function startHighwayAnimation() {
  highwayAnimationId = requestAnimationFrame(startHighwayAnimation);
  // Add your highway animation logic here
  // For example, you can move the highway horizontally
  // by updating its position or applying CSS transforms
}

// Function to start the city animation
function startCityAnimation() {
  cityAnimationId = requestAnimationFrame(startCityAnimation);
  // Add your city animation logic here
  // For example, you can move the city horizontally
  // by updating its position or applying CSS transforms
}

// Function to start the quiz timer
function startQuizTimer() {
    // Set a timeout to stop the animations after 10 seconds
    quizTimer = setInterval(displayQuizQuestion, 10000); // Display quiz question every 20 seconds

  }
 

// Function to display quiz question
function displayQuizQuestion() {

  clearInterval(quizTimer); // Stop the timer to prevent multiple quiz questions from appearing simultaneously
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.style.display = 'block'; // Show the quiz container

  startTimer(); // Start the timer for the current question
}

// Function to start the timer for each question
function startTimer() {
  function updateTimer() {
    document.getElementById('time-left').innerText = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      timeLeft = 0; // Ensure timeLeft doesn't go negative
      nextQuestion();
    }
  }

  updateTimer();
  timer = setInterval(updateTimer, 1000);
}


// Function to handle moving to the next question
function nextQuestion() {
    const container = document.getElementById('quiz-container');
    const currentQuestionElement = document.getElementById(`question${currentQuestion}`);
  
    // Get selected answer
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    const answer = selectedAnswer ? selectedAnswer.value : ''; // If no answer selected, assign empty string
  
    // Checking answer
    if (currentQuestion === 1 && answer === 'a') {
      score++;
    }
    if (currentQuestion === 2 && answer === 'b') {
      score++;
    }
  
    // Hide current question and show score after answering all questions
    if (currentQuestion === 2) {
      clearInterval(timer);
      currentQuestionElement.style.display = 'none';
      document.getElementById('score').style.display = 'block';
      document.getElementById('score-result').innerText = `Your score is: ${score}/2`;
  
      document.getElementById('next-btn').style.display = 'none';
  
      return;
    }

    // Hide current question
    currentQuestionElement.style.display = 'none';
  
    // Show next question
    currentQuestion++;
    const nextQuestionElement = document.getElementById(`question${currentQuestion}`);
    nextQuestionElement.style.display = 'block';
  
    // Reset timer and start for the next question
    clearInterval(timer); // Stop the timer for the current question
    timeLeft = 15;
    startTimer();
  }

// Start the animations and quiz timer when the page loads
// theres probabily a conflict between this and startQuizTimer(); 


window.addEventListener('load', () => {
  displayUsername(theUsername);
  startCarAnimation();
  startHighwayAnimation();
  startCityAnimation();
  startQuizTimer(); // Start the quiz timer
});




/*
The problems, the quizQuestionDisplay is not being called 
  >The problem is because pouchDB is not being imported correctly;

*/

