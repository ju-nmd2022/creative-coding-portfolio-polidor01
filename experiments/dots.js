
let position;
let velocity;


function setup() {
    createCanvas(500, 500);
    position = createVector(110, 267);
    velocity = createVector(5, 8);  

    background (232, 218, 239);

    const randomGap = 70;
    const baseSize = 10;

    const rows = height / (baseSize + randomGap);
    const cols = width / (baseSize + randomGap);

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let sizeFactor = map(x + y, 0, cols + rows - 3, 30, 10); // Gradually reduce size
          const layers = int(map(sizeFactor, 20, 100, 3, 3)); // Smaller circles have fewer layers
    
          const xPos = x * (baseSize + randomGap) + randomGap / 2;
          const yPos = y * (baseSize + randomGap) + randomGap / 2;
    
          // Draw the concentric circles with the calculated size
          drawLayers(xPos, yPos, sizeFactor, layers);
  
        }
        
    }

}

// const size = 10;
// const layers = 10;

const colors = [
  [230, 126, 34],
  [211, 84, 0],   
  [245, 176, 65],   
  [185, 119, 14],   
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

    // fill(232, 218, 239);
    noStroke();
    ellipse(position.x, position.y, 22);

    if (position.x > width || position.x < 0) {
        velocity.x *= -1;
       }
       if (position.y > height || position.y < 0) {
        velocity.y *= -1;
       }
    
       position.add(velocity);
       fill(random(colors));
       noStroke();
       ellipse(position.x, position.y, 20);


}      
 

//parts of the code was with the help of ChatGPT and altered//
//the main code was taken by one of Garrits examples and changed into my idea https://ju.slides.com/garrit/cc2024-complexity?token=Nl2_bLqJ#/5/5//
    
    
  
      
