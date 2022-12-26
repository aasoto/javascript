const tiposVehiculos = [
  {
    value: '',
    text: 'Tipo de vehiculo...'
  },{
    value: 1,
    text: 'Bicicleta'
  },{
    value: 2,
    text: 'Motocicleta'
  },{
    value: 3,
    text: 'Automovil'
  },{
    value: 4,
    text: 'Camión'
  },
]

export const mensajeroForm = (informacionEspecifica) => {
  const licencia = document.createElement('input')
  licencia.type = 'text'
  licencia.id = 'licencia'
  licencia.placeholder = 'Num. licencia'

  const tipoVehiculo = document.createElement('select')
  tipoVehiculo.id = 'tipo-vehiculo'
  tiposVehiculos.forEach(element => {
    const option = document.createElement('option')
    option.value = element.value
    option.textContent = element.text
    tipoVehiculo.appendChild(option)
  });

  const placa = document.createElement('input')
  placa.type = 'text'
  placa.id = 'placa'
  placa.placeholder = 'Num. Placa'

  informacionEspecifica.append(licencia, tipoVehiculo, placa)
}

export const agregarATablaMensajeros = (empleado) => {
  const tabla = document.querySelector('#tabla-mensajeros-cuerpo')

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

  const colLicencia = document.createElement('td')
  colLicencia.classList.add('px-5')
  colLicencia.textContent = empleado.licencia
  
  const colTipoVehiculo = document.createElement('td')
  colTipoVehiculo.classList.add('px-5')
  colTipoVehiculo.textContent = encontrarTipoVehiculo(empleado.tipoVehiculo)

  const colPlaca = document.createElement('td')
  colPlaca.classList.add('px-5')
  colPlaca.textContent = empleado.placa

  filaTabla.append(colNombre, colCargo, colEdad, colLicencia, colTipoVehiculo, colPlaca)
}

const encontrarTipoVehiculo = (vehiculo) => {
  let tipoVehiculo = ''
  tiposVehiculos.forEach(element => {
    if (element.value == vehiculo && element.value != '') {
      tipoVehiculo = element.text
    }
  });

  return tipoVehiculo
}