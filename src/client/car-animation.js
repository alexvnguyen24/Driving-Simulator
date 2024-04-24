// Car animation control
const car = document.querySelector('.car');
const highway = document.querySelector('.highway');
const city = document.querySelector('.city');

let carAnimationId;
let highwayAnimationId;
let cityAnimationId;

function startCarAnimation() {
  carAnimationId = requestAnimationFrame(startCarAnimation);
  // Add your car animation logic here
  // For example, you can move the car horizontally or vertically
  // by updating its position or applying CSS transforms
}

function startHighwayAnimation() {
  highwayAnimationId = requestAnimationFrame(startHighwayAnimation);
  // Add your highway animation logic here
  // For example, you can move the highway horizontally
  // by updating its position or applying CSS transforms
}

function startCityAnimation() {
  cityAnimationId = requestAnimationFrame(startCityAnimation);
  // Add your city animation logic here
  // For example, you can move the city horizontally
  // by updating its position or applying CSS transforms
}

// Start the animations when the page loads
window.addEventListener('load', () => {
  startCarAnimation();
  startHighwayAnimation();
  startCityAnimation();
});