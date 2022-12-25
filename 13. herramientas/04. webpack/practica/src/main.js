import { generos, cargos, loadGender, loadCargo } from "./prelim-data.js";
import { Gerente } from "./gerente.js";

const infoContainer = document.querySelector('#info-container')

const nombre = document.querySelector('#nombre')
const fechaNacimiento = document.querySelector('#fecha-nacimiento')
const genero = document.querySelector('#genero')
const cargo = document.querySelector('#cargo')
const btnGuardar = document.querySelector('#guardar')

const informacionEspecifica = document.querySelector('#informacion-especifica')

let cardInformation = false
let tablaGerentes = false
loadGender(genero)
loadCargo(cargo)


let empleado, edad

cargo.addEventListener('change', event => {
  
  // console.log(fechaNacimiento.value, generoValue, event.target.value)
  // empleado = new Persona(nombre, fechaNacimiento.value, generoValue, event.target.value)
  // edad = empleado.calcularEdad()
  // console.log(edad)
  if (event.target.value == 1) {
    const proyecto = document.createElement('div')
    proyecto.classList.add('col-span-1')
    proyecto.innerHTML = `
    <div id="proyectos" class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <label for="" class="font-bold w-8/12">Proyectos</label>
        <button id="agregar-proyecto" class="bg-green-500 w-3/12 rounded-md px-2 py-1 font-bold text-white">
          <div class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>              
          </div>
        </button>
      </div>
      <input type="text" class="proyecto" placeholder="Proyecto">
    </div>
    `
    const horario = document.createElement('div')
    horario.classList.add('col-span-1')
    horario.innerHTML = `
    <div class="flex flex-col gap-2">
      <input type="time" id="entrada" title="Entrada">
      <input type="time" id="salida" title="Salida">
    </div>
    `
    informacionEspecifica.append(proyecto, horario)
    
    agregarProyecto()
  }
  if (event.target.value == 2) {
    
  }
  if (event.target.value == 3) {
    
  }
  if (event.target.value == 4) {
    
  }
})

const agregarProyecto = () => {
 const btnAgregarProyecto = document.querySelector('#agregar-proyecto')
 const proyectosSpace = document.querySelector('#proyectos')

  btnAgregarProyecto.addEventListener('click', event => {
    const nuevoProyecto = document.createElement('input')
    nuevoProyecto.type = 'text'
    nuevoProyecto.placeholder = 'Proyecto'
    proyectosSpace.appendChild(nuevoProyecto)
  })
}

btnGuardar.addEventListener('click', event => {
  // tomar valor seleccionado de un select
  const generoValue = document.getElementById('genero').value
  const cargoValue = document.getElementById('cargo').value

  const tipoEmpleado = document.querySelector('#cargo')
  if (tipoEmpleado.value == 1) {
    empleado = new Gerente(nombre.value, fechaNacimiento.value, generos, generoValue, cargos, cargoValue)
    console.log(empleado.calcularEdad())
    makeCardInformacion()
    if (!tablaGerentes) {
      empleado.makeTablaGerentes()
      tablaGerentes = true
    }
    agregarATablaGerentes()
  }
  if (tipoEmpleado.value == 2) {
    makeCardInformacion()
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

const agregarATablaGerentes = () => {
  const tabla = document.querySelector('#tabla-gerentes-cuerpo')

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

  const colProyectos = document.createElement('td')
  colProyectos.classList.add('px-5')
  colProyectos.textContent = empleado.proyectos

  const colHorarios = document.createElement('td')
  colHorarios.classList.add('px-5')
  colHorarios.textContent = empleado.horario

  filaTabla.append(colNombre, colCargo, colEdad, colProyectos, colHorarios)
}

