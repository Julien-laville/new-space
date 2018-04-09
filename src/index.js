import System from './system'
import Camera from './camera'
import Spaceship from './spaceship'
import KeyboardCtrl from './controllers/keyboard_controller'

/* size the screen */
c.width = window.innerWidth
c.height = window.innerHeight

/* init 2d context */
let ctx = c.getContext('2d')

/* tools */
let keyboardCtrl = new KeyboardCtrl()
let cam = new Camera(ctx, keyboardCtrl)

/* game */
let system = new System()
let spaceship = new Spaceship()
/* start */
let timeDilatation = 1

/* time managment */
let elapsed = Date.now()
let dt = 0

const draw = () => {
  system.draw(cam)
  spaceship.draw(cam)
  /* draw fps */
  ctx.fillText((1000 / dt).toFixed(1),0,10,10,10)
}

const loop = () => {
  /* reset */
  c.width += 0
  /* calc elapsed time */
  dt = Date.now() - elapsed
  elapsed = Date.now()
  /* move */
  cam.move()
  /* draw */
  draw()
  /* loop */
  requestAnimationFrame(loop)


}

loop()
