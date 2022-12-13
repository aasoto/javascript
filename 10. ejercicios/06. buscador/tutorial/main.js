const db = [
  'andrés',
  'mariana',
  'adolfo',
  'andreina',
  'eusebio',
  'marciano',
  'dionisia',
  'evangelina',
  'almudena'
]

const searching = document.querySelector('#buscador')
const sugerencias = document.querySelector('#sugerencias')

searching.addEventListener('input', e => {
  const transformed = e.target.value.toLowerCase().trim() //trim elimina espacios al principio y al final de la cadena de texto recibida
  
  if (transformed == '') {
    mostrar_sugerencias([], transformed)
  }
  
  const response = db.filter(item => { // filter retorna un nueva array con la condición especificada dentro de la condición siguiente.
    if(item.indexOf(transformed) > -1) { // indexOf retorna los caracteres encontrados en un string dado
      return item
    }
  })

  mostrar_sugerencias(response, transformed)
})

function mostrar_sugerencias (data, transformed) {
  sugerencias.innerHTML = '';
  searching.classList.remove('rounded-full')
  searching.classList.add('rounded-t-3xl')
  sugerencias.classList.remove('hidden')
  if(transformed == ''){
    searching.classList.remove('rounded-t-3xl')
    searching.classList.add('rounded-full')
    sugerencias.classList.add('hidden')
    return false;
  }else{
    sugerencias.classList.remove('block')
  }
    
  data.forEach( item => {
    const div = document.createElement('div') 
    sugerencias.appendChild(div)
    const elemento = document.createElement('a')
    let texto = item.replace(transformed, `<strong>${transformed}</strong>`)
    elemento.innerHTML = texto
    elemento.href = '#'
    div.appendChild(elemento)

    elemento.addEventListener('click', e => {
      buscador.value = e.target.textContent
      sugerencias.innerHTML = ''
      searching.classList.remove('rounded-t-3xl')
      searching.classList.add('rounded-full')
      sugerencias.classList.add('hidden')
    })
  })
}
