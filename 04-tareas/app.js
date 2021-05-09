require('colors');


const { guardarDB, leerDB } = require('./helpers/guarda');
const {
    inquirerMenu, 
    inquirerPausa, 
    LeerInput,
    ListadoTareaBorrar,
    confirmar,
    MostrarListadoChecklist
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');


const main = async () =>{
    
    let opt = '';
    const tareas = new Tareas();

    const data  = leerDB();

    if(data){
        tareas.cargarTareas(data);
    }

    do{
        opt = await inquirerMenu();


        switch (opt) {
            case '1':
                const desc = await LeerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarTareasCompletadasPendientes(true);
                break;
            case '4':
                tareas.listarTareasCompletadasPendientes(false);
                break;
            case '5':
                const ids = await MostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await ListadoTareaBorrar(tareas.listadoArr)
                if(id == '0') continue;
                const borrar = await confirmar('Esta seguro?');
                if(borrar){
                    tareas.borrarTarea(id);
                    console.log('Tarea borrada!');
                }
            default:
                break;
        }


        guardarDB(tareas.listadoArr);

        await inquirerPausa();

    }while(opt !== '0');
}

main();