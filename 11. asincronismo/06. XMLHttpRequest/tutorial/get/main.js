const resultado = document.querySelector('#resultado')

const xhr = new XMLHttpRequest()

xhr.addEventListener('load', e => {
  if (xhr.status === 200) {
    resultado.innerHTML = xhr.response
    console.log(JSON.parse(xhr.response))
  }
})

xhr.addEventListener('progress', e => {
  resultado.innerHTML = 'Cargando resultados...'
  console.log('Cargando resultados...')
})

xhr.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
xhr.send()