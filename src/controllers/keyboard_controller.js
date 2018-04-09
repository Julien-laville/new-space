class KeyCtrl {
  constructor() {
    this.keys = {90 : false,81 : false,83 : false,68 : false} /* ZQSD */
    document.onkeydown = (e) => {
      this.keys[e.keyCode] = true
    }
    document.onkeyup = (e) => {
      this.keys[e.keyCode] = false
    }
  }
}

export default KeyCtrl
