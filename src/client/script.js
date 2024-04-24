
const tutorialButton = document.getElementById("tutorial_button");
tutorialButton.addEventListener("click", function(){
    if(!document.getElementById("tutorial-box")){
        const textBox = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        h1.innerHTML = "How To Play";
        p.innerHTML = "instructions";
        textBox.setAttribute("id", "tutorial-box");
        p.setAttribute("class", "instruction-paragraph");

        const instructions = document.getElementById("tutorial-text");
        instructions.appendChild(textBox);
        textBox.appendChild(h1);
        textBox.appendChild(p);
    }
    else{
        const removeElement = document.getElementById("tutorial-text");
        while(removeElement.firstChild){
            removeElement.removeChild(removeElement.firstChild);
        }
    }
});

const playbuttonElement = document.getElementById("play_button");

playbuttonElement.addEventListener("click", () => {
    document.body.style.backgroundColor = 'black';
    startCarAnimation();
    startHighwayAnimation();
    startCityAnimation();
   // Hide the play button and tutorial button
  playbuttonElement.style.display = 'none';
  tutorialButton.style.display = 'none';
  
  // Show the car animation container
  const carAnimationContainer = document.querySelector('.hero');
  carAnimationContainer.style.display = 'block';
    
});
// Car animation control
const car = document.querySelector('.car');
const highway = document.querySelector('.highway');
const city = document.querySelector('.city');

let carAnimationId;
let highwayAnimationId;
let cityAnimationId;

function startCarAnimation() {
  carAnimationId = requestAnimationFrame(startCarAnimation);
  
}

function startHighwayAnimation() {
  highwayAnimationId = requestAnimationFrame(startHighwayAnimation);
  
}

function startCityAnimation() {
  cityAnimationId = requestAnimationFrame(startCityAnimation);
 
}

function stopCarAnimation() {
  cancelAnimationFrame(carAnimationId);
}

function stopHighwayAnimation() {
  cancelAnimationFrame(highwayAnimationId);
}

function stopCityAnimation() {
  cancelAnimationFrame(cityAnimationId);
}
