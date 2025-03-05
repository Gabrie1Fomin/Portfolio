console.log("Script Loaded");

let wiggle = [];
let waveSpeed2 = 2;  // Controls the speed of the wave for prototype 2
let waveHeight2 = 8;  // Controls the height of the wave for prototype 2

function preload() {
    bubbleText = loadFont("assets/fonts/bubbleText.ttf");
    moskitoes = loadFont("assets/fonts/Moskitoes.ttf");
}

function setup() { 
    createCanvas(400, 400).parent("sketch-container");
    background(0);
    
    w = moskitoes.textToPoints("w", 180, 80, 100, {sampleFactor: .6});
    iLetter = moskitoes.textToPoints("i", 200, 130, 100, {sampleFactor: .6});
    g = moskitoes.textToPoints("g", 195, 180, 100, {sampleFactor: .6});
    g2 = moskitoes.textToPoints("g", 195, 230, 100, {sampleFactor: .6});
    l = moskitoes.textToPoints("l", 200, 280, 100, {sampleFactor: .6});
    e = moskitoes.textToPoints("e", 200, 330, 100, {sampleFactor: .6});
}

function draw() {
    background(0);
    stroke(255,255,255)
    
  // Prototype2
    //same idea as the first prototype's scripts, except along the x axis and per letter due to being vertical
    //W loop
    for (let i = 0; i < w.length; i++) {
        let pt = w[i];
        
        // Use sin waves to move points
        let offset = sin(frameCount * waveSpeed2 + pt.x * 0.1) * waveHeight2;
        
        // Draws each point as a circle
        fill(255);
        circle(pt.x, pt.y + offset, 2);
    }

    //I loop
    for (let i = 0; i < iLetter.length; i++) {
        let pt = iLetter[i];
        
        // Use sin waves to move points
        let offset = sin(frameCount * waveSpeed2 + pt.x * 0.1) * waveHeight2;
        
        // Draws each point as a circle
        fill(255);
        circle(pt.x, pt.y + offset, 2);
    }

    //G loop
    for (let i = 0; i < g.length; i++) {
        let pt = g[i];
        
        // Use sin waves to move points
        let offset = sin(frameCount * waveSpeed2 + pt.x * 0.1) * waveHeight2;
        
        // Draws each point as a circle
        fill(255);
        circle(pt.x, pt.y + offset, 2);
    }

    //2nd G loop
    for (let i = 0; i < g2.length; i++) {
        let pt = g2[i];
        
        // Use sin waves to move points
        let offset = sin(frameCount * waveSpeed2 + pt.x * 0.1) * waveHeight2;
        
        // Draws each point as a circle
        fill(255);
        circle(pt.x, pt.y + offset, 2);
    }

    //L loop
    for (let i = 0; i < l.length; i++) {
        let pt = l[i];
        
        // Use sin waves to move points
        let offset = sin(frameCount * waveSpeed2 + pt.x * 0.1) * waveHeight2;
        
        // Draws each point as a circle
        fill(255);
        circle(pt.x, pt.y + offset, 2);
    }

        //E loop
    for (let i = 0; i < e.length; i++) {
        let pt = e[i];
        
        // Use sin waves to move points
        let offset = sin(frameCount * waveSpeed2 + pt.x * 0.1) * waveHeight2;
        
        // Draws each point as a circle
        fill(255);
        circle(pt.x, pt.y + offset, 2);
    }

}