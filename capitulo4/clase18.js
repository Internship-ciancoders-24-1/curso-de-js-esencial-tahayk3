var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    altura: 1.81,
}

var valeria = {
    nombre: "valeria",
    apellido: "Lifszyc",
    altura: 1.59,
}

var karen = {
    nombre: "karen",
    apellido: "Lifszyc",
    altura: 1.55,
}

var personas = [sacha, valeria, karen]

const esAlta = ({altura}) => altura >1.8

const esBaja = ({altura}) => altura <1.60


var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)