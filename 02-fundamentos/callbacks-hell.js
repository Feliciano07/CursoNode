

const empleados = [
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id:2,
        nombre: 'Linda'
    },
    {
        id:3,
        nombre: 'Karen'
    },
]

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario:1500
    }
]


const getEmpleado = (id, callback) =>{
    const empleado = empleados.find( (e) =>{
        return e.id == id;
    })?.nombre;

    if(empleado){
        callback(null,empleado)
    }else{
        callback (`Empleado con id ${id} no existe`);
    }

    return empleado;
}

const getSalario = (id, callback) =>{
    const salario = salarios.find( e =>{
        return e.id == id;
    })?.salario;

    if(salario){
        callback(null, salario);
    }else{
        callback(`El empleado con id ${id} no existe`, null);
    }
}

const id = 2;


getEmpleado(id, (err ,empleado) =>{
    if(err){
        console.log('Error');
        return console.log(err);
    }
    getSalario(id, (err, salario) =>{
        if(err){
            console.log("Error");
            return console.log(err);
        }
        console.log(`El empleado ${empleado} tiene un salario de: ${salario}`);
    })
})

