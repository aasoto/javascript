/**---------- BARRA DE NAVEGACIÓN --------- */
const header = document.querySelector('header');
const navigation = document.createElement('nav');
navigation.classList.add('nav-bar');
header.appendChild(navigation);

const navigation_grid = document.createElement('div');
navigation_grid.classList.add('grid-nav-bar');
navigation.appendChild(navigation_grid)

const navigation_column = document.createElement('div');
navigation_column.classList.add('grid-nav-bar-col');
navigation_grid.appendChild(navigation_column);

const navigation_image = document.createElement('img');
navigation_image.src = 'images/logo-BPproject-horizontal-fuente.svg';
navigation_image.classList.add('nav-image-dimension')
navigation_column.appendChild(navigation_image);

/**---------- CUERPO DE LA PÁGINA ------------ */
const main = document.querySelector('main')
main.classList.add('main-dimension')
const param_grid = document.createElement('div')
param_grid.classList.add('grid-3')
main.appendChild(param_grid)

const param_col_2 = document.createElement('div')
param_col_2.classList.add('col-2')
param_grid.appendChild(param_col_2)

const param_input = document.createElement('input')
param_input.classList.add('input-big')
param_input.id="title"
param_col_2.appendChild(param_input)

const param_col_1 = document.createElement('div')
param_col_1.classList.add('col-1')
param_grid.appendChild(param_col_1)

const param_button = document.createElement('button')
param_button.classList.add('btn-primary-full')
param_button.textContent = 'Agregar'
param_button.id="add"
param_col_1.appendChild(param_button)

/**-------------- EVENTOS --------------- */
const types = ['ganadora', 'finalista', 'designada']
const countries = ['colombia', 'venezuela', 'mexico', 'brasil']
const positions = ['finalista', 'semifinalista', 'cuartofinalista']

let add_card_title = ''
const add_card = document.querySelector('#add')
let card = ''
let card_title = ''
let card_body = ''
let card_footer = ''
let card_footer_content = ''
let counter = 0
let break_line = ''
/**Fields body card */
let label_name = ''
let name = ''
let type_input = ''
let label_country = ''
let country = ''
let label_position = ''
/**Buttons footer card */
let button_save = ''
let button_remove = ''

const card_grid = document.createElement('div')
card_grid.classList.add('grid-3')
main.appendChild(card_grid)

let card_col = ''

function content_body_card(){
  /**Add name input */
  label_name = document.createElement('label')
  label_name.textContent = 'Nombre'
  label_name.for = "name-"+counter
  name = document.createElement('input')
  name.classList.add('input')
  name.id = "name-"+counter
  card_body.append(label_name, name)
  /**Add type contestant */
  let type_name = ''
  types.forEach(type =>{
    type_input = document.createElement('input')
    type_input.type = 'radio'
    type_input.name = 'type-'+counter
    type_input.id = 'type-'+counter
    type_input.value = type
    type_name = document.createElement('span')
    type_name.classList.add('span-card')
    type_name.textContent = type
    card_body.append(type_input, type_name)
  })
  /**Add countries */
  break_line = document.createElement('br')
  label_country = document.createElement('label')
  label_country.for = 'country-'+counter
  label_country.textContent = 'País'
  country = document.createElement('select')
  country.classList.add('input')
  country.id = 'country-'+counter
  country.name = 'country-'+counter
  card_body.append(break_line, label_country, country)
  let country_option = ''
  countries.forEach(c =>{
    country_option = document.createElement('option')
    country_option.value = c
    country_option.classList.add('capitalize')
    country_option.textContent = c
    country.append(country_option)
  })
  /**Add positions */
  break_line = document.createElement('br')
  label_position = document.createElement('label')
  label_position.for = 'position-'+counter
  label_position.textContent = 'Posición'
  card_body.append(label_position, break_line)
  let position_input = ''
  let position_name = ''
  positions.forEach(position => {
    position_input = document.createElement('input')
    position_input.type = 'checkbox'
    position_input.value = position
    position_input.name = 'position-'+counter
    position_input.id = 'position-'+counter
    position_name = document.createElement('span')
    position_name.classList.add('span-card')
    position_name.textContent = position
    card_body.append(position_input, position_name)
  })

}

function buttons_footer_card(){
  button_save = document.createElement('button')
  button_save.classList.add('btn-secondary')
  button_save.id = 'send-'+counter
  button_save.card = counter
  button_save.textContent = 'Enviar'
  button_remove = document.createElement('button')
  button_remove.classList.add('btn-danger')
  button_remove.id = 'remove-'+counter
  button_remove.cardId = counter
  button_remove.textContent = 'Eliminar'
  card_footer.append(button_remove, button_save)
  save_new_register()
  remove_card()
}

