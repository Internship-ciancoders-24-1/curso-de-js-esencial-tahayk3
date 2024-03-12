//para definir un prototipo, se declara una funcion

//Constructor
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

//metodos
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.personaAlta = function(){
    if(this.altura >1.8)
    {
        console.log(`${this.nombre} ${this.apellido} es una persona alta`)
    }
}

//new se utiliza para crer un objeto, con 
//el prototipo de persona(Persona es el prototipo)
var sacha = new Persona("Sacha", "lif", 1.9)
console.log(sacha);
//llamada la metodo 
sacha.saludar();
sacha.personaAlta();