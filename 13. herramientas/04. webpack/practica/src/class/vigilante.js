import { Persona } from "./persona.js";

export class Vigilante extends Persona {

  #academia
  #tipoArma
  #salvoConducto
  #vigilanteCampos = ['Nombres', 'Cargo', 'Edad', 'Academia', 'Tipo Arma', 'Num. Salvo Conducto']

  constructor (nombre, fechaNacimiento, generos, genero, cargos, cargo, academia, tipoArma, salvoConducto) {
    super(nombre, fechaNacimiento, generos, genero, cargos, cargo)
    this.#academia = academia
    this.#tipoArma = tipoArma
    this.#salvoConducto = salvoConducto
  }

  makeTablaVigilante () {
    const cardBody = document.querySelector('#card-body-listado')

    const tabla = document.createElement('table')
    tabla.classList.add('w-full')
    tabla.classList.add('my-5')
    cardBody.appendChild(tabla)

    const headerTabla = document.createElement('thead')
    headerTabla.classList.add('bg-gray-300')
    tabla.appendChild(headerTabla)

    this.#vigilanteCampos.forEach( element => {
      const theadTitulos = document.createElement('th')
      theadTitulos.classList.add('py-2')
      theadTitulos.classList.add('px-5')
      theadTitulos.textContent = element
      headerTabla.appendChild(theadTitulos)
    })

    const tablaCuerpo = document.createElement('tbody')
    tablaCuerpo.id = 'tabla-vigilante-cuerpo'
    tabla.appendChild(tablaCuerpo)
  }

  set academia(value) {
    this.#academia = value
  }

  get academia() {
    return this.#academia
  }

  set tipoArma(value) {
    this.#tipoArma = value
  }

  get tipoArma() {
    return this.#tipoArma
  }

  set salvoConducto(value) {
    this.#salvoConducto = value
  }

  get salvoConducto() {
    return this.#salvoConducto
  }
}