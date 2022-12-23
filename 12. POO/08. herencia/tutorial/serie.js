class Serie extends Produccion {
  #canal
  #rating
  #temporadas
  #episodios
  #emision

  constructor (nombre, director, actores, escritores, productora, criticas, canal, rating, temporadas, episodios, emision) {
    super(nombre, director, actores, escritores, productora, criticas)
    this.#canal = canal
    this.#rating = rating
    this.#temporadas = temporadas
    this.#episodios = episodios
    this.#emision = emision
  }

  promedioRating () {
    let apertura = this.#rating.map( item => {
      return item.apertura
    })
    let clausura = this.#rating.map( item => {
      return item.clausura
    })
    
    const totalApertura = apertura.length
    const totalClausura = clausura.length

    apertura = apertura.reduce((acc, item) => {
      return acc += item;
    }, 0)

    clausura = clausura.reduce((acc, item) => {
      return acc += item;
    }, 0)

    apertura = apertura / totalApertura
    clausura = clausura / totalClausura
    
    const rating = {
      apertura: apertura,
      clausura: clausura
    }

    return rating
  }

  set canal(value) {
    this.#canal = value;
  }

  get canal() {
    return this.#canal;
  }

  set rating(value) {
    this.#rating = value;
  }

  get rating() {
    return this.#rating;
  }

  set temporadas(value) {
    this.#temporadas = value;
  }

  get temporadas() {
    return this.#temporadas;
  }

  set episodios(value) {
    this.#episodios = value;
  }

  get episodios() {
    return this.#episodios;
  }

  set emision(value) {
    this.#emision = value;
  }

  get emision() {
    return this.#emision;
  }
}