import P5 from 'p5'

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
  }

  p5.draw = () => {
    // template code for now
    if (p5.mouseIsPressed) {
      p5.fill(0)
    } else {
      p5.fill(255)
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 80, 80)
  }

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }
}

new P5(sketch)
