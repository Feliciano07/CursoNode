const TicketControl = require('../models/ticket-contro')


const ticketControl = new TicketControl();

const socketController = (socket) => {
    
    socket.emit('ultimo-ticket', ticketControl.ultimo);

    socket.emit('estado-actual', ticketControl.ultimos4);

    socket.on('atender-ticket', ({escritorio}, callback)=>{
        if(!escritorio){
            return callback({
                ok: false,
                msg: 'El escritorio es obligatorio'
            })
        }

        const ticket = ticketControl.atenderTicket(escritorio);

        if(!ticket){
            return callback({
                ok:false,
                msg: 'Ya no hay tickets pendientes'
            })
        }else{
            callback({
                ok: true,
                ticket
            })
        }
    })
    
    socket.on('siguiente-ticket', ( payload, callback ) => {
        const siguiente = ticketControl.siguiente();
        callback(siguiente);

    })

}



module.exports = {
    socketController
}

