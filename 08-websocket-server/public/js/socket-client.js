const lblOnline  = document.getElementById('lblOnline');
const lblOffline = document.getElementById('lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnMensaje = document.querySelector('#btnMensaje');


const socket = io()



socket.on('connect', ()=>{
    console.log('Conectado');

    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})


socket.on('disconnect', ()=>{
    console.log('Desconectado');

    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})

socket.on('enviar-mensaje', (payload)=>{
    console.log(payload)
})


btnMensaje.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log(id)
    })
})