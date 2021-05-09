const inquirer = require('inquirer');
const colors = require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.red} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.red} Listar Tareas`
            },
            {
                value: '3',
                name: `${'3.'.red} Listar Tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.red} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5.'.red} Completar Tareas`
            },
            {
                value: '6',
                name: `${'6.'.red} Borrar Tarea`
            },
            {
                value: '0',
                name: `${'0.'.red} Salir`
            }
        ]
    }
]

const pausa = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${colors.green('Enter')} para continuar`
    }
]


const inquirerMenu = async () =>{
    console.clear();
    console.log('======================'.green);
    console.log('seleccione una opcion'.green);
    console.log('======================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas)

    return opcion;
}

const inquirerPausa = async () =>{
    const {enter} = await inquirer.prompt(pausa);
    return enter;
}


const ListadoTareaBorrar = async (tareas = []) =>{

    const choices = tareas.map( (tarea, i) =>{
        const idex = `${i +1}.`.green;
        return{
            value: tarea.id,
            name: `${idex} ${tarea.descripcion}`
        }
    });

    choices.unshift({
        value: 0,
        name: '0.'.green + ' Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(preguntas); 
    return id;

}


const LeerInput = async (message) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length ===0){
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }
    ]

    const { desc} = await inquirer.prompt(question);
    return desc;
}

const confirmar = async (message) =>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;

}


const MostrarListadoChecklist = async (tareas = []) =>{

    const choices = tareas.map( (tarea, i) =>{
        const idex = `${i +1}.`.green;
        return{
            value: tarea.id,
            name: `${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(pregunta); 
    return ids;

}


module.exports = {
    inquirerMenu,
    inquirerPausa,
    LeerInput,
    ListadoTareaBorrar,
    confirmar,
    MostrarListadoChecklist
}
