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
.then(personaje1 =>{
    console.log(`Hola, yo soy ${personaje1.name}`)
    return obtenerPersonaje(2)
})
.then(personaje2 =>{
    console.log(`Hola, yo soy ${personaje2.name}`)
    return obtenerPersonaje(3)
})
.then(personaje3 =>{
    console.log(`Hola, yo soy ${personaje3.name}`)
})
.catch(onError)
