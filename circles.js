
function setup() {
    createCanvas(1000, 1000);
    noLoop();
    
}

const size = 10;
// const layers = 10;

const colors = [
    [33, 144, 255],
    [174, 198, 207],
    [255, 255, 255],
    [255, 179, 71],
    [255, 0, 0],
    [0, 100, 0],
];



function drawLayers (x, y, size, layers) {
   for(let i = layers; i > 0; i--) {
     const s = size * (i / layers);

     const strokeColor = random(colors);
     const fillColor = random(colors);

     stroke(strokeColor);
     fill(fillColor);


     ellipse (x, y, s, s);

   }
}

function draw() {
    background (25, 50, 100);

    const randomGap = 50;
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
 

//parts of the code was with the help of ChatGPT//
    
    
  
      






















