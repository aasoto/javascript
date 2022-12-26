const tipoArmas = [
  {
    value: '',
    text: 'Tipo de arma...'
  },{
    value: 1,
    text: 'Bolillo'
  },{
    value: 2,
    text: 'Navaja'
  },{
    value: 3,
    text: 'Arma de fuego'
  }
]

let salvoConductoInput = false

export const vigilanteForm = (informacionEspecifica) => {
  const academia = document.createElement('input')
  academia.id = 'academia'
  academia.placeholder = 'Academia'

  const tipoArma = document.createElement('select')
  tipoArma.id = 'tipo-arma'
  tipoArmas.forEach(element => {
    const option = document.createElement('option')
    option.value = element.value
    option.textContent = element.text
    tipoArma.appendChild(option)
  });

  const salvoConductoSpace = document.createElement('div')
  salvoConductoSpace.id = 'salvo-conducto-space'

  informacionEspecifica.append(academia, tipoArma, salvoConductoSpace)

  tipoArma.addEventListener('change', event => {
    if (event.target.value == 3 && !salvoConductoInput) {
      
      const salvoConducto = document.createElement('input')
      salvoConducto.id = 'salvo-conducto'
      salvoConducto.placeholder = 'Salvo conducto'
      
      salvoConductoSpace.appendChild(salvoConducto)

      salvoConductoInput = true
    } else {
      const salvoConductoLimpiar = document.getElementById('salvo-conducto-space')
      while (salvoConductoLimpiar.firstChild) {
        salvoConductoLimpiar.removeChild(salvoConductoLimpiar.firstChild);
      }
      salvoConductoInput = false
    }
  })

}

export const agregarATablaVigilantes = (empleado) => {
  const tabla = document.querySelector('#tabla-vigilante-cuerpo')

  const filaTabla = document.createElement('tr')
  filaTabla.classList.add('table-row')
  tabla.appendChild(filaTabla)

  const colNombre = document.createElement('td')
  colNombre.classList.add('px-5')
  colNombre.textContent = empleado.nombre

  const colCargo = document.createElement('td')
  colCargo.classList.add('px-5')
  colCargo.textContent = empleado.nombreCargo()

  const colEdad = document.createElement('td')
  colEdad.classList.add('px-5')
  colEdad.textContent = empleado.calcularEdad()

  const colAcademia = document.createElement('td')
  colAcademia.classList.add('px-5')
  colAcademia.textContent = empleado.academia
  
  const colTipoArma = document.createElement('td')
  colTipoArma.classList.add('px-5')
  colTipoArma.textContent = encontrarTipoArma(empleado.tipoArma)

  const colSalvoConducto = document.createElement('td')
  colSalvoConducto.classList.add('px-5')
  colSalvoConducto.textContent = empleado.salvoConducto

  filaTabla.append(colNombre, colCargo, colEdad, colAcademia, colTipoArma, colSalvoConducto)
}

const encontrarTipoArma = (arma) => {
  let tipoArma = ''
  tipoArmas.forEach(element => {
    if (element.value == arma && element.value != '') {
      tipoArma = element.text
    }
  });

  return tipoArma
}