console.log("Script Loaded"); 

let flash; 
let flashPoints, flashPoints2; 

function preload() {
    flash = loadFont("assets/fonts/HarryP.ttf");
}

function setup() { 
    createCanvas(400, 400).parent("sketch-container3"); 
    background(0); 
    noStroke(); 

    // Converts the text "Flash" into points 
    flashPoints = flash.textToPoints("Flash", 125, 225, 100, { sampleFactor: 0.6 });

    // Does the same for a lower-resolution version of the text (with a sampleFactor of 0.1) to use for drawing squares
    flashPoints2 = flash.textToPoints("Flash", 125, 225, 100, { sampleFactor: 0.1 });
}

function draw() {
    background(0); // Clears the canvas and sets the background to black for each frame

    // Checks if the mouse is within 50 pixels of any of the points in flashPoints
    let isNear = flashPoints.some(pt => dist(mouseX, mouseY, pt.x, pt.y) < 50);

    if (isNear) { // If the mouse is near the text, draw the squares
        push(); // Saves the current drawing settings
        fill(255, 255, 255, 6); // Sets the color for the squares to white with low alpha

        for (let pt of flashPoints2) {  // draws a square at each point of flashPoints2
            let squareSize = 75; // self explanitory
            rect(pt.x - squareSize / 2, pt.y - squareSize / 2, squareSize, squareSize); // Draws a square centered on the point (pt.x, pt.y)
        }
        pop(); // Restores the previous drawing settings
    }

    push(); // Saves the current drawing settings again
    fill(isNear ? color(255) : color(255, 255, 0)); // Sets the color of the circles: white if the mouse is near, otherwise yellow

    for (let pt of flashPoints) {
        circle(pt.x, pt.y, 2); // Draws a small circle at each point
    }
    pop(); // Restores the previous drawing settings
}
