
let field;
let particles = [];
const cols = 10;
const rows = 10;
const scale = 6;
const inc = 0.1; //the smoothness 

function setup() {
    createCanvas(innerWidth, innerHeight);
    background('##fbf8f3');
    field = new Array(cols * rows);
    for (let i = 0; i < 500; i++) {
        particles[i] = new Particle();
    }
  }


  let retroColors = [ 
  [0, 128, 128],   
  [205, 92, 92],   
  [255, 193, 37],  
  [128, 0, 128],   
  [107, 142, 35], 
  ];


  function draw() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = noise(xoff, yoff) * TWO_PI * 2; //noise-based angle
            let v = p5.Vector.fromAngle(angle); // converting angle to vector
            field[index] = v; //vector is stored in field
            xoff += inc;
        }
        yoff += inc;
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].follow(field);
        particles[i].update();
        particles[i].show();
        particles[i].edges();
    }
 }    
 


  class Particle {
    constructor () {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(10, 0);
        // this.acceleration = createVector(0, 0);
        this.maxSpeed = 1;
        this.prevPos = this.position.copy();
        this.strokeWeight = random(1, 2);
        
        this.counter = 0;
        this.color = color(random(retroColors));
    }

    follow(vectors) {
        let x = floor(this.position.x / scale);
        let y = floor(this.position.y / scale);
        let index = x + y * cols;
        let force = vectors[index];
        // this.applyForce(force);
    }

    // applyForce(force) {
    //     this.acceleration.add(force);
    // }

    update() {
        // this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        // this.acceleration.mult(0);

        //restart when lifeSpan is done
        if (this.counter >= this.lifeSpan) {
            this.pos = createVector(random(width), random(height));
            this.prevPos = this.pos.copy();
            this.counter = 0;
        }
        this.counter++;
    }

    show() {
        stroke(this.color);
        strokeWeight(this.strokeWeight);
        line(this.position.x, this.position.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }

    updatePrev() {
        this.prevPos.x = this.prevPos.x;
        this.prevPos.y = this.prevPos.y;
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
        if (this.position.y > height) {
            this.position.y = 0;
            this.updatePrev();
        }
        if (this.position.y < 0) {
            this.position.y = height;
            this.updatePrev();
        }
    }

  }


//code helped by ChatGPT but changed and played around with. 












 






