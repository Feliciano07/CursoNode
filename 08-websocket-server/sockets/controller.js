

const socketController = socket =>{
    
    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', ()=>{
        
    })

    socket.on('enviar-mensaje', (payload, callback)=>{
        socket.broadcast.emit('enviar-mensaje', payload);
        const id = 123456
        callback(id)
    })
}

module.exports = {socketController}