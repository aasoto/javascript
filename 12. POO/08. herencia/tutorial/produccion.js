class Produccion{
  #nombre
  #director
  #actores
  #escritores
  #productora
  #criticas

  constructor(nombre, director, actores, escritores, productora, criticas){
    this.#nombre = nombre
    this.#director = director
    this.#actores = actores
    this.#escritores = escritores
    this.#productora = productora
    this.#criticas = criticas
  }

  promedioCriticas () {
    const puntuaciones = this.#criticas.map( item => {
      return item.puntuacion
    })
    const suma = puntuaciones.reduce((acc, item) => {
      return acc += item;
    }, 0)
    return suma / this.#criticas.length
  }

  set nombre(value) {
    this.#nombre = value;
  }

  get nombre() {
    return this.#nombre;
  }

  set director(value) {
    this.#director = value;
  }

  get director() {
    return this.#director;
  }

  set actores(value) {
    this.#actores = value;
  }

  get actores() {
    return this.#actores;
  }

  set escritores(value) {
    this.#escritores = value;
  }

  get escritores() {
    return this.#escritores;
  }

  set productora(value) {
    this.#productora = value;
  }

  get productora() {
    return this.#productora;
  }

  set criticas(value) {
    this.#criticas = value;
  }

  get criticas() {
    return this.#criticas;
  }
}