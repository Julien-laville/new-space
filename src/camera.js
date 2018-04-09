let di

class Camera {
  constructor(ctx, keyboardCtrl) {
    this.i
    this.ctx = ctx
    this.keyboardCtrl = keyboardCtrl
    this.position = {x : 0, y : 0}
    this.zf = 0.0001
    window.cam = (x,y) => {
      this.position = {x,y}
    }

    document.onwheel = (e) => {
      di = Math.pow(2, Math.floor(e.deltaY / 53))
      this.zf = this.zf * di
    }

    /* generate starfield */
    this.stars = (() => {
      let stars = []
      for(this.i = 0; this.i < 100; this.i ++) {
        stars.push({
          x : Math.random() * screen.width,
          y : Math.random() * screen.height
        })
      }
      return stars
    })()

  }

  circle(x,y,diameter, color) {
    this.ctx.beginPath()
    if(diameter * this.zf > 10) {
      this.ctx.arc(c.width/2 +(x + this.position.x) * this.zf, c.height/2 + (y + this.position.y) * this.zf, diameter * this.zf, 0, Math.PI * 2)
    } else {
      this.ctx.arc(c.width/2 +(x + this.position.x) * this.zf, c.height/2 + (y + this.position.y) * this.zf, 10, 0, Math.PI * 2)
    }
    this.ctx.fillStyle = color
    this.ctx.fill()
  }

  rect(x,y,w,h, color) {
    this.ctx.fillStyle = color
    if(w * this.zf > 10) {
      this.ctx.fillRect(c.width/2 +(x + this.position.x) * this.zf, c.height/2 + (y + this.position.y) * this.zf, w * this.zf, h * this.zf)
    } else {
      this.ctx.fillRect(c.width/2 +(x + this.position.x) * this.zf, c.height/2 + (y + this.position.y) * this.zf, 10, 10)
    }
  }

  background() {
    this.ctx.fillStyle = '#171921'
    this.ctx.fillRect(0,0,screen.width, screen.height)
    this.ctx.fillStyle = "#d4d5d6"
    for(this.i = 0; this.i < this.stars.length; this.i ++) {
      this.ctx.fillRect(this.stars[this.i].x, this.stars[this.i].y, 1, 1)
    }

  }

  // old but gold : remember js13k   context.arc(c.width/2+z(this.pos.x - camera.pos.x),c.height/2+z(this.pos.y - camera.pos.y),z(this.diameter),0,7)
  move() {
    if(this.keyboardCtrl.keys[90]) {
      this.position.y += (1/this.zf)
    }
    if(this.keyboardCtrl.keys[81]) {
      this.position.x += (1/this.zf)
    }
    if(this.keyboardCtrl.keys[83]) {
      this.position.y -= (1/this.zf)
    }
    if(this.keyboardCtrl.keys[68]) {
      this.position.x -= (1/this.zf)
    }
  }
}

export default Camera
