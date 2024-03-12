class Persona {
    constructor(nomb, apell, alt){
        this.nombre = nomb;
        this.apellido = apell;
        this.altura = alt;
    }
    saludar(fn) {
        var { nombre, apellido }  = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy Desarrollador/a.`);
        if(fn){
            fn(nombre, apellido)
        }
    }
    soyAlto() {
        const ALTURA = 1.8;
        if (this.altura > ALTURA){
            console.log(`Mido más de 1.8 mts y soy alto.`);
        } else {
            console.log(`Mido menos de 1.8 mts y soy bajo.`);
        }
    }
}

// Herencia
class Desarrollador extends Persona {
    constructor(nomb, apell, alt, nacionalidad) {
        super(nomb, apell, alt); 
        this.nacionalidad = nacionalidad;
    }
    saludar(fn) {
        var { nombre, apellido }  = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy Desarrollador/a.`);
        if(fn){
            fn(nombre, apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}.`);
    if(esDev){
        console.log(`Eres desarrollador D:`);
    }
}

// Objetos
let sacha = new Persona('Sacha', 'Lifszyc', 1.71);
let erika = new Persona('Erika', 'Luna', 1.65);
let arturo = new Persona('Arturo', 'Martinez', 1.89);

sacha.saludar(responderSaludo);

