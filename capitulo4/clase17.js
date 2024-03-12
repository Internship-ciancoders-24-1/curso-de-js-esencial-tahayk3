var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    altura: 1.56,
}

var valeria = {
    nombre: "valeria",
    apellido: "Lifszyc",
    altura: 1.60,
}

var karen = {
    nombre: "karen",
    apellido: "Lifszyc",
    altura: 1.55,
}

var personas = [sacha, valeria, karen]

console.log(personas[0].altura)
console.log(personas[0]['altura'])


for(var i=0; i<personas.length;i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}

