import { generos, cargos, loadGender, loadCargo } from "./modules/prelim-data.js";
import { agregarATablaGerentes, agregarEstudio, agregarProyecto, gerenteForm, seleccionarEstudios, seleccionarHorario, seleccionarProyectos } from "./modules/gerente-form.js";
import { Gerente } from "./class/gerente.js";
import { ingenieroForm, agregarIngEstudio, agregarIngProyecto, seleccionarIngEstudios, seleccionarIngProyectos, agregarATablaIngenieros } from "./modules/ingeniero-form.js";
import { Ingeniero } from "./class/ingeniero.js";
import { agregarATablaMensajeros, mensajeroForm } from "./modules/mensajero-form.js";
import { Mensajero } from "./class/mensajero.js";
import { agregarATablaVigilantes, vigilanteForm } from "./modules/vigilante-form.js";
import { Vigilante } from "./class/vigilante.js";

const infoContainer = document.querySelector('#info-container')

const nombre = document.querySelector('#nombre')
const fechaNacimiento = document.querySelector('#fecha-nacimiento')
const genero = document.querySelector('#genero')
const cargo = document.querySelector('#cargo')

const btnLimpiar = document.querySelector('#limpiar')
const btnGuardar = document.querySelector('#guardar')

const informacionEspecifica = document.querySelector('#informacion-especifica')

let cardInformation = false
let tablaGerentes = false
let tablaIngenieros = false
let tablaMensajeros = false
let tablaVigilantes = false

loadGender(genero)
loadCargo(cargo)


let empleado, edad

cargo.addEventListener('change', event => {
  
  if (event.target.value == 1) {
    limpiarInformacionEspecifica()

    gerenteForm(informacionEspecifica)
    
    agregarEstudio()
    agregarProyecto()
  }
  if (event.target.value == 2) {
    limpiarInformacionEspecifica()

    ingenieroForm(informacionEspecifica)
  
    agregarIngEstudio()
    agregarIngProyecto()
  }
  if (event.target.value == 3) {
    limpiarInformacionEspecifica()

    mensajeroForm(informacionEspecifica)
  }
  if (event.target.value == 4) {
    limpiarInformacionEspecifica()

    vigilanteForm(informacionEspecifica)
  }
})



btnLimpiar.addEventListener('click', event => {
  limpiar()
})

btnGuardar.addEventListener('click', event => {
  // tomar valor seleccionado de un select
  const generoValue = document.getElementById('genero').value
  const cargoValue = document.getElementById('cargo').value

  const tipoEmpleado = document.querySelector('#cargo')
  if (tipoEmpleado.value == 1) {

    empleado = new Gerente (
      nombre.value, 
      fechaNacimiento.value, 
      generos, 
      generoValue, 
      cargos, 
      cargoValue, 
      seleccionarEstudios(), 
      seleccionarProyectos(),
      seleccionarHorario()
    )
      
    limpiar()

    makeCardInformacion()
    if (!tablaGerentes) {
      empleado.makeTablaGerentes()
      tablaGerentes = true
    }
    agregarATablaGerentes(empleado)
  }
  if (tipoEmpleado.value == 2) {
    const oficina = document.querySelector('#oficina')
    const numCompu = document.querySelector('#numCompu')

    empleado = new Ingeniero(
      nombre.value, 
      fechaNacimiento.value, 
      generos, 
      generoValue, 
      cargos, 
      cargoValue, 
      seleccionarIngEstudios(), 
      seleccionarIngProyectos(),
      oficina.value,
      numCompu.value
    )

    limpiar()

    makeCardInformacion()
    if (!tablaIngenieros) {
      empleado.makeTablaIngenieros()
      tablaIngenieros = true
    }

    agregarATablaIngenieros(empleado)
  }
  if (tipoEmpleado.value == 3) {

    const licencia = document.querySelector('#licencia')
    const tipoVehiculo = document.querySelector('#tipo-vehiculo')
    const placa = document.querySelector('#placa')

    empleado = new Mensajero (
      nombre.value, 
      fechaNacimiento.value, 
      generos, 
      generoValue, 
      cargos, 
      cargoValue,
      licencia.value,
      tipoVehiculo.value,
      placa.value
    )

    limpiar()

    makeCardInformacion()
    if (!tablaMensajeros) {
      empleado.makeTablaMensajeros()
      tablaMensajeros = true
    }

    agregarATablaMensajeros(empleado)
  }
  if (tipoEmpleado.value == 4) {
    const academia = document.querySelector('#academia')
    const tipoArma = document.querySelector('#tipo-arma')
    let salvoConducto = ''
    if (tipoArma.value == 3) {
      salvoConducto = document.querySelector('#salvo-conducto').value
    }

    empleado = new Vigilante (
      nombre.value, 
      fechaNacimiento.value, 
      generos, 
      generoValue, 
      cargos, 
      cargoValue,
      academia.value,
      tipoArma.value,
      salvoConducto
    )

    limpiar()

    makeCardInformacion()
    if (!tablaVigilantes) {
      empleado.makeTablaVigilante()
      tablaVigilantes = true
    }

    agregarATablaVigilantes(empleado)
  }
})

const makeCardInformacion = () => {
  if (!cardInformation) {
    const card = document.createElement('div')
    card.classList.add('card-full')
    card.classList.add('my-10')
    infoContainer.appendChild(card)

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header-primary')
    cardHeader.textContent = 'Listado de empleados'
    
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    cardBody.id = 'card-body-listado'

    card.append(cardHeader, cardBody)
    cardInformation = true
  }
}

const limpiar = () => {
  nombre.value = ''
  fechaNacimiento.value = ''
  genero.value = ''
  cargo.value = ''

  limpiarInformacionEspecifica()
}

const limpiarInformacionEspecifica = () => {
  while (informacionEspecifica.firstChild) {
    informacionEspecifica.removeChild(informacionEspecifica.firstChild);
  }
}
