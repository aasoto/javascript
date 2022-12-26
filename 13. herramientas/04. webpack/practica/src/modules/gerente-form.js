export const gerenteForm = (informacionEspecifica) => {
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
}

export const agregarEstudio = () => {
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

export const agregarProyecto = () => {
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

export const seleccionarEstudios = () => {
  const estudios = document.querySelectorAll('.estudio')
  let listadoEstudios = []
  estudios.forEach(element => {
    listadoEstudios.push(element.value)
  });

  return listadoEstudios
}

export const seleccionarProyectos = () => {
  const proyectos = document.querySelectorAll('.proyecto')
  let listadoProyectos = []
  proyectos.forEach(element => {
    listadoProyectos.push(element.value)
  });

  return listadoProyectos
}

export const seleccionarHorario = () => {
  const entrada = document.querySelector('#entrada')
  const salida = document.querySelector('#salida')
  const horario = {
    entrada: entrada.value,
    salida: salida.value
  }
  
  return horario
}




export const agregarATablaGerentes = (empleado) => {
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
