import { add, divide, expo, multiply, percent, subtract } from "./resolve.js"

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operations = ['+', '-', '*', '/', '%', '^']
const others = ['.', '+/-', '=', 'C']

export function addEvent(button) {
  button.addEventListener('click', event => {
    action(event.target.name)
  })
}

let float = false

function action (value) {
  numbers.forEach(element => {
    if (element == value) {
      if (float) {
        isAFloatNumber(value)
      } else {
        isANumber(value)
      }
    }
  });
  operations.forEach(element => {
    if (element == value) {
      isAnOperation(value)
    }
  });
  others.forEach(element => {
    if (element == value) {
      isAnother(value)
    }
  });
}

let memory = 0
let displayNumber = 0
let operation = ''
let symbol = ''
let transformed = false

function isANumber(number) {
  displayNumber = parseFloat(''.concat(displayNumber, number))
  console.log(displayNumber)
  display.textContent = displayNumber
}

function isAFloatNumber (float) {
  if (transformed) {
    displayNumber = parseFloat(''.concat(displayNumber, float))
    display.textContent = displayNumber
  } else {
    displayNumber = displayNumber.toString().concat('.')
    console.log(displayNumber)
    display.textContent = displayNumber
    transformed = true
  }
}

function isAnOperation(op) {
  operation = op
  console.log(operation)
  // resolve()
  saveInMemory(displayNumber)
}

function isAnother(sym) {
  symbol = sym
  console.log(symbol)
  other()
}

function saveInMemory (number) {
  memory = number
  displayNumber = 0
  console.log('memoria: ', memory)
}

function resolve() {
  switch (operation) {
    case '+':
      displayNumber = add(memory, displayNumber)
      print(displayNumber)
      break;
    case '-':
      displayNumber = subtract(memory, displayNumber)
      print(displayNumber)
      break;
    case '*':
      displayNumber = multiply(memory, displayNumber)
      print(displayNumber)
      break;
    case '/':
      displayNumber = divide(memory, displayNumber)
      print(displayNumber)
      break;
    case '%':
      displayNumber = percent(memory, displayNumber)
      print(displayNumber)
      break;
    case '^':
      displayNumber = expo(memory, displayNumber)
      print(displayNumber)
      break;
    default:
      break;
  }
}

function other() {
  switch (symbol) {
    case '=':
      resolve()
      break;
    case 'C':
      memory = 0
      displayNumber = 0
      display.textContent = displayNumber
      break;
    case '+/-':
      displayNumber = displayNumber * -1
      display.textContent = displayNumber
      break;
    case '.':
      float = true
      isAFloatNumber(displayNumber)
      break;
    default:
      break;
  }
}

function print() {
  const display = document.querySelector('#display')
  display.textContent = displayNumber
}