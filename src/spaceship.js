let acc
class Spaceship {
  constructor() {
    this.x = 0
    this.y = 0
  }


  draw(cam) {
    cam.rect(this.x, this.y, 100, 100)
  }

  move(dt) {

  }
}


export default Spaceship
