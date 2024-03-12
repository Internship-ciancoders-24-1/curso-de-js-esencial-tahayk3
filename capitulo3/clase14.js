var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    edad: 1,
    peso: 75
}

console.log("Al inicio del año" + sacha.nombre + "pesa "+ sacha.peso +"kg")

const INCREMENT_PESO = 0.3

const aumentarDePeso = persona => persona.peso +=INCREMENT_PESO
const adelgazar = persona => persona.peso -=INCREMENT_PESO
const comeMucho = () => Math.random() <0.3
const realizaDeporte = () => Math.random() <0.4

for(var i = 1; i<=365;i++){
    var random = Math.random();

    if(random<0.25){
        aumentarDePeso(sacha)
    }
    else if(random<0.5){
        adelgazar(sacha)
    }
}

const META = sacha.peso -3
var dias =0
while(sacha.peso > META){
    if(comeMucho()){
        aumentarDePeso(sacha)
    }
    if(realizaDeporte()){
        adelgazar(sacha)
    }
    dias = dias +1
}
console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazo 3kg`)