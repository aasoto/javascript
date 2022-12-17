const calculadora = document.querySelector('#calculadora')

const centralNumbers = ['3', '2', '1', '6', '5', '4', '9', '8', '7']
const superiorPannel = ['C', '^', '%', '/']
const bottomPannel = ['+/-', '0', '.', '=']
const rightPannel = ['+', '-', '*']

const structure = document.createElement('div')

export function makeStructure() {
  const container = document.createElement('div')
  container.classList.add('container-calculadora')
  calculadora.appendChild(container)
  structure.classList.add('structure')
  structure.id = "structure"
  container.appendChild(structure)
}

export function makeDisplay() {
  const display = document.createElement('div')
  display.classList.add('display')
  display.id = 'display'
  display.textContent = 0
  structure.appendChild(display)
}

export function makeKeyboard() {

  // Crear plantilla para el teclado
  const keyboardSpace = document.createElement('div')
  keyboardSpace.classList.add('keyboardSpace')
  structure.appendChild(keyboardSpace)

  //espacio para contener botones superiores
  const superiorPannelContent = document.createElement('div')
  superiorPannelContent.classList.add('keyboard')
  keyboardSpace.appendChild(superiorPannelContent)

  //crear botones superiores
  superiorPannel.forEach(element => {

    const buttonSpace = document.createElement('div')
    buttonSpace.classList.add('buttonSpace')
    superiorPannelContent.appendChild(buttonSpace)

    const button = document.createElement('button')
    button.classList.add('button')
    button.id = 'button'
    button.name = element
    button.textContent = element
    buttonSpace.appendChild(button)

  });

  //espacio para el teclado central
  const centralKeyboardSpace = document.createElement('div')
  centralKeyboardSpace.classList.add('keyboard')
  keyboardSpace.appendChild(centralKeyboardSpace)

  //espacio para albergar el teclado numerico central
  const centralNumbersSpace = document.createElement('div')
  centralNumbersSpace.classList.add('col-span-3')
  centralKeyboardSpace.appendChild(centralNumbersSpace)

  const centralNumbersContent = document.createElement('div')
  centralNumbersContent.classList.add('centralNumbers')
  centralNumbersSpace.appendChild(centralNumbersContent)
  
  //crear los botones del teclado numerico central
  centralNumbers.forEach(element => {
    const buttonSpaceNumber = document.createElement('div')
    buttonSpaceNumber.classList.add('buttonSpace')
    centralNumbersContent.prepend(buttonSpaceNumber)

    const buttonNumber = document.createElement('button')
    buttonNumber.classList.add('button')
    buttonNumber.id = 'button'
    buttonNumber.name = element
    buttonNumber.textContent = element
    buttonSpaceNumber.appendChild(buttonNumber)
  });

  const centralOperatorsSpace = document.createElement('div')
  centralOperatorsSpace.classList.add('col-span-1')
  centralKeyboardSpace.appendChild(centralOperatorsSpace) 

  const centralOperatorsContent = document.createElement('div')
  centralOperatorsContent.classList.add('centralOperators')
  centralOperatorsSpace.appendChild(centralOperatorsContent)

  rightPannel.forEach(element => {
    const buttonRightPannel = document.createElement('div')
    buttonRightPannel.classList.add('buttonSpace')
    centralOperatorsContent.prepend(buttonRightPannel)

    const button = document.createElement('button')
    button.classList.add('button')
    button.id = 'button'
    button.name = element
    button.textContent = element
    buttonRightPannel.appendChild(button)
  });

  //espacio para contener botones superiores
  const bottomPannelContent = document.createElement('div')
  bottomPannelContent.classList.add('keyboard')
  keyboardSpace.appendChild(bottomPannelContent)

  //crear botones superiores
  bottomPannel.forEach(element => {

    const buttonSpace = document.createElement('div')
    buttonSpace.classList.add('buttonSpace')
    bottomPannelContent.appendChild(buttonSpace)

    const button = document.createElement('button')
    button.classList.add('button')
    button.id = 'button'
    button.name = element
    button.textContent = element
    buttonSpace.appendChild(button)

  });
}