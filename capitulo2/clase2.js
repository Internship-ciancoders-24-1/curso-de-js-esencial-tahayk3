//pasar a mayuscula y minuscula
var nombreEnMayusculas = nombre.toUpperCase();
var nombreEnMinusculas = apellido.toLocaleLowerCase();

//primera caracter de un string
var primeraLetraDelNombre=  nombre.charAt(0);

//cantidad de letras de string
var cantidadDeLetrasDelNombre = nombre.length;

//concatenado con interpolacion
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

//acceder a una parte del string 
var str = nombre.charAt(1) + nombre.charAt(2)
console.log(str)

//acceder a una parte del string, segunda forma
var str2 = nombre.substr(1,2)
console.log(str2) 

//Ultima letra del nombre
var ultimaElemento = nombre.length;
var ultimaLetra = nombre.charAt(ultimaElemento-1);
console.log("La ultima letra es: "+ ultimaLetra);
