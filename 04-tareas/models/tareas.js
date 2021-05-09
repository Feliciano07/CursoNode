const Tarea = require("./tarea");



class Tareas {

    listado = {};


    get listadoArr (){
        const listado = [];

        Object.keys(this.listado).forEach( key =>{
            listado.push(this.listado[key]);
        })

        return listado;
    }

    constructor(){
        this.listado = {};
    }



    cargarTareas(tareas = []){

        tareas.forEach(tarea =>{
            this.listado[tarea.id] = tarea
        })

    }


    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    }


    listadoCompleto(){
        let contador = 1;

        const tareas = this.listadoArr;

        tareas.forEach(tarea =>{
            let string = contador.toString()+'.';
            if(tarea.completadoEn != null){
                console.log(`${string.green} ${tarea.descripcion} :: ${'Completado'.green}`);
            }else{
                console.log(`${string.green} ${tarea.descripcion} :: ${'Pendiente'.red}`);
            }
            contador++;
        })

    }

    listarTareasCompletadasPendientes(completadas = true){

        let contador = 1;

        const tareas = this.listadoArr;

        if(completadas){
            tareas.forEach(tarea =>{
                let string = contador.toString()+'.';
                if(tarea.completadoEn != null){
                    console.log(`${string.green} ${tarea.descripcion} :: ${tarea.completadoEn.green}`);
                    contador++;
                }
                
            })
        }else{
            tareas.forEach(tarea =>{
                let string = contador.toString()+'.';
                if(tarea.completadoEn == null){
                    console.log(`${string.green} ${tarea.descripcion} :: ${'Pendiente'.red}`);
                    contador++;
                }
                
            })
        }

    }

    borrarTarea(id = ''){
        if(this.listado[id]){
            delete this.listado[id]
        }
    }

    toggleCompletadas(ids = []){
        ids.forEach( id =>{
            const tarea = this.listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {
            if(! ids.includes(tarea.id)){
                this.listado[tarea.id].completadoEn = null;
            }
        })

    }
    

}

module.exports = Tareas;
