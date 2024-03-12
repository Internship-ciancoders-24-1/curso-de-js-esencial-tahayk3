//Creando "Herencia"  entre prototipos
//TODAS LAS FUNCIONES TIENEN EL ATRIBUTO prototype 
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
        fn.prototype = prototipoPadre.prototype
        prototipoHijo.prototype = new fn
        prototipoHijo.prototype.constructor = prototipoHijo
    
}



//para definir un prototipo, se declara una funcion

// como si fuerea Constructor
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
    return this.altura >1.8
}


//2
function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona) 

Desarrollador.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var sacha = new Desarrollador("Sacha", "lif", 1.9)
console.log(sacha);
console.log(sacha.personaAlta());
