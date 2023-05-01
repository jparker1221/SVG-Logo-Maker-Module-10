class Shape {
  constructor(logoText, textColor, shapeColor) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setColor(color) {
    this.shapeColor = color;
  }
}

class Circle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor)
  }
  render() {
    return `<circle cx="250" cy="250" r="100" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`
  }
}

class Triangle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor)
  }
  render() {
    return `<polygon points="100,325 400,325, 250,125" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`
  }
}

class Square extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor)
  }
  render() {
    return `<rect x="150" y="150" width="200" height="200" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`
  }
}

// exports the shapes so that they can be used in other files
module.exports = {Shape, Circle, Triangle, Square}