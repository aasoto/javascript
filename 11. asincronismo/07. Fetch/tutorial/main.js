import { rovers, cameras } from "./data.js";
import { getImages } from "./conexion.js";


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
const dateInput = document.querySelector('#earth_date')
let currentRover = null
let currentCamera = null
let currentSol = null
let currentDate = null

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
  currentDate = null
  currentSol = solInput.value
  const solSpan = document.querySelector('#sol-value')
  solSpan.textContent = ': '+currentSol
  const dateSpan = document.querySelector('#earth-date-value')
  dateSpan.textContent = ''
  
  getImages(currentRover, currentCamera, currentSol)
})

dateInput.addEventListener('mouseout', e =>{
  currentSol = null
  currentDate = dateInput.value
  const dateSpan = document.querySelector('#earth-date-value')
  dateSpan.textContent = ': '+currentDate
  const solSpan = document.querySelector('#sol-value')
  solSpan.textContent = ''

  // arreglar formato de fecha
  let secondIndex = 7
  if (currentDate[5] == 0) {
    currentDate = currentDate.slice(0, 6-1)+currentDate.slice(6, currentDate.length)
  } else {
    secondIndex ++
  }
  if (currentDate[secondIndex] == 0) {
    currentDate = currentDate.slice(0, (secondIndex+1)-1)+currentDate.slice((secondIndex+1), currentDate.length)
  }

  getImages(currentRover, currentCamera, currentSol, currentDate)
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
