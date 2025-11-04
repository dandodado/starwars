let ball;
let bx;
let f=0;
function setup() {
  createCanvas(400, 400); 
  ball = new Walker();
  bx = new Box();
}


function draw() {
  background(220);
  ball.move();
  ball.show();
  if(ball.d<1){
  ball.reset();
    f=0;
  }
  ball.gravity();
  if(ball.pos.y>bx.pos.y-bx.w/2){
    ball.meetBox();
    f=1;
  }
  if(f==1){
  ball.splitBall();
  
  }
  bx.see();

  
}