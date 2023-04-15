export async function consultarProductos(){

    const URL="http://localhost8080/tienda/api/"
    const PETICION={

        method:"GET"

    }

    let respuesta=await fetch(URL,PETICION)
    let productos=await respuesta.json()
    return productos

}