import { generos, cargos, loadGender, loadCargo } from "./modules/prelim-data.js";
import { agregarATablaGerentes, agregarEstudio, agregarProyecto, gerenteForm, seleccionarEstudios, seleccionarHorario, seleccionarProyectos } from "./modules/gerente-form.js";
import { Gerente } from "./class/gerente.js";
import { ingenieroForm, agregarIngEstudio, agregarIngProyecto, seleccionarIngEstudios, seleccionarIngProyectos } from "./modules/ingeniero-form.js";
import { Ingeniero } from "./class/ingeniero.js";

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
  
    agregarEstudio()
    agregarProyecto()
  }
  if (event.target.value == 3) {
    limpiarInformacionEspecifica()
  }
  if (event.target.value == 4) {
    limpiarInformacionEspecifica()
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

    makeCardInformacion()
    if (!tablaIngenieros) {
      empleado.makeTablaIngenieros()
      tablaIngenieros = true
    }
  }
  if (tipoEmpleado.value == 3) {
    makeCardInformacion()
  }
  if (tipoEmpleado.value == 4) {
    makeCardInformacion()
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
