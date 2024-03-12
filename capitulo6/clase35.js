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
async function  obtenerPersonajes(){
    var ids = [1, 2, 3]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = Promise.all(promesas)
        console.log(personajes)
    }catch(id){
        onError(id)
    }
    
}

obtenerPersonajes()
