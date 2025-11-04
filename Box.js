class Box {
  
  constructor() {
    this.pos = createVector(width/2, height-100);
    this.vel = createVector();
  	this.w = 100;
  }
  
  see() {
    rectMode(CENTER)
   rect(this.pos.x,this.pos.y,this.w);
  }
   gravity() {
     let g = createVector(0, 0.5);
     this.vel.add(g);
}
 
}