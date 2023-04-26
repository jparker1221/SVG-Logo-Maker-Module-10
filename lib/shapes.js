class Shape {
  constructor(logoText, textColor, shapeColor) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  render() {
    return `<circle></circle>`
  }
}

class Triangle extends Shape {
  render() {
    return `<triangle></triangle>`
  }
}

class Square extends Shape {
  render() {
    return `<square></square>`
  }
}

// exports the shapes so that they can be used in other files
module.exports = {Circle, Triangle, Square}