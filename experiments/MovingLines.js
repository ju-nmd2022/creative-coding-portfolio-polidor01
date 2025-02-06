
function setup() {
    createCanvas (innerWidth, innerHeight);
    background('#fbf8f3');

    synth = new Tone.PolySynth(Tone.Synth).toDestination();


    Tone.start().then(() => {
    setInterval(() => {
    let newLine = new Line();
    lines.push(newLine);
    }, 1000); 
    });
}


let synth;
let lines = [];
let retroColors = [
    [0, 128, 128,],
    [205, 92, 92,],
    [255, 193, 37,],
    [128, 0, 128,],
    [107, 142, 35,],
];


class Line {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(random(-2, 2), random(-2, 2));
        this.prevPos = this.position.copy();
        this.color = color(random(retroColors)); 
    }

    update() {
        this.position.add(this.velocity);

       if (this.position.x > width || this.position.x < 0) {
           this.velocity.x *= -1; 
           this.playTone();
        }
       if (this.position.y > height || this.position.y < 0) {
           this.velocity.y *= -1; 
           this.playTone();
        }
    }

    show() {
        stroke(this.color);
        strokeWeight(3);
        line(this.position.x, this.position.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }

    updatePrev() {
        this.prevPos.x = this.position.x;
        this.prevPos.y = this.position.y;
    }

    playTone() {
        let angle = this.velocity.heading();
         let note;
     
         if (angle >= -Math.PI / 4 && angle < Math.PI / 4) {
             note = "C4";
         } else if (angle >= Math.PI / 4 && angle < 3 * Math.PI / 4) {
             note = "D5"; 
         } else if (angle >= -3 * Math.PI / 4 && angle < -Math.PI / 4) {
             note = "E4"; 
         } else {
             note = "G4";
         }

         synth.triggerAttackRelease(note, "8n");
      }
}

function draw() {
    for (let i = 0; i < lines.length; i++) {
        lines[i].update();
        lines[i].show();
    }
}

// //some of the code was taken from ChatGPT but changed//
// //some part of the code for the Tone was taken by the Tone.js webiste: https://tonejs.github.io/docs/15.0.4/classes/Envelope.html//

// For this new version and removed the Particles class the added the lines to make it simple
// and automatic where the lines appear and move by themselves and when they hit the corners they make sound//

