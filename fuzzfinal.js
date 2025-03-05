console.log("Script Loaded");

let fuzz = [];
let moveRangex = 5;
let moveRangeY = 4;
let lineLength = 8;

function preload() {
    font1 = loadFont("assets/fonts/AmericanCaptain.otf");
    font2 = loadFont("assets/fonts/Bredy.ttf");
    font3 = loadFont("assets/fonts/studlyRough.otf");
}

function setup() {
    createCanvas(800, 300).parent("sketch-container2");
    background(0);

    fuzzEffect = new FuzzEffect(font1.textToPoints("fuzz", 175, 250, 300, { sampleFactor: 0.6 }));

    stroke(255);
    strokeWeight(5);
    line(400, 0, 400, 400);
    line(800, 0, 800, 400);
}

function draw() {
    background(0);
    fuzzEffect.display();
}

class FuzzEffect {
    constructor(points) {
        this.points = points;
    }
    display() {
        for (let i = 0; i < this.points.length; i++) {
            strokeWeight(1);
            let pt = this.points[i]; //chooses single point
            const distance = dist(mouseX, mouseY, pt.x, pt.y); //finds distance from mouse
            let randomOffsetx = random(-moveRangex, moveRangex); //choses a random position between moverangex and negative moverangex
            let randomOffsetY = random(-moveRangeY, moveRangeY); // choses a random position between moverangey and negative moverangey
            
            if (distance <= 50) { //if point is within range of mouse
                strokeWeight(2), lineLength = 15; // make line thicker, and make line longer
                let endX = pt.x + cos(PI / 4) * lineLength + randomOffsetx; //rotates line 45 degrees with cos() function by altering end positions of line
                let endY = pt.y + sin(PI / 4) * lineLength + randomOffsetY; //rotates line 45 degrees with sin() function by altering end positions of line
                line(pt.x + randomOffsetx, pt.y + randomOffsetY, endX, endY); // draws a line with the the line size variation(randomoffsetX and Y) as well changing the end points of the line for a 45 degree angle
            } else { // if not in range, draw the regular line
                lineLength = 8;
                line(pt.x + randomOffsetx, pt.y + randomOffsetY, pt.x + lineLength + randomOffsetx, pt.y + randomOffsetY);
            }
        }
    }
}
