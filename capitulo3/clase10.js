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

function imprimirProfesion(persona){
    console.log(`${persona.nombre} es: `)

    if(persona.ingeniero){
        console.log("Ingeniero")
    }
    else{
        console.log("NO ES Ingeniero")
    }
    if(persona.cocinero){
        console.log("cocinero")
    }
    if(persona.cantante){
        console.log("cantante")
    }
    if(persona.dj){
        console.log("dj")
    }
    if(persona.guitarrista){
        console.log("guitarrista")
    }
    if(persona.drone){
        console.log("drone")
    }
}

imprimirProfesion(sacha);

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad>=18)
        console.log("Es mayor de edad");
    else
    console.log("No es mayor de edad");
}
imprimirSiEsMayorDeEdad(sacha);

