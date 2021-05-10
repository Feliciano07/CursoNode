const hbs = require('hbs');
const express = require('express')

require('dotenv').config();


const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');



//Servir contenido estatico
app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.render('home', {
        nombre: 'Fernando Chajon',
        titulo: 'Curso de Node'
    });
})


app.get('/generic', (req,res)=>{
    res.render('generic', {
        nombre: 'Fernando Chajon',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req,res)=>{
    res.render('elements', {
        nombre: 'Fernando Chajon',
        titulo: 'Curso de Node'
    });
})



 
app.listen(port, ()=>{
    console.log('Escuchando en el puerto',port);
})