class Game{
    constructor(ctx){
        this.ctx = ctx,
        this.balls = [],
        this.idIntervall = null
    }
    start(){
        this.idIntervall = setInterval(()=>{
            this.clear();
            this.move();
            this.draw();
        }

            ,1000/60)
     }
    newBall(){
        const radius = this.getRandomNumber(15,90)
        const x = this.getRandomNumber(radius, this.ctx.canvas.width-radius)
        const y = -radius
        const color = this.getRandomColor();
        const ball = new Ball(this.ctx, x, y,radius, color );
        this.balls.push(ball);
    }

    draw(){
        this.balls.forEach( (e) => e.draw())  
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      }

    move(){
        this.balls.forEach((ball)=>ball.move());
    }

    getRandomNumber (min, max){
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomColor () {
      return  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
    
}
