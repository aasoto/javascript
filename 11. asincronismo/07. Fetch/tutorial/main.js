import { rovers, cameras } from "./data.js";
import { getImages } from "./conexion.js";

const get = async () => {
  try {
    const resultHttp  = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=Xaho23sPLQ76eX6EQbkzHQRPtvD6vghAh2BdHmsO')
    const data        = await resultHttp.json()
    console.log(data)
  } catch (error) {
    throw new Error(error)
  }
}

get()

const filterCameras = (rover) => {
  const filteredCameras = cameras.filter( element => {
    const {curiosity, opportunity, spirit} = element
    if (curiosity) {
      if (rover == 'curiosity') {
        return element
      }
    }
    if (opportunity) {
      if (rover == 'opportunity') {
        return element
      }
    }
    if (spirit) {
      if (rover == 'spirit') {
        return element
      }
    }
  })
  return filteredCameras
}

const roverSelect = document.querySelector('#rover')
const solInput = document.querySelector('#sol')
let currentRover = null
let currentCamera = null
let currentSol = null

rovers.forEach(element => {
  const {name, value} = element
  const option = document.createElement('option')
  option.value = value
  option.textContent = name
  roverSelect.appendChild(option)
});

roverSelect.addEventListener('change', e => {
  currentRover = e.currentTarget.selectedOptions[0].value
  showInfoRover(currentRover)
  const filteredCamaras = filterCameras(currentRover)
  showCameras(filteredCamaras)
  getImages(currentRover)
})

solInput.addEventListener('mouseout', e =>{
  currentSol = solInput.value
  getImages(currentRover, currentCamera, currentSol)
})

const showCameras = (filteredCameras) => {
  const cameraSelect = document.getElementById('camera')
  // Eliminar elementos existentes
  while (cameraSelect.firstChild) {
    cameraSelect.removeChild(cameraSelect.firstChild);
  }
  // Agregar nuevos elementos
  filteredCameras.forEach(element => {
    const {name, value} = element
    const option = document.createElement('option')
    option.value = value
    option.textContent = name
    cameraSelect.appendChild(option)
  });

  cameraSelect.addEventListener('change', e => {
    currentCamera = e.currentTarget.selectedOptions[0].value
    getImages(currentRover, currentCamera)
  })
}

const showInfoRover = (rover) => {
  const infoSpace = document.querySelector('#rover-information')

  while (infoSpace.firstChild) {
    infoSpace.removeChild(infoSpace.firstChild);
  }

  rovers.forEach(element => {
    const {name, value, image, info} = element
    if (rover == value) {
      const foto = document.createElement('img')
      foto.src = image
      foto.classList.add('image-rover')
      const title = document.createElement('h2')
      title.textContent = name
      title.classList.add('title-rover')
      const paragraph = document.createElement('p')
      paragraph.textContent = info
      paragraph.classList.add('paragraph-rover')
      infoSpace.append(foto, title, paragraph)
    }
  });
}
