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

xhr.open('POST', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos')
xhr.setRequestHeader('Content-Type', 'application/text')
const data = 'sol=1000&camera=fhaz&api_key=Xaho23sPLQ76eX6EQbkzHQRPtvD6vghAh2BdHmsO'
xhr.send(data)