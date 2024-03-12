/*
PROMESAS(son como cualquier objeto en js): valores que aun no conocemos
el primer estado de una promesa es: pending
si se resuelve pasa a fullfilled
si falla pasa a rejected
por lo general se resuleven de manera asincrona, pero
es posible que se puedan resolver de manera sincrona

exito: llamar a .then( arrow function)
error: llamar a .catch( arrow function)
*/

const API_URL = "https://swapi.py4e.com/api/"
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain:true}


function obtenerPersonaje(id){
    return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, function(data){
            resolve(data)
        })
        .fail(()=>reject(id))
    })
}

function onError(id){
    console.log(`ERROR, no se encontro el personaje con el id ${id}`)
}

obtenerPersonaje(1)
.then(function (personaje){
    console.log(`Hola, yo soy ${personaje.name}`)
})
.catch(onError)
