class Pelicula extends Produccion {

  #presupuesto
  #recaudacion
  #duracion

  constructor (nombre, director, actores, escritores, productora, criticas, presupuesto, recaudacion, duracion) {
    super(nombre, director, actores, escritores, productora, criticas)
    this.#presupuesto = presupuesto
    this.#recaudacion = recaudacion
    this.#duracion = duracion
  }

  conclusionRecaudacion () {
    if (this.#presupuesto > this.#recaudacion) {
      return 'Fracaso comercial'
    } else {
      return 'Exito comercial'
    }
  }

  clasificacionTiempo () {
    if (this.#duracion < 30) {
      return 'Cortometraje'
    } else if (this.#duracion >= 30 && this.#duracion < 60) {
      return 'Mediometraje'
    } else {
      return 'Largometraje'
    }
  }

  set presupuesto(value) {
    this.#presupuesto = value;
  }

  get presupuesto() {
    return this.#presupuesto;
  }

  set recaudacion(value) {
    this.#recaudacion = value;
  }

  get recaudacion() {
    return this.#recaudacion;
  }

  set duracion(value) {
    this.#duracion = value;
  }

  get duracion() {
    return this.#duracion;
  }
}