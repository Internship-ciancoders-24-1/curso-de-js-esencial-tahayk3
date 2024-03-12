const API_URL = "https://swapi.py4e.com/api/"
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain:true}



function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function(person){
        console.log(`Hola, yo soy ${person.name}`)
    if(callback){
        callback()
    }
    })
}
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3)
    })
}) 
