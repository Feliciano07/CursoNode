require('colors');



const Menu = () => {


    return new Promise(resolve => {
        console.clear();
        console.log('======================'.green);
        console.log('seleccione una opcion'.green);
        console.log('======================\n'.green);
    
        console.log(`${'1.'.green} Crear una tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas completadas`);
        console.log(`${'3.'.green} Listar Tareas pendientes`);
        console.log(`${'5.'.green} Completar Tarea`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ', (opt) =>{
            readline.close();
            resolve(opt);
        });

    });

    

}

const Pausa = () =>{

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'Enter'.green} para continuar\n `, (opt) =>{
            readline.close();
            resolve();
        })
    })

   
}


module.exports = {
    Menu,
    Pausa
}

