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
