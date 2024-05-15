---

# Driving Simulator Game

This is a simple driving simulator game developed using HTML, CSS, and JavaScript. The game features car animation, a driving environment, and a quiz component to test your knowledge of road signs.

## Game Features

Milestone 03 
- We used the API routes and pouchDB in order to retreive the questions from the database which we have created in our game. There are 10 questions and answers being asked to the user, and once they answers all of the questions, their score is displayed at the end of the quiz. We have various functions keeping track of the timer, the next button to navigate ahead in the quiz, the update and reset timer, a displayQuestion function which accesses the questions database and goes through each question displaying it on the screen. Also at the beginning of the game, the user is requested to enter an username, which if it is not provided, an alert pops up. Once the username is inputed, the game begins and a sound plays in the background while the game is running. We used express.js to connect to the server and use the port to connect the frontend to the server. The game ends when the user reaches the end of all questions. 

## Getting Started

To play the game locally on your machine, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/driving-simulator-game.git
   ```

2. **Open the Game:**
   - Navigate to the project directory.
   - Open `index.html` in your web browser.

3. **Enter Your Username:**
   - Enter your username and click "PLAY!" to start the game.

4. **Game Instructions:**
   - Answer quiz questions correctly to earn points.

## Game Development

- The game uses basic HTML for structure, CSS for styling, and JavaScript for interactivity.
- Animations are achieved using CSS transitions and JavaScript DOM manipulation.
- Quiz questions and logic are integrated to provide an interactive gaming experience.

## Contributors

Aryamani Boruah - @aboruah@umass.edu
Shruti Oak - @saoak@umass.edu
Ricky Lam - @prlam@umass.edu
Alex Nguyen - @alevnguyen@umass.edu

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Road sign images sourced from Google Images.


---

Feel free to customize the README file further based on your specific game details and preferences. Include additional sections or information as needed to provide a comprehensive overview of your game project.
