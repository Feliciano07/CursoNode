const argv = require('yargs')
            .options('b',{
                alias: 'base',
                type:'number',
                demandOption: true,
                describe: 'es la base de la tabla de multiplicar'

            })
            .options('h', {
                alias: 'hasta',
                type: 'number',
                demandOption:true,
                describe: 'Indica hasta donde realizar la multiplicacion'
            })
            .options('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'muestra la tabla en consola'

            })
            .check((argv, options) =>{
                if(isNaN (argv.b)){
                    throw 'La base tiene que ser un numero';
                }
                return true;
            })
            .argv;

module.exports  = argv;