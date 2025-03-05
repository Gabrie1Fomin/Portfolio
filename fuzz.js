console.log("Script Loaded");

let fuzz = [];
let moveRangex = 5;
let moveRangeY = 4;
let lineLength = 8;
let moveRangeOutward = 15;

function preload() {
    font1 = loadFont("assets/fonts/AmericanCaptain.otf");
    font2 = loadFont("assets/fonts/Bredy.ttf");
    font3 = loadFont("assets/fonts/studlyRough.otf");
}

function setup() {
    createCanvas(1200, 400).parent("sketch-container2");
    background(0);

    fuzzEffect = new FuzzEffect(font1.textToPoints("fuzz", 50, 250, 200, { sampleFactor: 0.6 }));
    fuzz2Effect = new Fuzz2Effect(font2.textToPoints("fuzz", 475, 200, 100, { sampleFactor: 0.9 }), font2.textToPoints("fuzz", 475, 200, 100, { sampleFactor: 0.4 }));
    fuzz3Effect = new Fuzz3Effect(font3.textToPoints("fuzz", 875, 200, 100, { sampleFactor: 0.2 }));

    stroke(255);
    strokeWeight(5);
    line(400, 0, 400, 400);
    line(800, 0, 800, 400);
}

function draw() {
    background(0);
    fuzzEffect.display();
    fuzz2Effect.display();
    fuzz3Effect.display();
}

class FuzzEffect {
    constructor(points) {
        this.points = points;
    }
    display() {
        for (let i = 0; i < this.points.length; i++) {
            strokeWeight(1);
            let pt = this.points[i];
            const distance = dist(mouseX, mouseY, pt.x, pt.y);
            let randomOffsetx = random(-moveRangex, moveRangex);
            let randomOffsetY = random(-moveRangeY, moveRangeY);
            
            if (distance <= 50) {
                strokeWeight(2), lineLength = 15;
                let endX = pt.x + cos(PI / 4) * lineLength + randomOffsetx;
                let endY = pt.y + sin(PI / 4) * lineLength + randomOffsetY;
                line(pt.x + randomOffsetx, pt.y + randomOffsetY, endX, endY);
            } else {
                lineLength = 8;
                line(pt.x + randomOffsetx, pt.y + randomOffsetY, pt.x + lineLength + randomOffsetx, pt.y + randomOffsetY);
            }
        }
    }
}

class Fuzz2Effect {
    constructor(points, plainPoints) {
        this.points = points;
        this.plainPoints = plainPoints;
    }
    display() {
        fill(255);
        for (let i = 0; i < this.plainPoints.length; i++) {
            let pt = this.plainPoints[i];
            rect(pt.x - 2, pt.y - 2, 2, 3);
        }
        for (let i = 0; i < this.points.length; i++) {
            let pt = this.points[i];
            let randomOffsetX = random(-moveRangeOutward, moveRangeOutward);
            let randomOffsetY = random(-moveRangeOutward, moveRangeOutward);
            ellipse(pt.x + randomOffsetX, pt.y + randomOffsetY, 2);
        }
    }
}

class Fuzz3Effect {
    constructor(points) {
        this.points = points;
    }
    display() {
        for (let i = 0; i < this.points.length; i++) {
            let pt = this.points[i];
            let angle = random(TWO_PI);
            let length = random(1, 10);
            let endX = pt.x + cos(angle) * length;
            let endY = pt.y + sin(angle) * length;
            line(pt.x, pt.y, endX, endY);
        }
    }
}
