console.log("Script Loaded");
let neoline;
let comicSans;
let moo1;
let moo2;
let moo3;
let moo4;
let moo5;
let moo6; // New MOO6
const ourWord = "MOO";

function preload() {
    neoline = loadFont("assets/fonts/neoline.otf");
    comicSans = loadFont("assets/fonts/comicSans.ttf");
}

function setup() { 
    canvas1 = createCanvas(1200, 400).parent("sketch-container");
    background(0);
    noStroke();

    // Generate text points for each MOO
    moo1 = comicSans.textToPoints(ourWord, 20, 150, 140, {sampleFactor: 0.2});
    moo2 = comicSans.textToPoints(ourWord, 20, 350, 140, {sampleFactor: 0.2});
    moo3 = comicSans.textToPoints(ourWord, 420, 150, 140, {sampleFactor: 0.2});
    moo4 = comicSans.textToPoints(ourWord, 420, 350, 140, {sampleFactor: 0.2});
    moo5 = comicSans.textToPoints(ourWord, 820, 150, 140, {sampleFactor: 0.2});
    moo6 = comicSans.textToPoints(ourWord, 820, 350, 140, {sampleFactor: 0.2});

    console.log("canvas1 setup");


}

function draw() {

    background(0); // Clear the background each frame

        // Draws a standard, unstylized red "moo"
        fill(255, 0, 0);
        for (let i = 0; i < moo1.length; i++) {
            circle(moo1[i].x, moo1[i].y, 6);
        }
    
        // Moo2 fades on the right half
        let minX2 = Math.min(...moo2.map(p => p.x));//finds smallest x point
        let maxX2 = Math.max(...moo2.map(p => p.x));//finds largest x point
        let fadeStartX = (minX2 + maxX2) / 2;
    
        for (let i = 0; i < moo2.length; i++) {
            let alpha = 255; //set to solid transparency
            if (moo2[i].x > fadeStartX) {
                let fadeFactor = (moo2[i].x - fadeStartX) / (maxX2 - fadeStartX); //defines how much each point should fade along the x axis
                fadeFactor = map(fadeFactor, 0, 1, 1, 0.3); //creates a value based on fadeFactor's input that will return a number to apply for transparency
                alpha = 255 * fadeFactor;
            }
            fill(255, 0, 0, alpha);
            circle(moo2[i].x, moo2[i].y, 6);
        }
    
        // Moo3 transitions from red to green
        let minX3 = Math.min(...moo3.map(p => p.x));//finds smallest x point
        let maxX3 = Math.max(...moo3.map(p => p.x)); //finds largest x point
        let colorChangeX3 = (minX3 + maxX3) / 2; //finds middle point of all x coordinates
    
        for (let i = 0; i < moo3.length; i++) {
            if (moo3[i].x < colorChangeX3) { // if statement saying if in first half, make red, second half, make green
                fill(255, 0, 0);
            } else {
                fill(0, 255, 0);
            }
            circle(moo3[i].x, moo3[i].y, 6);
        }
    
        // half red and green moo
        let minX4 = Math.min(...moo4.map(p => p.x)); //finds smallest x point
        let maxX4 = Math.max(...moo4.map(p => p.x)); //finds largest x point
        let colorChangeX4 = (minX4 + maxX4) / 2; // changes color at halfway point of x coords
        let minY4 = Math.min(...moo4.map(p => p.y)); //finds smallest y point
        let maxY4 = Math.max(...moo4.map(p => p.y)); //finds largest y point
    
        for (let i = 0; i < moo4.length; i++) {
            let size = map(moo4[i].y, minY4, maxY4, 1, 6);
    
            if (moo4[i].x < colorChangeX4) {
                fill(255, 0, 0);
            } else {
                fill(0, 255, 0);
            }
            circle(moo4[i].x, moo4[i].y, size);
        }
    
        // Moo5 red and white
        for (let i = 0; i < moo5.length; i++) {
            if (i % 2 === 0) { //checks for even number, if not even, go to else statement
                fill(255, 0, 0); // Red on even numbers
            } else {
                fill(255); // white on odd numbers
            }
            circle(moo5[i].x, moo5[i].y, 6);
        }


        // moo6 with sine wave
        let waveAmplitude = 15; // Amplitude of the wave

        fill(255, 0, 0); // Keep moo6 red
        moo6.forEach(pt => {
            let yOffset = sin(frameCount * .02 + pt.x * 0.05) * waveAmplitude; //adjusts y coordinate of point using 
            circle(pt.x, pt.y + yOffset, 6);
        });
}
