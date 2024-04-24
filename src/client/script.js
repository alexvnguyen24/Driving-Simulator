
const tutorialButton = document.getElementById("tutorial_button");
tutorialButton.addEventListener("click", function(){
    //Create the tutorial box and its text when the button is clicked.
    if(!document.getElementById("tutorial-box")){
        const textBox = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");

        h1.innerHTML = "How To Play";
        p.innerHTML = "Welcome! This game is designed to help you learn more about the rules of the road.";
        p1.innerHTML = "To get started, press the 'PLAY!' button. Once you are in the game, a series of questions will pop up. Answer these questions within the given time limit to test your mastery of the road. At the end of the level, you will see how well you did.";
        p2.innerHTML = "To close this menu, reclick the 'How to play' button.";
        textBox.setAttribute("id", "tutorial-box");
        p.setAttribute("class", "instruction-paragraph");
        p1.setAttribute("class", "instruction-paragraph");
        p2.setAttribute("class", "instruction-paragraph");

        const instructions = document.getElementById("tutorial-text");
        instructions.appendChild(textBox);
        textBox.appendChild(h1);
        textBox.appendChild(p);
        textBox.appendChild(p1);
        textBox.appendChild(p2);
    }
    else{
        //Remove the tutorial box when button is clicked.
        const removeElement = document.getElementById("tutorial-text");
        while(removeElement.firstChild){
            removeElement.removeChild(removeElement.firstChild);
        }
    }
});

const playbuttonElement = document.getElementById("play_button");


playbuttonElement.addEventListener("click", () => {
  //window.location.href = "car-animation.html";
  //window.location.href = "combined.html";

});
