let capture;
let snout;
let soundEffect;
let snoutY;
let hasInitialized = false;

function preload() {
  snout = loadImage("assets/images/snout.png"); // Load the image
  soundEffect = loadSound("assets/audio/bark.mp3"); // Load the sound file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
  hasInitialized = true;

  // Set initial snoutY position
  snoutY = windowHeight + 50 ; // Starting Y position (at the bottom)
}

function draw() {
  if (!hasInitialized) return;
  background(0);

  capture.loadPixels();
  if (capture.pixels.length > 0) {
    for (let i = 0; i < capture.pixels.length; i += 4) {
      let avgRG = (capture.pixels[i] + capture.pixels[i + 1]) / 2;
      capture.pixels[i] = avgRG; // Adjust Red
      capture.pixels[i + 1] = avgRG; // Adjust Green
    }
    capture.updatePixels();
  }

  image(capture, 0, 0, windowWidth, windowHeight); // Stretch video to fit window

  // Define the size of the snout image
  let snoutWidth = 400;  
  let snoutHeight = 300;

  // Center snout at bottom (based on snoutY)
  let snoutX = (windowWidth - snoutWidth) / 2;

  // Update snoutY based on whether sound is playing or not
  if (soundEffect.isPlaying()) {
    snoutY = (windowHeight - snoutHeight) + 10; // Move snout up by 5 pixels
  } else {
    snoutY = windowHeight - snoutHeight +50; // Reset snout to original position
  }

  image(snout, snoutX, snoutY, snoutWidth, snoutHeight);
}

// Play sound when spacebar is pressed, only once
function keyPressed() {
  if (keyCode === 32 && !soundEffect.isPlaying()) { // 32 is the spacebar key code
    soundEffect.play(); // Play sound if not already playing
  }
}
