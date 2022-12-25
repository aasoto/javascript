import { Persona } from "./persona.js";
export class Gerente extends Persona {

  #estudios
  #proyectos
  #horario
  #smlv
  #numSmlv
  #gerenteCampos = ['Nombres', 'Cargo', 'Edad', 'Proyectos', 'Horarios']

  constructor (nombre, fechaNacimineto, generos, genero, cargos, cargo, estudios, proyectos, horario, smlv, numSmlv) {
    super (nombre, fechaNacimineto, generos, genero, cargos, cargo)
    this.#estudios = estudios
    this.#proyectos = proyectos
    this.#horario = horario
    this.#smlv = smlv
    this.#numSmlv = numSmlv
  }

  calcularSalario () {
    return this.#smlv * this.#numSmlv
  }

  makeTablaGerentes () {
      const cardBody = document.querySelector('#card-body-listado')
  
      const tabla = document.createElement('table')
      tabla.classList.add('w-full')
      cardBody.appendChild(tabla)
  
      const headerTabla = document.createElement('thead')
      headerTabla.classList.add('bg-gray-300')
      tabla.appendChild(headerTabla)
  
      this.#gerenteCampos.forEach( element => {
        const theadTitulos = document.createElement('th')
        theadTitulos.classList.add('py-2')
        theadTitulos.classList.add('px-5')
        theadTitulos.textContent = element
        headerTabla.appendChild(theadTitulos)
      })
  
      const tablaCuerpo = document.createElement('tbody')
      tablaCuerpo.id = 'tabla-gerentes-cuerpo'
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

  set horario(value) {
    this.#horario = value
  }

  get horario() {
    return this.#horario
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