const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes");

// An array of questions for the user to answer
const questions = [
  {
    type: 'input',
    name: 'logoText',
    message: 'Enter up to three characters for your logo:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword OR a hexadecimal number for your text:'
  },
  {
    type: 'list',
    name: 'logoShape',
    message: 'Choose a shape for your logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword OR a hexadecimal number for your shape:',
  }
]

function writeToFile(fileName, data) {
  fs.writeFile(`./examples/${fileName}-logo.svg`, data, (err) => {
    if (err) throw err;
    console.log('SVG logo successfully generated!')
  })
}

function init() {
  inquirer.prompt(questions).then((data) => {
    let svg;
    if (data.logoShape === 'circle') {
      svg = new Circle(data.logoText, data.textColor, data.shapeColor)
    }
    else if (data.logoShape === 'triangle') {
      svg = new Triangle(data.logoText, data.textColor, data.shapeColor)
    }
    else {
      svg = new Square(data.logoText, data.textColor, data.shapeColor)
    }
    const logo = `<svg version="1.1"
    width="500" height="500"
    xmlns="http://www.w3.org/2000/svg">

${svg.render()}

 <text x="250" y="275" font-size="60" text-anchor="middle" fill="${svg.textColor}">${svg.logoText}</text>

</svg>`

    writeToFile(data.logoShape, logo)
  })
}

init();