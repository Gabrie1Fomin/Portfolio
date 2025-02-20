console.log("Script Loaded");

let fuzz = [];
let moveRangex = 5; // max left-right movement on x-axis for Prototype 1
let moveRangeY = 4; // max vertical movement on y-axis for prototype 1
let moveRangeOutward = 15; //Range of distance from original point for prototype 2


function preload() {
    font1 = loadFont("assets/fonts/AmericanCaptain.otf");
    font2 = loadFont("assets/fonts/Bredy.ttf");
    font3 = loadFont("assets/fonts/studlyRough.otf");
}

function setup() {
    createCanvas(1200, 400).parent("sketch-container2");
    background(0);

    // Converts fuzz into points, fuzz 2 and fuzz2plain are both for the 2nd prototype
    fuzz = font1.textToPoints("fuzz", 125, 200, 100, { sampleFactor: 0.6 });
    fuzz2 = font2.textToPoints("fuzz", 475, 200, 100, { sampleFactor: 0.9 });
    fuzz2plain = font2.textToPoints("fuzz", 475, 200, 100, { sampleFactor: 0.4 });
    fuzz3 = font3.textToPoints("fuzz", 875, 200, 100, { sampleFactor: 0.2 });

    stroke(255);
    strokeWeight(5);
}
function draw() {
    background(0);
    line(400,0,400,400)
    line(800,0,800,400)
    
    //Prototype 1
    for (let i = 0; i < fuzz.length; i++) {
        strokeWeight(1);
        let pt = fuzz[i];
        let randomOffsetx = random(-moveRangex, moveRangex);
        let randomOffsetY = random(-moveRangeY, moveRangeY);
        line(pt.x + randomOffsetx, pt.y + randomOffsetY, pt.x + 8 + randomOffsetx, pt.y + randomOffsetY); //creates 8px lines that wiggle both left and right, up and down.
    }

    //Prototype 2
    fill(255, 255, 255);

    //creates word in center of effects
    for (let i = 0; i < fuzz2plain.length; i++) {
        let pt = fuzz2plain[i];
        rect(pt.x - 2, pt.y - 2, 2, 3);  //draws a rectangle at each point
    }
    
    for (let i = 0; i < fuzz2.length; i++) {
        let pt = fuzz2[i];
        let randomOffsetX = random(-moveRangeOutward, moveRangeOutward);
        let randomOffsetY = random(-moveRangeOutward, moveRangeOutward);

        ellipse(pt.x + randomOffsetX, pt.y + randomOffsetY, 2); // Draw circles with radius 6
    }

    //Prototype 3
    
    for (let i = 0; i < fuzz3.length; i++) {
        let pt = fuzz3[i];

        // Random outward direction
        let angle = random(TWO_PI);
        let length = random(1, 10); // Random fuzzy line length

        // Calculate end point for the fuzzy line
        let endX = pt.x + cos(angle) * length;
        let endY = pt.y + sin(angle) * length;

        // Draw fuzzy line
        line(pt.x, pt.y, endX, endY);
    }

}
