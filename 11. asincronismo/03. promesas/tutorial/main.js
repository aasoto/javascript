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

const number = 2
const search = new Promise( function (resolve, reject) {
  db.forEach( function (item) {
    if (item.id == number) {
      resolve (item)
    }
  })
  reject ('no encontrado')
})

function show_in_table(info) {
  const table_body = document.querySelector('#table-body')
  const {name, birthdate, city, country} = info
  const table_row = document.createElement('tr')
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

const button = document.querySelector('#button')
button.addEventListener('click', function (event) {
  search.then( function (res) {
    show_in_table(res)
  }).catch( function (error) {
    throw new Error(error)
  })
})
