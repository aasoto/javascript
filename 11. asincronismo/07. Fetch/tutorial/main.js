const rovers = [
  {
    name: 'Curiosity',
    value: 'curiosity'
  },
  {
    name: 'Opportunity',
    value: 'opportunity'
  },
  {
    name: 'Spirit',
    value: 'spirit'
  }
]

const cameras = [
  {
    name: 'Front Hazard Avoidance Camera',
    value: 'fhaz',
    curiosity: true,
    opportunity: true,
    spirit: true
  },
  {
    name: 'Rear Hazard Avoidance Camera',
    value: 'rhaz',
    curiosity: true,
    opportunity: true,
    spirit: true
  },
  {
    name: 'Mast Camera',
    value: 'mast',
    curiosity: true,
    opportunity: false,
    spirit: false
  },
  {
    name: 'Chemistry and Camera Complex',
    value: 'chemcam',
    curiosity: true,
    opportunity: false,
    spirit: false
  },
  {
    name: 'Mars Hand Lens Imager',
    value: 'mahli',
    curiosity: true,
    opportunity: false,
    spirit: false
  },
  {
    name: 'Mars Descent Imager',
    value: 'mardi',
    curiosity: true,
    opportunity: false,
    spirit: false
  },
  {
    name: 'Navigation Camera',
    value: 'navcam',
    curiosity: true,
    opportunity: true,
    spirit: true
  },
  {
    name: 'Panoramic Camera',
    value: 'pancam',
    curiosity: false,
    opportunity: true,
    spirit: true
  },
  {
    name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    value: 'minites',
    curiosity: false,
    opportunity: true,
    spirit: true
  },
]


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
  console.log(filteredCameras)
}

const roverSelect = document.querySelector('#rover')
rovers.forEach(element => {
  const {name, value} = element
  const option = document.createElement('option')
  option.value = value
  option.textContent = name
  roverSelect.appendChild(option)
});

roverSelect.addEventListener('change', e => {
  let option = e.currentTarget.selectedOptions[0].value
  filterCameras(option)
})



const cameraSelect = document.querySelector('#camera')
cameras.forEach(element => {
  const {name, value} = element
  const option = document.createElement('option')
  option.value = value
  option.textContent = name
  cameraSelect.appendChild(option)
});

const resultado = document.querySelector('#resultado')