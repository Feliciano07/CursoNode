
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (numero=5, listar, hasta = 10) =>{

    try{
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta ; i++) {
            salida += `${numero} * ${i} = ${numero*i} \n`;
            consola+= `${colors.blue(numero)} ${colors.red('*')} ${i} = ${numero*i} \n`;
        }

        if(listar){
            console.log('================'.green);
            console.log(colors.rainbow('Tabla del: '+ numero));
            console.log('================'.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${numero}.txt`,salida);

        return `tabla-${numero}.txt fue creado`

    }catch(err){
        throw new Error(`Ocurrio un error al crear el archivo tabla-${numero}.txt`);
    }

}

module.exports = {
    crearArchivo
}



