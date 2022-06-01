const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');



class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {
        }

        this.middlewares();
        this.routes();

        this.sockets();

    }

    routes(){
        // this.app.use(this.paths.usuarios, require('../routers/usuarios.routes'));
    }

    sockets(){
        this.io.on('connection', socketController)
    }

 

    middlewares(){
        // Directorio publico
        this.app.use(express.static('public'));
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

    }

    listen(){
        
        this.server.listen(this.port, ()=>{
            console.log('Server start in port', this.port);
        })
    }


}


module.exports = Server;