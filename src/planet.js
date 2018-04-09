let zf = 0.00001

class Planet {

  constructor(raw) {
    this.position = {x : raw.position.x, y : raw.position.y}
    this.mass = raw.mass
    this.diameter = raw.diameter
    this.color = raw.color
  }

  draw(cam) {
    cam.circle(this.position.x, this.position.y, this.diameter, this.color)
  }

}

export default Planet
