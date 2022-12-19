export function getImages (rover = null, camera = null, sol = null, date = null) {
  if (rover && !camera && !sol && !date) {
    hasRover(rover)
  }
  if (rover && camera && !sol && !date) {
    hasRoverCamera(rover, camera)
  }
  if (rover && camera && sol) {
    hasRoverCameraSol(rover, camera, sol)
  }
  if (rover && !camera && date) {
    hasRoverDate(rover, date)
  }
  if (rover && camera && date) {
    hasRoverCameraDate(rover, camera, date)
  }
}

const hasRover = async (rover) => {
  let apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=Xaho23sPLQ76eX6EQbkzHQRPtvD6vghAh2BdHmsO`
  console.log(apiURL)
  try {
    const resultHttp  = await fetch(apiURL)
    const data        = await resultHttp.json()

    buildResult(data.photos)
  } catch (error) {
    console.err(error)
  }
}

const hasRoverCamera = async (rover, camera) => {
  let apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=${camera}&api_key=Xaho23sPLQ76eX6EQbkzHQRPtvD6vghAh2BdHmsO`
  console.log(apiURL)
  try {
    const resultHttp  = await fetch(apiURL)
    const data        = await resultHttp.json()

    buildResult(data.photos)
  } catch (error) {
    console.err(error)
  }
}

const hasRoverCameraSol = async (rover, camera, sol) => {
  let apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=Xaho23sPLQ76eX6EQbkzHQRPtvD6vghAh2BdHmsO`
  console.log(apiURL)
  try {
    const resultHttp  = await fetch(apiURL)
    const data        = await resultHttp.json()

    buildResult(data.photos)
  } catch (error) {
    console.err(error)
  }
}

const hasRoverDate = async (rover, date) => {
  let apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=Xaho23sPLQ76eX6EQbkzHQRPtvD6vghAh2BdHmsO`
  console.log(apiURL)
  try {
    const resultHttp  = await fetch(apiURL)
    const data        = await resultHttp.json()

    buildResult(data.photos)
  } catch (error) {
    console.err(error)
  }
}

const hasRoverCameraDate = async (rover, camera, date) => {
  let apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&api_key=Xaho23sPLQ76eX6EQbkzHQRPtvD6vghAh2BdHmsO`
  console.log(apiURL)
  try {
    const resultHttp  = await fetch(apiURL)
    const data        = await resultHttp.json()

    buildResult(data.photos)
  } catch (error) {
    console.err(error)
  }
}

const buildResult = (photos) => {
  const resultado = document.querySelector('#resultado')
  clean(resultado)

  const grid = document.createElement('div')
  grid.classList.add('grid-results')
  resultado.appendChild(grid)
  photos.forEach(element => {
    const cell = document.createElement('div')
    cell.classList.add('col-span-1')
    grid.appendChild(cell)
    const image = document.createElement('img')
    image.classList.add('h-40')
    image.src = element.img_src
    cell.appendChild(image)
  });
}

const clean = (resultado) => {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
