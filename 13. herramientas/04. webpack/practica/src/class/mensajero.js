import { Persona } from "./persona.js";

export class Mensajero extends Persona {

  #licencia
  #tipoVehiculo
  #placa
  #smlv
  #numSmlv
  #mensajeroCampos = ['Nombres', 'Cargo', 'Edad', 'Num. Licencia', 'Tipo Vehiculo', 'Placa']

  constructor (nombre, fechaNacimiento, generos, genero, cargos, cargo, licencia, tipoVehiculo, placa, smlv, numSmlv) {
    super (nombre, fechaNacimiento, generos, genero, cargos, cargo)
    this.#licencia = licencia
    this.#tipoVehiculo = tipoVehiculo
    this.#placa = placa
    this.#smlv = smlv
    this.#numSmlv = numSmlv
  }

  makeTablaMensajeros () {
    const cardBody = document.querySelector('#card-body-listado')

    const tabla = document.createElement('table')
    tabla.classList.add('w-full')
    tabla.classList.add('my-5')
    cardBody.appendChild(tabla)

    const headerTabla = document.createElement('thead')
    headerTabla.classList.add('bg-gray-300')
    tabla.appendChild(headerTabla)

    this.#mensajeroCampos.forEach( element => {
      const theadTitulos = document.createElement('th')
      theadTitulos.classList.add('py-2')
      theadTitulos.classList.add('px-5')
      theadTitulos.textContent = element
      headerTabla.appendChild(theadTitulos)
    })

    const tablaCuerpo = document.createElement('tbody')
    tablaCuerpo.id = 'tabla-mensajeros-cuerpo'
    tabla.appendChild(tablaCuerpo)
  }

  set licencia(value) {
    this.#licencia = value
  }

  get licencia() {
    return this.#licencia
  }

  set tipoVehiculo(value) {
    this.#tipoVehiculo = value
  }

  get tipoVehiculo() {
    return this.#tipoVehiculo
  }

  set placa(value) {
    this.#placa = value
  }

  get placa() {
    return this.#placa
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