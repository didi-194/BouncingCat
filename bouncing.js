const slider = document.getElementById("speed-slider");
const ball = document.querySelector(".ball");

// Add event listener to the slider to update the animation speed
slider.addEventListener("input", function() {
  // Get the value of the slider and reverse it
  const value = (slider.max - slider.value) / 10;
  // Set the animation duration based on the slider value
  ball.style.animationDuration = value + "s";
});
