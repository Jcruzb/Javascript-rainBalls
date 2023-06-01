const canvas = document.querySelector('#my-canvas');
const ctx = canvas.getContext('2d')

const game = new Game(ctx);

const start = document.getElementById('start')
start.addEventListener('click',()=>{
    game.start()
    newBall.removeAttribute('disabled')
    start.setAttribute('disabled',true)

} )

const newBall = document.getElementById('new-ball')
newBall.addEventListener('click',()=>{
    console.log('ball')
    game.newBall()
})



