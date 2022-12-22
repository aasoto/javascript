const pelicula = {
  nombre: 'Titanic',
  director: 'James Cameron',
  escritores: 'James Cameron',
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

const {nombre, director, escritores, actores, productora, criticas, presupuesto, recaudacion, duracion} = pelicula

const produccion = new Pelicula(nombre, director, actores, escritores, productora, criticas, presupuesto, recaudacion, duracion)

console.log(produccion.promedioCriticas())
console.log(produccion.conclusionRecaudacion())
console.log(produccion.clasificacionTiempo())
