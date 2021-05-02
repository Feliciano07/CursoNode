
// DESESTRUCTURACION DE OBJETOS
const deapool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//console.log(deapool.getNombre());


function imprimeHeroe({nombre, apellido,poder,edad = 0}){
    console.log(nombre, apellido, poder, edad);
}


//imprimeHeroe(deapool);


/*const nombre = deapool.nombre;
const apellido = deapool.apellido;
const poder = deapool.poder;*/

/*
const {nombre, apellido, poder, edad = 0} = deapool;
console.log(nombre, apellido, poder, edad);*/


// DESESTRUCTURACION DE ARREGLOS
const heroes = ['Deadpool', 'Superman','Batman'];

const [h1,h2,h3] = heroes;

const [,,a3] = heroes;

console.log(h1,h2,h3);

console.log(a3);
