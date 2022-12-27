import Board from "./board.js";
import Card from "./card.js";
import Kanban from "./kanban.js";

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

  const moreButtons = document.querySelectorAll('.more-options')
  moreButtons.forEach(button => {
    button.addEventListener('click', showMoreOptions)
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