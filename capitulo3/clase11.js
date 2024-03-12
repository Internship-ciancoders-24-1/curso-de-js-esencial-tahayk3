var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

const mayoriaDeEdad = 18

function esMayorDeEdad(persona){
    
    return persona.edad >=mayoriaDeEdad
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona))
        console.log(`${persona.nombre} es mayor de edad`);
    else
        console.log(`${persona.nombre} NO mayor de edad`);
}
imprimirSiEsMayorDeEdad(sacha);