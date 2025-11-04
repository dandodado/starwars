let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.3);
  let wind = createVector(0.01, 0);
  ball.addForce(gravity, wind);

  ball.update();
  ball.show();
}
