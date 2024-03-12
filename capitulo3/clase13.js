var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    edad: 1,
    peso: 75
}

console.log("Al inicio del año" + sacha.nombre + "pesa "+ sacha.peso +"kg")

const INCREMENT_PESO = 0.2

const aumentarDePeso = persona => persona.peso +=INCREMENT_PESO
const adelgazar = persona => persona.peso -=INCREMENT_PESO


for(var i = 1; i<=365;i++){
    var random = Math.random();

    if(random<0.25){
        aumentarDePeso(sacha)
    }
    else if(random<0.5){
        adelgazar(sacha)
    }
}

console.log("Al inicio del año" + sacha.nombre + "pesa "+ sacha.peso.toFixed(2) +"kg")