//No escuche nada D:
var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    altura: 1.81,
    cantidadDeLibros: 5
}

var valeria = {
    nombre: "valeria",
    apellido: "Lifszyc",
    altura: 1.59,
    cantidadDeLibros: 15
}

var karen = {
    nombre: "karen",
    apellido: "Lifszyc",
    altura: 1.55,
    cantidadDeLibros: 50
}

const esAlta = ({altura}) => altura >1.8

var personas = [sacha, valeria, karen]


var personasAltas = personas.filter(esAlta)

const personasAlturaCms = persona =>({
        ...esAlta,
        altura:  persona.altura *100
    })

/*Map siempre regresa un nuevo array, a menos 
    que se modifique por elemento
*/
var personasCms = personas.map(personasAlturaCms)
var acum = 0
/*
var acum = 0
for(var i=0; i<personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros
}
*/
const reducer = (acum, persona )=> acum + persona.cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)



