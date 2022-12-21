class Movie {

  #title
  #year
  #plot

  #info

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
    .then( async response => {
      return response.json()
    })
    .then(result => {
      this.assignment(result)
    });
  }

  assignment(data) {
    this.#info = data
  }

  set info(value){
    this.#info = value;
  }

  get info(){
      return this.#info;
  }
}