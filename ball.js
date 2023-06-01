class Ball{
    constructor(ctx,x, y, radius, color){
        this.ctx = ctx,
        this.x = x,
        this.y = y,
        this.color = color ,
        this.radius = radius,

        this.vx = Math.floor(Math.random() * 10) - 5,
        this.friction = 0.994;
        this.vy = 0,
        this.gravity = 3
    }
    draw(){

        this.ctx.fillStyle = this.color
        this.ctx.beginPath();
        this.ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2*Math.PI
            )
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        this.vy += this.gravity;
        this.y += this.vy;
    
        if (this.y + this.radius >= this.ctx.canvas.height) {
          this.y = this.ctx.canvas.height - this.radius;
          this.vy *= -1;
          this.vx *= this.friction;
        }
    
        this.x += this.vx;
        if (this.x + this.radius >= this.ctx.canvas.width) {
          this.vx *= -1;
        }
        if (this.x - this.radius <= 0) {
          this.vx *= -1;
        }
      }
}