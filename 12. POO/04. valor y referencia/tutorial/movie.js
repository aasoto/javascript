class Movie {

  #title
  #year
  #plot

  constructor(title = null, year = null, plot = null) {
    this.#title = title
    this.#year = year
    this.#plot = plot
  }

  searchMovie() {
    if (this.#title && this.#year && this.#plot) {
      this.byTitleYearPlot()
    }
  }

  byTitleYearPlot() {
    fetch(`http://www.omdbapi.com/?t=${this.#title}&y=${this.#year}&plot=${this.#plot}&apikey=7aafd72d`)
    .then(response => {
      return response.json()
    })
    .then(result => {
      this.printData(result)
    });
  }

  printData(data) {
    console.log('show: ', data)
    return data
  }
}