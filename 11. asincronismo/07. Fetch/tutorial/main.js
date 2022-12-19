const resultado = document.querySelector('#resultado')

const get = async () => {
  try {
    const resultHttp  = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    const data        = await resultHttp.json()
    console.log(data)
  } catch (error) {
    throw new Error(error)
  }
}

get()