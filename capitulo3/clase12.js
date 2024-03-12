var sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
    edad: 1,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

const mayoriaDeEdad = 18

const esMayorDeEdad = ({edad}) => edad >=mayoriaDeEdad



function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona))
        console.log(`${persona.nombre} es mayor de edad`);
    else
        console.log(`${persona.nombre} NO mayor de edad`);
}

const permitirAcceso = (persona) =>{
    if(!esMayorDeEdad(persona))
        {
            console.log("ACCESO DENEGADO")
        }
}
imprimirSiEsMayorDeEdad(sacha);

permitirAcceso(sacha);