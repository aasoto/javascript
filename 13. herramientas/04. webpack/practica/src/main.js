import { loadGender, loadCargo } from "./prelim-data.js";

const nombre = document.querySelector('#nombre')
const fechaNacimiento = document.querySelector('#fecha-nacimiento')
const genero = document.querySelector('#genero')
const cargo = document.querySelector('#cargo')

loadGender(genero)
loadCargo(cargo)