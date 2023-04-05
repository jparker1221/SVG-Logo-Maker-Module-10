const inquirer = require('inquirer');
const fs = require('fs');

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
