

let flowerSize = 6;
let amount = 20;
let gap = 100;

function setup () {
  createCanvas(innerWidth, innerHeight);
  background(255, 255,255);
  
  }

  function flower () {
    noStroke();

    let petals = 10;

    for (let y =0; y < petals; y++) {
        for (let x = 0; x < petals; x++) {
            (fill(255, random (255, 179, 71), 155));
            rect(x, y, 20, 15);

            (fill(255, random (174, 138, 207), 155));
            rect(x, y, 40, 1);
            
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