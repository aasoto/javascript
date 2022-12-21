import { makeStructure, content } from "./details.js";

const lens = document.querySelector('#lens')
lens.addEventListener('mouseenter', event => {
  const optionsLens = document.querySelector('#options-lens')
  optionsLens.classList.toggle('hidden')
})

const blocks = document.querySelector('#blocks')
blocks.addEventListener('mouseenter', event => {
  const optionsLens = document.querySelector('#options-blocks')
  optionsLens.classList.toggle('hidden')
})

const spaceOptions = document.querySelector('#space-options')
spaceOptions.addEventListener('mouseenter', event => {
  const optionsLens = document.querySelector('#options-lens')
  optionsLens.classList.add('hidden')
  const optionsBlocks = document.querySelector('#options-blocks')
  optionsBlocks.classList.add('hidden')  
})

let movie
const border = document.querySelector('#border')
border.addEventListener('mouseout', event => {
  const title = document.querySelector('#title')
  const year = document.querySelector('#year')
  const plot = document.querySelector('#plot')
  
  console.log(title.value, year.value, plot.value)
  movie = new Movie(title.value, year.value, plot.value)
  movie.searchMovie()

})

const search = document.querySelector('#search')
search.addEventListener('click', async event => {
  
  makeStructure()
  
  content(movie.info)
})

