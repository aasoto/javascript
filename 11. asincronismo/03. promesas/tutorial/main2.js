const db = [
  {
    id: 14,
    name: 'Mario Riveros',
    birthdate: '1987-03-21',
    city: 'Bogotá',
    country: 'Colombia'
  },{
    id: 21,
    name: 'Agata Ruíz',
    birthdate: '1990-12-12',
    city: 'Madrid',
    country: 'España'
  },{
    id: 45,
    name: 'Ignacio Rodriguez',
    birthdate: '1970-02-19',
    city: 'Cartagena',
    country: 'Colombia'
  },{
    id: 2,
    name: 'Emelda Guevara',
    birthdate: '1980-05-19',
    city: 'Ciudad de México',
    country: 'México'
  }
]

// const db = []

const information = new Promise ( function (resolve, reject) {
  setTimeout(() => {
    if (db.length > 0) {
      resolve (db)
    } else {
      reject('No hay datos encontrados')
    }
  }, 5000);
})

async function show_information () {
  console.log('comienza')
  try {
    const info = await information
    console.log (info)
  } catch (error) {
    throw new Error(error)
  }
}

show_information()