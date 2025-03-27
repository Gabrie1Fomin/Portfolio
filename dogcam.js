let capture;
let snoutImages = {}; // Object to store snout images
let soundEffect;
let snoutY;
let hasInitialized = false;
let tracker;
let noseDrawingLayer;
let positions;
let currentSnout; // Stores the currently selected snout

function preload() {
  // Load snout images with the correct order
  snoutImages.left2 = loadImage("assets/images/snoutleft2.png");
  snoutImages.left1 = loadImage("assets/images/snoutleft1.png");
  snoutImages.center = loadImage("assets/images/snout.png"); // Default center snout
  snoutImages.right1 = loadImage("assets/images/snoutright1.png");
  snoutImages.right2 = loadImage("assets/images/snoutright2.png");

  soundEffect = loadSound("assets/audio/bark.mp3"); // Load sound effect
  document.body.style.overflow = "hidden";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Initialize video capture
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide(); // Hide default video element

  // Flip camera using CSS
  capture.style('transform', 'scaleX(-1)');
  capture.style('position', 'absolute');

  // Initialize face tracker
  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt); // Start face tracking
  hasInitialized = true;

  // Create a layer for nose overlay
  noseDrawingLayer = createGraphics(width, height);
  noseDrawingLayer.clear();

  // Set initial snout position & default snout
  snoutY = windowHeight + 50;
  currentSnout = snoutImages.center; // Default center snout
}

function draw() {
  if (!hasInitialized) return;

  background(0); // Clear canvas

  capture.loadPixels();
  if (capture.pixels.length > 0) {
    for (let i = 0; i < capture.pixels.length; i += 4) {
      let avgRG = (capture.pixels[i] + capture.pixels[i + 1]) / 2;
      capture.pixels[i] = avgRG;
      capture.pixels[i + 1] = avgRG;
    }
    capture.updatePixels();
  }

  // Draw the processed video feed
  image(capture, 0, 0, windowWidth, windowHeight);

  // Get updated face tracking positions
  positions = tracker.getCurrentPosition() || positions; // Keeps last known position if tracking fails


  if (positions && positions.length > 62) {
    updateSnoutBasedOnNosePosition(); // Update snout image
    drawNose();
  }

  // Draw the nose tracking overlay
//    image(noseDrawingLayer, 0, 0);

  // Define snout position
  let snoutWidth = 400;
  let snoutHeight = 300;
  let snoutX = (windowWidth - snoutWidth) / 2;

  // Adjust snout position when sound plays
  snoutY = soundEffect.isPlaying() ? (windowHeight - snoutHeight) + 10 : windowHeight - snoutHeight + 50;

  // Draw selected snout image
  image(currentSnout, snoutX, snoutY, snoutWidth, snoutHeight);
}

// Play sound when spacebar is pressed
function keyPressed() {
  if (keyCode === 32 && !soundEffect.isPlaying()) {
    soundEffect.play();
  }
}

// Draw a circle on the detected nose position
function drawNose() {
  noseDrawingLayer.clear();

  if (!positions || positions.length < 63) return;

  let xPos = positions[62][0];
  let yPos = positions[62][1];

  noseDrawingLayer.noStroke();
  noseDrawingLayer.fill(255, 0, 0);
  noseDrawingLayer.circle(xPos, yPos, 20);
}

// Update snout image based on nose X position
function updateSnoutBasedOnNosePosition() {
  if (!positions || positions.length < 63) return;

  let noseX = positions[62][0]; // Get X position of the nose
  let sectionWidth = windowWidth / 5; // Divide screen into 5 equal parts

  if (noseX < sectionWidth) {
    currentSnout = snoutImages.left2; // Far left
  } else if (noseX < sectionWidth * 2) {
    currentSnout = snoutImages.left1; // Left
  } else if (noseX < sectionWidth * 3) {
    currentSnout = snoutImages.center; // Center
  } else if (noseX < sectionWidth * 4) {
    currentSnout = snoutImages.right1; // Right
  } else {
    currentSnout = snoutImages.right2; // Far right
  }
}
