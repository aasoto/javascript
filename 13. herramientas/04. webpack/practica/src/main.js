import { loadGender, loadCargo } from "./prelim-data.js";
// import { Gerente } from "./gerente.js";

const nombre = document.querySelector('#nombre')
const fechaNacimiento = document.querySelector('#fecha-nacimiento')
const genero = document.querySelector('#genero')
const cargo = document.querySelector('#cargo')

const informacionEspecifica = document.querySelector('#informacion-especifica')

loadGender(genero)
loadCargo(cargo)


let empleado, edad

cargo.addEventListener('change', event => {
  //tomar valor seleccionado de un select
  // const generoValue = document.getElementById('genero').value
  // console.log(fechaNacimiento.value, generoValue, event.target.value)
  // empleado = new Persona(nombre, fechaNacimiento.value, generoValue, event.target.value)
  // edad = empleado.calcularEdad()
  // console.log(edad)
  if (event.target.value == 1) {
    const proyecto = document.createElement('div')
    proyecto.innerHTML = `
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <label for="" class="font-bold w-8/12">Proyectos</label>
        <button id="agregar-proyecto" class="bg-blue-500 w-3/12 rounded-md px-2 py-1 font-bold text-white">
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
    informacionEspecifica.appendChild(proyecto)
  }
  if (event.target.value == 2) {
    
  }
  if (event.target.value == 3) {
    
  }
  if (event.target.value == 4) {
    
  }
})