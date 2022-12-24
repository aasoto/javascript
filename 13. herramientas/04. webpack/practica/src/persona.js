class Persona {

  #nombre
  #fechaNacimiento
  #genero
  #cargo

  constructor (nombre, fechaNacimineto, genero, cargo) {
    this.#nombre = nombre
    this.#fechaNacimiento = fechaNacimineto
    this.#genero = genero
    this.#cargo = cargo
  }

  calcularEdad () {
    const today = new Date()

    const current_year = parseInt(today.getFullYear())
    const current_month = parseInt(today.getMonth()) + 1
    const current_day = parseInt(today.getDate())

    const birth_year = parseInt(String(this.#fechaNacimiento).substring(0, 4))
    const birth_month = parseInt(String(this.#fechaNacimiento).substring(5, 7))
    const birth_day = parseInt(String(this.#fechaNacimiento).substring(8, 10))

    let age = current_year - birth_year
    if (current_month < birth_month) {
      age --
    } else if (current_month === birth_month) {
      if (current_day < birth_day) {
        age --
      }
    }
    return age
  }

  set nombre(value) {
    this.#nombre = value
  }

  get nombre() {
    return this.#nombre
  }

  set fechaNacimiento(value) {
    this.#fechaNacimiento = value
  }

  get fechaNacimiento() {
    return this.#fechaNacimiento
  }

  set genero(value) {
    this.#genero = value
  }

  get genero() {
    return this.#genero
  }

  set cargo(value) {
    this.#cargo = value
  }

  get cargo() {
    return this.#cargo
  }
}