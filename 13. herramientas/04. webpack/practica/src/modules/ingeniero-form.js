export const ingenieroForm = (informacionEspecifica) => {
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

  const oficinaSpace = document.createElement('div')
  const oficina = document.createElement('input')
  oficina.id = 'oficina'
  oficina.type = 'text'
  oficina.placeholder = 'Oficina'
  oficinaSpace.appendChild(oficina)

  const numCompuSpace = document.createElement('div')
  const numCompu = document.createElement('input')
  numCompu.id = 'numCompu'
  numCompu.type = 'text'
  numCompu.placeholder = 'Número de computador'
  numCompuSpace.appendChild(numCompu)

  informacionEspecifica.append(estudios, proyecto, oficinaSpace, numCompuSpace)
}

export const agregarIngEstudio = () => {
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

export const agregarIngProyecto = () => {
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

export const seleccionarIngEstudios = () => {
  const estudios = document.querySelectorAll('.estudio')
  let listadoEstudios = []
  estudios.forEach(element => {
    listadoEstudios.push(element.value)
  });

  return listadoEstudios
}

export const seleccionarIngProyectos = () => {
  const proyectos = document.querySelectorAll('.proyecto')
  let listadoProyectos = []
  proyectos.forEach(element => {
    listadoProyectos.push(element.value)
  });

  return listadoProyectos
}

export const agregarATablaIngenieros = (empleado) => {
  const tabla = document.querySelector('#tabla-ingenieros-cuerpo')

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

  const colOficina = document.createElement('td')
  colOficina.classList.add('px-5')
  colOficina.textContent = empleado.oficina
  
  const colNumCompu = document.createElement('td')
  colNumCompu.classList.add('px-5')
  colNumCompu.textContent = empleado.numCompu

  filaTabla.append(colNombre, colCargo, colEdad, colEstudios, colProyectos, colOficina, colNumCompu)
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
