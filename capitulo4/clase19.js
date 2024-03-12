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

console.log(personasCms)
console.log(personas)