add_card.addEventListener('click', function (e) {
  //add column
  card_col = document.createElement('div')
  card_col.classList.add('col-1')
  card_col.id = "col-card-"+counter
  card_grid.appendChild(card_col)
  //add card body
  card = document.createElement('div')
  card.classList.add('card')
  card.id = 'card-'+counter
  card_col.appendChild(card)
  //add card head and title
  card_title = document.createElement('div')
  card_title.classList.add('card-primary-header')
  add_card_title = document.querySelector('#title')
  card_title.textContent = add_card_title.value
  card.appendChild(card_title)
  //add card body
  card_body = document.createElement('div')
  card_body.classList.add('card-body')
  card.appendChild(card_body)
  content_body_card()
  //add card footer
  card_footer = document.createElement('div')
  card_footer.classList.add('card-footer')
  card_footer.id = counter
  card.appendChild(card_footer)
  buttons_footer_card()

  counter = counter + 1
})

let card_records_done = false
let new_contestant = {
  name: '',
  type: '',
  country: '',
  position: []
}

let enviado = '', array_position = 0
function save_new_register(){
  enviado = document.querySelector('#send-'+counter)
  enviado.addEventListener('click', function (e) {
    new_contestant.name = document.querySelector('#name-'+e.target.card)
    new_contestant.country = document.querySelector('#country-'+e.target.card)

    new_contestant.name = new_contestant.name.value
    new_contestant.country = new_contestant.country.value

    const type_radio = document.querySelectorAll('input[type=radio]')
    type_radio.forEach(type =>{
      if (type.checked) {
        new_contestant.type = type.value
      }
    })

    const position_checked = document.querySelectorAll('input[type=checkbox]:checked');
    position_checked.forEach(p_c =>{
      new_contestant.position.push(p_c.value)
    })

    console.log(new_contestant)
    if (card_records_done) {
      add_new_record(new_contestant)
    } else {
      create_records_card()
      card_records_done = true
    }

    new_contestant.name = ''
    new_contestant.type = ''
    new_contestant.country = ''
    new_contestant.position = []
  })
}

let element_to_remove = '', to_remove = ''
function remove_card() {
  element_to_remove = document.querySelector('#col-card-'+counter)
  to_remove = document.querySelector('#remove-'+counter)
  to_remove.addEventListener('click', function (e) {
    element_to_remove.remove()
  })
}

let card_records_body = ''
function create_records_card() {
  const card_records_grid = document.createElement('div')
  card_records_grid.classList.add('grid-3')
  main.appendChild(card_records_grid)
  
  const col_3 = document.createElement('div')
  col_3.classList.add('col-3')
  col_3.id = 'records'
  card_records_grid.appendChild(col_3)
  
  const card_records = document.createElement('div')
  card_records.classList.add('card')
  card_records.id = 'card-records'
  col_3.appendChild(card_records)
  
  const card_records_header = document.createElement('div')
  card_records_header.classList.add('card-primary-header')
  card_records_header.textContent = 'Registros'
  card_records.appendChild(card_records_header)
  
  card_records_body = document.createElement('div')
  card_records_body.classList.add('card-body')
  card_records.appendChild(card_records_body)
  
  const card_records_footer = document.createElement('div')
  card_records_footer.classList.add('card-footer')
  card_records.appendChild(card_records_footer)
  create_records_table()
}

let table_body = ''
function create_records_table () {
  const table_records = document.createElement('table')
  table_records.classList.add('table')
  card_records_body.appendChild(table_records)
  
  const table_header = document.createElement('thead')
  table_header.classList.add('table-header')
  table_records.appendChild(table_header)
  
  const table_header_row = document.createElement('tr')
  table_header_row.classList.add('table-header-row')
  table_header.appendChild(table_header_row)

  const table_header_columns = ['Name', 'Type', 'Country', 'Position']
  let header_column = ''
  table_header_columns.forEach( table_header_column => {
    header_column = document.createElement('td')
    header_column.classList.add('table-header-cel')
    header_column.textContent = table_header_column
    table_header_row.appendChild(header_column)
  })

  table_body = document.createElement('tbody')
  table_body.classList.add('table-body')
  table_records.appendChild(table_body)
  add_new_record(new_contestant)
}

let table_body_row = '', table_body_cel = ''
function add_new_record(contestant) {
  table_body_row = document.createElement('tr')
  table_body.appendChild(table_body_row)

  table_body_cel = document.createElement('td')
  table_body_cel.classList.add('table-body-cel')
  table_body_cel.textContent = contestant.name
  table_body_row.appendChild(table_body_cel)

  table_body_cel = document.createElement('td')
  table_body_cel.classList.add('table-body-cel')
  table_body_cel.textContent = contestant.type
  table_body_row.appendChild(table_body_cel)

  table_body_cel = document.createElement('td')
  table_body_cel.classList.add('table-body-cel')
  table_body_cel.textContent = contestant.country
  table_body_row.appendChild(table_body_cel)

  table_body_cel = document.createElement('td')
  table_body_cel.classList.add('table-body-cel')
  table_body_cel.textContent = contestant.position
  table_body_row.appendChild(table_body_cel)
}

