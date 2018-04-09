import Planet from './planet'
let i
const sun = {
    name : 'sona',
    mass : 2*10^30,
    diameter : Math.pow(10,6), //km
    position : {x : 0, y : 0},
    color : '#ffcc00',
    children : [{
      name : 'tera',
      position : {x : 150*Math.pow(10,5), y : 0},
      mass : 6*Math.pow(10,24),
      diameter : 1200, //km
      color : '#018fae'
  }]
}

class System {
  constructor() {
    this.sun = new Planet(sun)
    this.planets = sun.children.map((planet) => {
      return new Planet(planet)
    })
  }

  draw(cam) {
    cam.background()
    this.sun.draw(cam)
    for(i = 0; i < this.planets.length; i += 1) {
      this.planets[i].draw(cam)
    }
  }
}

export default System
