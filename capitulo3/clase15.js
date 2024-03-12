var contador = 0

const llueve = () => Math.random() <0.25
do{ 
    contador ++
}while(!llueve())

var tipo ="veces"
if(contador==1)
    tipo = "vez"
console.log(`Fui  a ver si llovia ${contador}  ${tipo}`)