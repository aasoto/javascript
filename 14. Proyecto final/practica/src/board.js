import { generateId } from "./ids.js";

export default class Board {
  id 
  title
  items

  constructor (title, items) {
    this.id = generateId()
    this.title = title
    this.items = [...items]
  }

  getIndex (id) {
    return this.items.findIndex( item => item.id == id)
  }

  get (index) {
    return this.items[index]
  }

  add (card) {
    this.items.push(card)
  }

  get length () {
    return this.items.length
  }
}