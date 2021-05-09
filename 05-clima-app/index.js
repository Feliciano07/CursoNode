
require('dotenv').config();

const { 
    LeerInput, 
    inquirerPausa,
    inquirerMenu,
    ListarLugares
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");



const main = async () =>{

    let opcion = 0;

    const busquedas = new Busquedas();


    do{

        opcion = await inquirerMenu();

        switch(opcion){
            case 1:
                //mostrar mensaje
                const termino = await LeerInput('Ingrese el nombre de la ciudad: ');
                const lugares = await busquedas.Ciudad(termino);

                const id = await ListarLugares(lugares);

                const lugar = lugares.find(l => l.id ===id)

                
                const clima = await busquedas.Clima(lugar.lat, lugar.lng);

                console.clear();
                console.log('\n Informacion de la ciudad\n'.green);
                console.log('Ciudad:', lugar.nombre.green);
                console.log('Latitud:', lugar.lat);
                console.log('Longitud:', lugar.lng);
                console.log('Temperatura', clima.temperatura);
                console.log('Minima:', clima.minima);
                console.log('Maxima', clima.maxima);
                console.log('Como esta el clima:', clima.descripcion.green);
            break;
            case 2:
                
            break;
        }
        
        if(opcion !==0) await inquirerPausa();

    }while(opcion !== 0);

    
}

main();