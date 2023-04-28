const {Shape, Square, Circle, Triangle} = require("./shapes")
test('can set text in shape', () => {
    const shape = new Shape ("abc", "blue", "green")
  expect(shape.logoText).toBe("abc")
});
test('testing render for circle', () => {
    const circle = new Circle ("abc", "blue", "green")
  expect(circle.render()).toBe(`<circle cx="25" cy="75" r="20" stroke="green" fill="green" stroke-width="5"/>`)
});
test('can set text in shape', () => {
    const shape = new Shape ("abc", "blue", "green")
  expect(shape.logoText).toBe("abc")
});
test('can set text in shape', () => {
    const shape = new Shape ("abc", "blue", "green")
  expect(shape.logoText).toBe("abc")
});
test('can set text in shape', () => {
    const shape = new Shape ("abc", "blue", "green")
  expect(shape.logoText).toBe("abc")
});