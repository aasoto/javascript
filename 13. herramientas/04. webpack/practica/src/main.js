import { generos, cargos, loadGender, loadCargo } from "./prelim-data.js";
import { Gerente } from "./gerente.js";

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
loadGender(genero)
loadCargo(cargo)


let empleado, edad

cargo.addEventListener('change', event => {
  
  // console.log(fechaNacimiento.value, generoValue, event.target.value)
  // empleado = new Persona(nombre, fechaNacimiento.value, generoValue, event.target.value)
  // edad = empleado.calcularEdad()
  // console.log(edad)
  if (event.target.value == 1) {
    limpiarInformacionEspecifica()
    const estudios = document.createElement('div')
    estudios.classList.add('col-span-1')
    estudios.innerHTML = `
    <div id="estudios" class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <label for="" class="font-bold w-8/12">Estudios</label>
        <button id="agregar-estudio" class="bg-green-500 w-3/12 rounded-md px-2 py-1 font-bold text-white">
          <div class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>              
          </div>
        </button>
      </div>
      <input type="text" class="estudio" placeholder="Estudio">
    </div>
    `

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
    informacionEspecifica.append(estudios, proyecto, horario)
    
    agregarEstudio()
    agregarProyecto()
  }
  if (event.target.value == 2) {
    limpiarInformacionEspecifica()
  }
  if (event.target.value == 3) {
    limpiarInformacionEspecifica()
  }
  if (event.target.value == 4) {
    limpiarInformacionEspecifica()
  }
})

const agregarEstudio = () => {
  const btnAgregarEstudio = document.querySelector('#agregar-estudio')
  const estudiosSpace = document.querySelector('#estudios')
 
   btnAgregarEstudio.addEventListener('click', event => {
     const nuevoEstudio = document.createElement('input')
     nuevoEstudio.classList.add('estudio')
     nuevoEstudio.type = 'text'
     nuevoEstudio.placeholder = 'Estudio'
     estudiosSpace.appendChild(nuevoEstudio)
   })
 }

const agregarProyecto = () => {
 const btnAgregarProyecto = document.querySelector('#agregar-proyecto')
 const proyectosSpace = document.querySelector('#proyectos')

  btnAgregarProyecto.addEventListener('click', event => {
    const nuevoProyecto = document.createElement('input')
    nuevoProyecto.classList.add('proyecto')
    nuevoProyecto.type = 'text'
    nuevoProyecto.placeholder = 'Proyecto'
    proyectosSpace.appendChild(nuevoProyecto)
  })
}

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
      generos, generoValue, 
      cargos, 
      cargoValue, 
      seleccionarEstudios(), 
      seleccionarProyectos(),
      seleccionarHorario(),
      limpiar()
    )

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

const seleccionarEstudios = () => {
  const estudios = document.querySelectorAll('.estudio')
  let listadoEstudios = []
  estudios.forEach(element => {
    listadoEstudios.push(element.value)
  });

  return listadoEstudios
}

const seleccionarProyectos = () => {
  const proyectos = document.querySelectorAll('.proyecto')
  let listadoProyectos = []
  proyectos.forEach(element => {
    listadoProyectos.push(element.value)
  });

  return listadoProyectos
}

const seleccionarHorario = () => {
  const entrada = document.querySelector('#entrada')
  const salida = document.querySelector('#salida')
  const horario = {
    entrada: entrada.value,
    salida: salida.value
  }
  
  return horario
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

  const colEstudios = document.createElement('td')
  colEstudios.classList.add('px-5')
  colEstudios.appendChild(lista(empleado.estudios))

  const colProyectos = document.createElement('td')
  colProyectos.classList.add('px-5')
  colProyectos.appendChild(lista(empleado.proyectos))

  const colHorarios = document.createElement('td')
  colHorarios.classList.add('px-5')
  colHorarios.appendChild(listadoHorario(empleado.horario))

  filaTabla.append(colNombre, colCargo, colEdad, colEstudios, colProyectos, colHorarios)
}

const lista = (array) => {
  const lista = document.createElement('ul')
  array.forEach(element => {
    const item = document.createElement('li')
    item.textContent = element
    lista.appendChild(item)
  });
  return lista
}

const listadoHorario = (object) => {
  console.log(object)
  const lista = document.createElement('ul')

  const entrada = document.createElement('li')
  entrada.textContent = `Entrada: ${object.entrada}`

  const salida = document.createElement('li')
  salida.textContent = `Salida: ${object.salida}`

  lista.append(entrada, salida)

  return lista
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
