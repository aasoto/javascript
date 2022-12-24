
export class Gerente extends Persona {

  #estudios
  #proyectos
  #horario
  #smlv
  #numSmlv

  constructor (nombre, fechaNacimineto, genero, cargo, estudios, proyectos, horario, smlv, numSmlv) {
    super (nombre, fechaNacimineto, genero, cargo)
    this.#estudios = estudios
    this.#proyectos = proyectos
    this.#horario = horario
    this.#smlv = smlv
    this.#numSmlv = numSmlv
  }

  calcularSalario () {
    return this.#smlv * this.#numSmlv
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