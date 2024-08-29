function setup() {
    createCanvas(1000, 1000);
    noFill();
    noLoop();
    
}

// const size = 100;
// const layers = 10;


function drawLayers (x, y, size, layers) {
   for(let i = layers; i > 0; i--) {
     const s = size * (i / layers);

     stroke (random(124), random(423), random(120));


     ellipse (x, y, s, s);

   }
}

function draw() {
    background (440, 50, 68);

    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const randomSize = random (20, 300);
            const layers = int(map(randomSize, 20, 300, 3, 12));

            drawLayers(x * 100 + 50, y * 100 + 50, randomSize, layers);
        }
    }
    
}