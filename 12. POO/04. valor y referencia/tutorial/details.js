import { calendar, clock, tag } from "./icons.js";

const detailsMovie = document.querySelector('#details-movie')

let posterSpace, mainInfoGrid, titleSpace, yearRatedSpace, tagSpace, actorsSpace, peopleSpace, plotSpace

export function makeStructure() {
  const detalles = document.getElementById('details-movie')
  while (detalles.firstChild) {
    detalles.removeChild(detalles.firstChild);
  }
  posterSpace = document.createElement('div')
  posterSpace.id = 'poster-space'
  posterSpace.classList.add('col-span-1')

  mainInfoGrid = document.createElement('div')
  mainInfoGrid.id = 'grid-main-info'
  mainInfoGrid.classList.add('grid-main-info')

  titleSpace = document.createElement('div')
  titleSpace.id = 'title-space'
  titleSpace.classList.add('col-span-2')

  yearRatedSpace = document.createElement('div')
  yearRatedSpace.id = 'year-rated-space'
  yearRatedSpace.classList.add('year-rated-space')
  
  tagSpace = document.createElement('div')
  tagSpace.id = 'tag-space'
  tagSpace.classList.add('tag-space')

  actorsSpace = document.createElement('div')
  actorsSpace.id = 'actors-space'
  actorsSpace.classList.add('col-span-1')

  peopleSpace = document.createElement('div')
  peopleSpace.id = 'people-space'
  peopleSpace.classList.add('col-span-1')

  plotSpace = document.createElement('div')
  plotSpace.id = 'plot-space'
  plotSpace.classList.add('col-span-3')

  mainInfoGrid.append(titleSpace, yearRatedSpace, tagSpace, actorsSpace, peopleSpace, plotSpace)

  detailsMovie.append(posterSpace, mainInfoGrid)

}

export function content(data) {
  console.log('data: ', data)

  const {Poster, Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot} = data

  posterSpace = document.querySelector('#poster-space')
  const poster = document.createElement('img')
  poster.src = Poster
  posterSpace.appendChild(poster)

  titleSpace = document.querySelector('#title-space')
  const title = document.createElement('h1')
  title.classList.add('title')
  title.textContent = Title
  titleSpace.appendChild(title)

  yearRatedSpace = document.querySelector('#year-rated-space')
  const year = document.createElement('span')
  year.textContent = Year
  const rated = document.createElement('span')
  rated.textContent = Rated
  yearRatedSpace.append(year, rated)

  tagSpace = document.querySelector('#tag-space')
  const released = document.createElement('h3')
  released.classList.add('tag-primary')
  released.innerHTML = calendar(Released)
  const runtime = document.createElement('h3')
  runtime.classList.add('tag-primary')
  runtime.innerHTML = clock(Runtime)
  const genre = document.createElement('h3')
  genre.classList.add('tag-primary')
  genre.innerHTML = tag(Genre)
  tagSpace.append(released, runtime, genre)

  actorsSpace = document.querySelector('#actors-space')
  const actors = document.createElement('p')
  actors.classList.add('font-bold')
  actors.innerHTML = `Actors: <span class='font-normal'>${Actors}</span>`
  actorsSpace.appendChild(actors)

  peopleSpace = document.querySelector('#people-space')
  const director = document.createElement('p')
  director.classList.add('font-bold')
  director.innerHTML = `Director: <span class='font-normal'>${Director}</span>`
  const writer = document.createElement('p')
  writer.classList.add('font-bold')
  writer.innerHTML = `Writer: <span class='font-normal'>${Writer}</span>`
  peopleSpace.append(director, writer)

  plotSpace = document.querySelector('#plot-space')
  const plot = document.createElement('p')
  plot.textContent = Plot
  plotSpace.appendChild(plot)
}