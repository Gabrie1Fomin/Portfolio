console.log("Script Loaded");

let wiggle = [];
let waveSpeed = 0.3;  // Controls the speed of the wave for prototype 1
let waveHeight = 5;  // Controls the height of the wave for prototype 1
let waveSpeed2 = 2;  // Controls the speed of the wave for prototype 2
let waveHeight2 = 8;  // Controls the height of the wave for prototype 2

function preload() {
    bubbleText = loadFont("assets/fonts/bubbleText.ttf");
    moskitoes = loadFont("assets/fonts/Moskitoes.ttf");
}

function setup() { 
    createCanvas(1200, 400).parent("sketch-container");
    background(0);
    
    //Prototype 1
    wiggle = bubbleText.textToPoints("wiggle", 20, 175, 100, {sampleFactor: .6});
    wiggle2 = bubbleText.textToPoints("wiggle", 20, 275, 100, {sampleFactor: .6});

    //Prototype 2
    w = moskitoes.textToPoints("w", 580, 80, 100, {sampleFactor: .6});
    iLetter = moskitoes.textToPoints("i", 600, 130, 100, {sampleFactor: .6});
    g = moskitoes.textToPoints("g", 595, 180, 100, {sampleFactor: .6});
    g2 = moskitoes.textToPoints("g", 595, 230, 100, {sampleFactor: .6});
    l = moskitoes.textToPoints("l", 600, 280, 100, {sampleFactor: .6});
    e = moskitoes.textToPoints("e", 600, 330, 100, {sampleFactor: .6});

    //Prototype 3



    noStroke();
}

function draw() {
    background(0);
    stroke(255,255,255)
    line(400,0,400,400)
    line(800,0,800,400)
    
    // Prototype1
    for (let i = 0; i < wiggle.length; i++) {
        let pt = wiggle[i];
        
        // Use sin waves to move first fuzzs' points on y axis
        let offset = sin(frameCount * waveSpeed + pt.y * 0.1) * waveHeight;
        
        // Draw each point as a circle
        fill(255);
        circle(pt.x, pt.y + offset, 4);
    }

    for (let i = 0; i < wiggle2.length; i++) {
        let pt = wiggle2[i];
        
        // Use sin waves to move second fuzzs' points on y axis
        let offset = sin(frameCount * waveSpeed + pt.y * 0.1) * waveHeight;
        
        // Draws each point as a circle
        fill(255);
        circle(pt.x, pt.y + offset, 4);
    }

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
