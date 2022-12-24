const generos = [
  {
    value: '',
    text: 'Genero...'
  },{
    value: 'm',
    text: 'Masculino'
  },{
    value: 'f',
    text: 'Femenino'
  },{
    value: 'o',
    text: 'Otro'
  },{
    value: 'ne',
    text: 'No especifico'
  }
]

const cargos = [
  {
    value: '',
    text: 'Cargo...'
  },{
    value: 1,
    text: 'Gerente'
  },{
    value: 2,
    text: 'Ingeniero'
  },{
    value: 3,
    text: 'Mensajero'
  },{
    value: 4,
    text: 'Vigilante'
  }
]

export const loadGender = (select) => {
  generos.forEach(element => {
    const {value, text} = element
    const option = document.createElement('option')
    option.value = value
    option.textContent = text
    select.appendChild(option)
  });
}

export const loadCargo = (select) => {
  cargos.forEach(element => {
    const {value, text} = element
    const option = document.createElement('option')
    option.value = value
    option.textContent = text
    select.appendChild(option)
  });
}