const {Shape, Circle, Triangle, Square} = require("./shapes")
test('can set text in shape', () => {
    const shape = new Shape ("abc", "blue", "green")
  expect(shape.logoText).toBe("abc")
});
test('testing render for circle', () => {
    const circle = new Circle ("abc", "blue", "green")
  expect(circle.render()).toBe(`<circle cx="250" cy="250" r="100" stroke="green" fill="green" stroke-width="5"/>`)
});
test('testing render for triangle', () => {
    const triangle = new Triangle ("abc", "blue", "green")
  expect(triangle.render()).toBe(`<polygon points="50 15, 100 100, 0 100" stroke="green" fill="green" stroke-width="5"/>`)
});
test('testing render for square', () => {
    const square = new Square ("abc", "blue", "green")
  expect(square.render()).toBe(`<rect x="150" y="150" width="200" height="200" stroke="green" fill="green" stroke-width="5"/>`)
});