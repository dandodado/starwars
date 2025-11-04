class Walker {
  constructor() {
    this.pos = createVector(width / 2, height / 8);
    this.vel = createVector();
    this.w = 20;
    this.d = 8;
    this.r = 0;
    this.l = 0;
  }

  move() {
    this.pos.add(this.vel);
  }
  reset() {
    this.pos = createVector(width / 2, height / 8);
    this.vel = createVector();
    this.w = 20;
    this.d = 8;
    this.r = 0;
    this.l = 0;
  }

  show() {
    circle(this.pos.x, this.pos.y, this.w);
  }

  gravity() {
    let g = createVector(0, 0.5);
    this.vel.add(g);
  }
  meetBox() {
    this.vel.y = this.vel.y * -0.4;
  }
  splitBall() {
    this.w = this.d;
    if (this.r < 35) {
      this.r = this.r + 0.7;
    }
    if (this.l > -45) {
      this.l = this.l - 0.9;
    }
    if (this.d > 0) {
      this.d = this.d - 0.2;
    }

    circle(this.pos.x + this.r, this.pos.y, this.d);
    circle(this.pos.x + this.l, this.pos.y, this.d);
  }
}
