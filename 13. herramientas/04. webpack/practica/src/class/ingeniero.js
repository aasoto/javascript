import { Persona } from "./persona.js";

export class Ingeniero extends Persona {

  #estudios
  #proyectos
  #oficina
  #numCompu
  #smlv
  #numSmlv
  #ingCampos = ['Nombres', 'Cargo', 'Edad', 'Estudios', 'Proyectos', 'Oficina', 'Num. Compu.']

  constructor (nombre, fechaNacimiento, generos, genero, cargos, cargo, estudios, proyectos, oficina, numCompu, smlv, numSmlv) {
    super (nombre, fechaNacimiento, generos, genero, cargos, cargo)
    this.#estudios = estudios
    this.#proyectos = proyectos
    this.#oficina = oficina
    this.#numCompu = numCompu
  }

  makeTablaIngenieros () {
    const cardBody = document.querySelector('#card-body-listado')

    const tabla = document.createElement('table')
    tabla.classList.add('w-full')
    tabla.classList.add('my-5')
    cardBody.appendChild(tabla)

    const headerTabla = document.createElement('thead')
    headerTabla.classList.add('bg-gray-300')
    tabla.appendChild(headerTabla)

    this.#ingCampos.forEach( element => {
      const theadTitulos = document.createElement('th')
      theadTitulos.classList.add('py-2')
      theadTitulos.classList.add('px-5')
      theadTitulos.textContent = element
      headerTabla.appendChild(theadTitulos)
    })

    const tablaCuerpo = document.createElement('tbody')
    tablaCuerpo.id = 'tabla-ingenieros-cuerpo'
    tabla.appendChild(tablaCuerpo)
  }

  set estudios(value) {
    this.#estudios = value
  }

  get estudios() {
    return this.#estudios
  }

  set proyectos(value) {
    this.#proyectos = value
  }

  get proyectos() {
    return this.#proyectos
  }

  set oficina(value) {
    this.#oficina = value
  }

  get oficina() {
    return this.#oficina
  }

  set numCompu(value) {
    this.#numCompu = value
  }

  get numCompu() {
    return this.#numCompu
  }

  set smlv(value) {
    this.#smlv = value
  }

  get smlv() {
    return this.#smlv
  }

  set numSmlv(value) {
    this.#numSmlv = value
  }

  get numSmlv() {
    return this.#numSmlv
  }
}