class Persona {
    constructor(nomb, apell, alt){
        this.nombre = nomb;
        this.apellido = apell;
        this.altura = alt;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
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
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a.`);
    }

    pais(){
        console.log(`Me llamo ${this.nombre} y soy de ${this.nacionalidad}.`)
    }
}

// Objetos
let sacha = new Persona('Sacha', 'Lifszyc', 1.9);
let erika = new Persona('Erika', 'Luna', 1.65);
let arturo = new Persona('Arturo', 'Martinez', 1.89);
sacha.saludar();
sacha.soyAlto();

// Objetos con herencia
let mariano = new Desarrollador('Mariano', 'Marques', 1.75, 'Venezuela');
mariano.saludar();
mariano.soyAlto();
mariano.pais()