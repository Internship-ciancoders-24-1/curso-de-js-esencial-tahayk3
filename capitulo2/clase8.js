var sacha ={
    nombre: "Sacha",
    apellido: "lifs",
    edad: 28
}

var dario ={
    nombre: "Dario",
    apellido: "Susnsijkdg",
    edad: 27
}

function cumplenos(persona){
    return {
        ...persona,
        edad: persona.edad + 1 
    }
}

var sachaMasVIEJO = cumplenos(sacha)
console.log(sachaMasVIEJO)
console.log(sacha)

