
function setup() {
    createCanvas(600, 600);
   
}

const size = 100;
const layers = 6;
const divider = 10;
const numRows = 50;
const numCols = 30;

function getRandomValue(pos, variance) {
    return pos + map(Math.random(), 0, 1, -variance, variance);
}

const colors = [
    [130, 123, 255],    
    [255, 255, 255],       
    [25, 192, 234],  
    [0, 100, 0],   
    [0, 51, 102],    
    [0, 119, 190],   
    [64, 224, 208], 
    [135, 206, 235], 
    [173, 216, 230], 
    [176, 224, 230], 
];

function drawLayers(x, y, size, layers) {
    const variance = size / 2;

    for(let i = layers; i > 0; i--) {
        const s = (size / layers) * i;
        
        const strokeColor = color(...random(colors));
        const fillColor = color(...random(colors));

        stroke(strokeColor);
        fill(fillColor);

        ellipse(
            getRandomValue(x, variance), 
            getRandomValue(y, variance), 
            s, 
            s
        );
    }
}

function draw() {
    background(25, 50, 110);

    const randomGap = 30;
    const baseSize = 20;

    const rows = height / (baseSize + randomGap);
    const cols = width / (baseSize + randomGap);

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            // Calculate the circle size based on the grid position
            let sizeFactor = map(x + y, 0, cols + rows - 3, 80, 30); // Gradually reduce size
            const layers = int(map(sizeFactor, 30, 100, 3, 12)); // Smaller circles have fewer layers
    
            // Calculate the position with spacing based on the gap
            const xPos = x * (baseSize + randomGap) + randomGap / 2;
            const yPos = y * (baseSize + randomGap) + randomGap / 2;
    
            // Draw the concentric circles with the calculated size
            drawLayers(xPos, yPos, sizeFactor, layers);
        }
    }
}
    // parts of the code was with the help of ChatGPT//
  
