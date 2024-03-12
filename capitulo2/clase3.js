var edad = 27;
edad +=1;
console.log(edad);

var peso = 75;
peso = peso -2;
console.log(peso);

var sandwich = 1;
peso = peso + sandwich;
console.log(peso);

var jugarFutbol = 3;

peso = peso -jugarFutbol;
console.log(peso);

//decimales
var precioDeVino = 200.3;
//Redonde
var total = Math.round(precioDeVino*100*3)/100;
//cantidad de decimales
var totalStr = total.toFixed(3);
//cONVERSION
var total2 = parseFloat(totalStr);
console.log(total2);

//Division
var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorpPersonas = pizza/personas;
console.log(cantidadDePorcionesPorpPersonas);



