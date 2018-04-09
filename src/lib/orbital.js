class Orbital {
  const G = Math.pow(10,-11) * 6.6742
  static g(m1, d) { // m & kg
    return (G * m1) / Math.pow(d,2)
  }
}
