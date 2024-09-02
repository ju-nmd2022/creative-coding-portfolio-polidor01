
let flowerSize = 6;
let amount = 20;
let gap = 100;

function setup () {
  createCanvas(600, 600);
  background(255, 255,255);
  
  }

  function flower () {
    noStroke();

    let petals = 10;

    for (let y =0; y < petals; y++) {
        for (let x = 0; x < petals; x++) {
            fill(205, 209, 220); 
            ellipse(x, y, 70);

            fill(174, 138, 207); 
            ellipse(x, y, 60);

            (fill(255, random (255, 179, 71), 155));
            ellipse(x, y, 36);
         
            
            rotate(PI / 6);
        }
    }

    
  }

  function draw () {
    let y = (height - flowerSize * amount - gap * (amount - 1)) / 2;
    for (let i = 0; i < amount; i++) {
    let x = (width - flowerSize * amount - gap * (amount - 1)) / 2;  
    for (let j = 0; j < amount; j++) {
        push();
        translate(x, y);
        flower();
        pop();
        x += flowerSize + gap;
    }  
    y += flowerSize + gap;
   }
 }


