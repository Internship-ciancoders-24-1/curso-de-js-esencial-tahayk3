const API_URL = "https://swapi.py4e.com/api/"
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain:true}



function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(url, opts, callback)
    .fail(()=>{
        console.log(`No se pudo obtener el personaje`)
    })

}
obtenerPersonaje(1, function(personaje){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(1000000000000, function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)
    
        })
        
    })
}) 
