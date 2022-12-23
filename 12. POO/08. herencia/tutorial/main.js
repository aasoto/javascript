const pelicula = {
  nombre: 'Titanic',
  director: ['James Cameron'],
  escritores: ['James Cameron'],
  actores: ['Leonardo Di Caprio', 'Kate Winslet', 'Zane'],
  productora: ['20th Century Fox', 'Paramount Pictures', 'Lightstorm Entertainment'],
  criticas: [
    {
      autor: 'The New York Times',
      puntuacion: 100
    },{
      autor: 'The Washigton Post',
      puntuacion: 70
    },{
      autor: 'Time',
      puntuacion: 50
    },{
      autor: 'Los Angeles Times',
      puntuacion: 30
    },{
      autor: 'Daily News',
      puntuacion: 100
    }
  ],
  presupuesto: 200000000,
  recaudacion: 1843201268,
  duracion: 195
}

const serie = {
  nombre: 'Glee',
  director: ['Ryan Murphy', 'Brad Falchuk', 'Ian Brennan'],
  escritores: ['Ryan Murphy', 'Brad Falchuk', 'Ian Brennan'],
  actores: ['Lea Michele', 'Cory Monteith', 'Chris Colfer', 'Darren Criss'],
  productora: ['20th Century Fox Television'],
  criticas: [
    {
      autor: 'San Francisco Chronicle',
      puntuacion: 100
    },{
      autor: 'USA Today',
      puntuacion: 88
    },{
      autor: 'Los Angeles Times',
      puntuacion: 80
    },{
      autor: 'Time',
      puntuacion: 80
    },{
      autor: 'Washington Post',
      puntuacion: 80
    },{
      autor: 'PopMatters',
      puntuacion: 70
    },{
      autor: 'Variety',
      puntuacion: 40
    },
  ],
  canal: 'FOX',
  rating: [
    {
      apertura: 9.62,
      clausura: 10.92
    },{
      apertura: 12.45,
      clausura: 11.80
    },{
      apertura: 9.21,
      clausura: 7.46
    },{
      apertura: 7.41,
      clausura: 5.92
    },{
      apertura: 5.06,
      clausura: 1.97
    },{
      apertura: 2.42,
      clausura: 3
    }
  ],
  temporadas: 6,
  episodios: 121,
  emision: {
    inicio: '2009-05-19',
    final: '2015-03-20'
  }
}

// const {nombre, director, escritores, actores, productora, criticas, presupuesto, recaudacion, duracion} = pelicula

// const produccion = new Pelicula(nombre, director, actores, escritores, productora, criticas, presupuesto, recaudacion, duracion)

// console.log(produccion.promedioCriticas())
// console.log(produccion.conclusionRecaudacion())
// console.log(produccion.clasificacionTiempo())

const {nombre, director, actores, escritores, productora, criticas, canal, rating, temporadas, episodios, emision} = serie

const produccion = new Serie(nombre, director, actores, escritores, productora, criticas, canal, rating, temporadas, episodios, emision)

console.log(produccion.promedioCriticas())
console.log(produccion.promedioRating())