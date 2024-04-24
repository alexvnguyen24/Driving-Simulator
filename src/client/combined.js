
const db = new PouchDB('quiz-game');

// Function to save username to PouchDB
async function saveUsername(username) {
  try {
    // Check if username exists in the database
    const existingUser = await db.get('username');
    // If username exists, update it
    existingUser.value = username;
    await db.put(existingUser);
    console.log('Username updated successfully:', username);
} catch (error) {
    // If username doesn't exist, create a new document
    if (error.status === 404) {
        const newUser = { _id: 'username', value: username };
        await db.put(newUser);
        console.log('New username saved successfully:', username);
    } else {
        console.error('Error saving username:', error);
    }
}
}

//alert is not working
// Event listener for the play button
const playButtonElement = document.getElementById("play_button");

playButtonElement.addEventListener('click', async function() {
  const username = document.getElementById('username').value.trim();
  if (username !== '') {
      alert(`my username is this ${username}`)
      await saveUsername(username);
      window.location.href = "combined.html";
      // Add your logic to start the game after saving the username
      startCarAnimation();
      startHighwayAnimation();
      startCityAnimation();
      startQuizTimer(); // Start the quiz timer
      
  } else {
      alert('Please enter a username.');
  }
 });
 
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

/*
window.addEventListener('load', () => {
  startCarAnimation();
  startHighwayAnimation();
  startCityAnimation();
  startQuizTimer(); // Start the quiz timer
});
*/



/*
The problems, the quizQuestionDisplay is not being called 

*/

