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

function writeToFile(data) {
  fs.writeFile('./examples/logo.svg', data, (err) => {
    if (err) throw err;
    console.log('SVG logo successfully generated!')
  })
}

function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile('logo.svg', data)
  })
}

init();