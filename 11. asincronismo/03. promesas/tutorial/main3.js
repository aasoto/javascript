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
  },{
    id: 3,
    name: 'Enriqueta de la Plana',
    birthdate: '1983-07-29',
    city: 'Murcia',
    country: 'España'
  },{
    id: 123,
    name: 'Evaristo Peña',
    birthdate: '1960-01-01',
    city: 'Barranquilla',
    country: 'Colombia'
  },{
    id: 532,
    name: 'Miguel Alvarez',
    birthdate: '1989-12-31',
    city: 'Oviedo',
    country: 'España'
  }
]

const spaniards = new Promise ( function (resolve, reject) {
  const esp = db.filter( function (person) {
    if (person.country == 'España') {
      return person
    }
  })

  if (esp.length > 0) {
    resolve (esp)
  } else {
    reject ('nacionalidad sin registros')
  }
})

const colombians = new Promise ( function (resolve, reject) {
  const col = db.filter( function (person) {
    if (person.country == 'Colombia') {
      return person
    }
  })

  if (col.length > 0) {
    resolve (col)
  } else {
    reject ('nacionalidad sin registros')
  }
})

const germans = new Promise ( function (resolve, reject) {
  const ger = db.filter( function (person) {
    if (person.country == 'Alemania') {
      return person
    }
  })

  if (ger.length > 0) {
    resolve (ger)
  } else {
    reject ('nacionalidad sin registros')
  }
})

const mexicans = new Promise ( function (resolve, reject) {
  const mex = db.filter( function (person) {
    if (person.country == 'México') {
      return person
    }
  })

  if (mex.length > 0) {
    resolve (mex)
  } else {
    reject ('nacionalidad sin registros')
  }
})

async function show_spaniards() {
  try {
    const esp = await spaniards
    make_table()
    esp.forEach(element => {
      show_in_table(element)
    });
  } catch (error) {
    throw new Error(error)
  }
}

async function show_colombians() {
  try {
    const col = await colombians
    make_table()
    col.forEach(element => {
      show_in_table(element)
    });
  } catch (error) {
    throw new Error(error)
  }
}

async function show_germans() {
  try {
    const ger = await germans
    make_table()
    ger.forEach(element => {
      show_in_table(element)
    });
  } catch (error) {
    throw new Error(error)
  }
}

async function show_mexicans() {
  try {
    const mex = await mexicans
    make_table()
    mex.forEach(element => {
      show_in_table(element)
    });
  } catch (error) {
    throw new Error(error)
  }
}

let table_created = false

function make_table() {
  if (!table_created) {
    const body = document.querySelector('body')
    const table = document.createElement('table')
    body.appendChild(table)
    const t_head = document.createElement('thead')
    table.appendChild(t_head)
    t_head_titles = ['ID', 'Nombre', 'Fecha de nacimiento', 'Ciudad', 'País']
    t_head_titles.forEach( function (title) {
      const th = document.createElement('th')
      th.textContent = title
      t_head.appendChild(th)
    })
    const t_body = document.createElement('tbody')
    t_body.id = "table-body"
    table.appendChild(t_body)

    table_created = true
  }
}

function show_in_table(info) {
  const table_body = document.querySelector('#table-body')
  const {name, birthdate, city, country} = info
  const table_row = document.createElement('tr')
  table_row.classList.add('table-row')
  table_body.appendChild(table_row)
  const t_name = document.createElement('td')
  t_name.textContent = name
  const t_birthdate = document.createElement('td')
  t_birthdate.textContent = birthdate
  const t_city = document.createElement('td')
  t_city.textContent = city
  const t_country = document.createElement('td')
  t_country.textContent = country
  table_row.append(t_name, t_birthdate, t_city, t_country)
}

function clean_table () {
  const table_body = document.querySelector('#table-body')
  const table_rows = document.getElementsByClassName('table-row')
  if (table_rows.length > 0) {
    while (table_body.firstChild) {
      table_body.removeChild(table_body.firstChild)
    }
  }
}


const btn_spaniards = document.querySelector('#spaniards')
const btn_colombians = document.querySelector('#colombians')
const btn_germans = document.querySelector('#germans')
const btn_mexicans = document.querySelector('#mexicans')

btn_spaniards.addEventListener('click', function (event) {
  clean_table()
  show_spaniards()
})

btn_colombians.addEventListener('click', function (event) {
  clean_table()
  show_colombians()
})

btn_germans.addEventListener('click', function (event) {
  clean_table()
  show_germans()
})

btn_mexicans.addEventListener('click', function (event) {
  clean_table()
  show_mexicans()
})

/*spaniards.then( function (res) {
  console.log(res)
}).catch( function (error) {
  throw new Error(error)
}) */

/*colombians.then( function (res) {
  console.log(res)
}).catch( function (error) {
  throw new Error(error)
})*/