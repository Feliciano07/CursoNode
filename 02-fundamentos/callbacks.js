
/*setTimeout(() => {
    console.log('hola mundo');
}, 1000);
*/



const getUsuarioById = (id, callback) =>{

    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);
}

getUsuarioById(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});

/**
 * Los callbacks son basicamente funciones que se manda como argumentos
 */


