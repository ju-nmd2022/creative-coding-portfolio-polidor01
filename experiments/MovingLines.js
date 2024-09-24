
function setup() {
    createCanvas (innerWidth, innerHeight);
    background('#fbf8f3');
    field = new Array(cols * rows);
    for (let i = 0; i < 50; i++) {
        particles[i] = new Particle();
    }

    synth = new Tone.PolySynth(Tone.Synth).toDestination();
    filter = new Tone.Filter(800, "lowpass").toDestination();
    synth.connect(filter);

    Tone.Offline(() => {
        const env = new Tone.Envelope({
            attack: 0.1,
            decay: 0.2,
            sustain: 0.5,
            release: 0.8,
        }).toDestination();
        env.triggerAttackRelease(1);
    }, 1.5, 1);
}

let field;
let synth;
let filter;
let particles = [];
const cols = 10;
const rows = 10;
const scale = 6;
const inc = 0.1; //smoothness
let retroColors = [
    [0, 128, 128,],
    [205, 92, 92,],
    [255, 193, 37,],
    [128, 0, 128,],
    [107, 142, 35,],
];

window.addEventListener("click", () => {
    Tone.start();
});

class Particle {
    constructor() {
        this.position = createVector(random(width), random(height / 2, height));
        this.velocity = createVector(2, 0);
        this.maxSpeed = 1;
        this.prevPos = this.position.copy();
        this.strokeWeight = random(2, 2);
        this.color = color(random(retroColors)); 
    }

    follow(vectors) {
        let x = floor(this.position.x / scale);
        let y = floor(this.position.y / scale);
        let index = x + y * cols;
        let force = vectors[index];
        this.velocity.add(force);
    }

    update() {
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
    }

    show() {
        stroke(this.color);
        strokeWeight(this.strokeWeight);
        line(this.position.x, this.position.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }

    updatePrev() {
        this.prevPos.x = this.position.x;
        this.prevPos.y = this.position.y;
    }

    edges() {
        if (this.position.x > width) {
            this.position.x = 0;
            this.updatePrev();
        }
        if (this.position.x < 0) {
            this.position.x = width;
            this.updatePrev();
        }
    }
}

function draw() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
        particles[i].edges();
    }
}

function mousePressed() {
    let note = random(["C4", "D5", "E4", "G4", "A5"]);
    synth.triggerAttackRelease(note, "8n");

    filter.frequency.rampTo(1500, 0.5);

    for (let i = 0; i < particles.length; i++) {
        particles[i].velocity = createVector(2, random(-2, 2));
        particles[i].maxSpeed = random(1, 2);
        particles[i].color = color(random(retroColors));
    }
}

function mouseReleased() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].velocity = createVector(2, 0);
        particles[i].maxSpeed = 1;
    }
}

//some of the code was taken from ChatGPT but changed//
//some part of the code for the Tone was taken by the Tone.js webiste: https://tonejs.github.io/docs/15.0.4/classes/Envelope.html//