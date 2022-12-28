import Board from "./board.js";
import Card from "./card.js";
import Kanban from "./kanban.js";

let dropOk = false

const kanban = new Kanban()

const card01 = new Card('Tarea 1')
const card02 = new Card('Tarea 2')
const card03 = new Card('Tarea 3')
const card04 = new Card('Tarea 4')
const card05 = new Card('Tarea 5')
const card06 = new Card('Tarea 6')

const board01 = new Board('TO DO', [card01, card02])
const board02 = new Board('IN PROGRESS', [card03, card04])
const board03 = new Board('DONE', [card05, card06, card01])

kanban.add(board01)
kanban.add(board02)
kanban.add(board03)

console.log(kanban)

const container = document.querySelector('#container')
const newBoardButton = document.querySelector('#new-board-button')

newBoardButton.addEventListener('click', addBoard)

renderUI()

function renderUI () {
  const boardsHTML = kanban.boards.map( (board, boardIndex) => {
    const cardsHTML = board.items.map((card, index) => {
      return card.getHTML(board, boardIndex, index)
    })
    return board.getHTML(boardIndex, cardsHTML)
  })
  container.innerHTML = boardsHTML.join('')

  enableNewCard()

  enableDragAndDropEvents()
}

function addBoard (e) {
  const name = prompt('Name of the board')
  if (name) {
    const board = new Board (name, [])
    kanban.add(board)

    renderUI()
  }
}

function enableNewCard () {
  document.querySelectorAll('.form-new').forEach( form => {
    form.addEventListener('submit', e => {
      e.preventDefault()

      const text = form.querySelector('.text').value
      const card = new Card(text)

      const indexBoard = form.querySelector('.index-board').value

      kanban.addCard(card, indexBoard)
      renderUI()
    })
  })
  configureSubmenus()
}

function configureSubmenus () {
  const moreButtons = document.querySelectorAll('.more-options')
  
  moreButtons.forEach(button => {
    button.addEventListener('click', showMoreOptions)
  })

  const editBoardButton   = document.querySelectorAll('.board-submenu-edit')
  const deleteBoardButton = document.querySelectorAll('.board-submenu-delete')
  const editCardButton    = document.querySelectorAll('.card-submenu-edit')
  const deleteCardButton  = document.querySelectorAll('.card-submenu-delete')
  
  editBoardButton.forEach(button => {
    button.addEventListener('click', editBoard)
  })
  deleteBoardButton.forEach(button => {
    button.addEventListener('click', deleteBoard)
  })
  editCardButton.forEach(button => {
    button.addEventListener('click', editCard)
  })
  deleteCardButton.forEach(button => {
    button.addEventListener('click', deleteCard)
  })
}

function showMoreOptions (e) {
  const submenu = e.target.nextElementSibling
  submenu.classList.toggle('submenu-active')
}

window.addEventListener('click', e => {
  if (!e.target.matches('.more-options')) {
    const menus = Array.from(document.querySelectorAll('.submenu-active'))
    menus.forEach(menu => {
      if (menu.classList.contains('submenu-active')) {
        menu.classList.remove('submenu-active')
      }
    })
  }
})

function editBoard (e) {
  const id = e.target.getAttribute('data-id')
  const index = e.target.getAttribute('data-index')
  const currentTitle = kanban.getBoard(index).title
  const title = prompt('New title', currentTitle)
  if (title) {
    kanban.updateBoard(id, index, title)
    renderUI()
  }
}
function deleteBoard (e) {
  const index = e.target.getAttribute('data-index')
  kanban.removeBoard(index)
  renderUI()
}
function editCard (e) {
  const indexCard = e.target.getAttribute('data-index')
  const indexBoard = e.target.getAttribute('data-board-index')

  const currentTitle = kanban.getBoard(indexBoard).get(indexCard).title

  const title = prompt('New title', currentTitle)
  if (title) {
    kanban.updateCard(indexBoard, indexCard, title)
    renderUI()
  }
}
function deleteCard (e) {
  const indexCard = e.target.getAttribute('data-index')
  const indexBoard = e.target.getAttribute('data-board-index')

  kanban.removeCard(indexBoard, indexCard)

  renderUI()
}

//DRAG & DROP

const classes = {
  hide: 'hide',
  placeholder: 'placeholder',
  active: 'placeholder-active'
}

function enableDragAndDropEvents () {
  const cards = document.querySelectorAll('.card')

  cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
  })

  const boards = document.querySelectorAll('.board')

  boards.forEach(board => {
    board.addEventListener('dragenter', dragenter)
    board.addEventListener('dragover', dragover)
    board.addEventListener('dragleave', dragleave)
    board.addEventListener('drop', drop)
  })
}

function dragstart (e) {
  const boardId = e.target.getAttribute('data-boardid')
  const cardId = e.target.id

  e.dataTransfer.setData('text/plain', JSON.stringify({boardId, cardId}))
  e.target.classList.add(classes.hide)
}

function dragend (e) {
  e.target.classList.remove(classes.hide)
}

function dragenter (e) {
  const item = e.target
  dropOk = true

  if (item.classList.contains(classes.placeholder)) {
    item.classList.add(classes.active)
  }
}
function dragover (e) {
  const item = e.target

  if (item.classList.contains(classes.placeholder) || item.classList.contains('board')) {
    item.classList.add(classes.active)
  } else if (item.getAttribute('data-id') != undefined) {
    const id = item.getAttribute('data-id')
    document.querySelector('#' + id).querySelector('.placeholder').classList.add(classes.active)
  }
}
function dragleave (e) {
  //e.target.classList.remove(classes.active)
  document.querySelectorAll('.' + classes.active).forEach(style => style.classList.remove(classes.active))
}
function drop (e) {
  
}