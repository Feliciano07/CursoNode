
const lblEscritorio = document.querySelector('h1');
const btnAtender = document.querySelector('button');
const lblTicket = document.querySelector('small')
const divAlerta = document.querySelector('.alert')

const searchParms = new URLSearchParams(window.location.search)

if( !searchParms.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio')
}

const escritorio = searchParms.get('escritorio');
lblEscritorio.innerHTML = escritorio;
divAlerta.style.display = 'none'



const socket = io();



socket.on('connect', () => {
    
    btnAtender.disabled = false;

});

socket.on('disconnect', () => {
    btnAtender.disabled = true
});

// socket.on('ultimo-ticket',(ultimo)=>{
//     lblNuevoTicket.innerHTML = 'Ticket ' + ultimo
// })



btnAtender.addEventListener( 'click', () => {

    socket.emit('atender-ticket', {escritorio}, ({ok, ticket, msg})=>{
        if(!ok){
            lblTicket.innerText = `Nadie`
            return divAlerta.style.display = ''
        }

        lblTicket.innerText = `Ticket ${ticket.numero}`
    })

    // socket.emit( 'siguiente-ticket', null, ( ticket ) => {
    //     lblNuevoTicket.innerHTML = ticket
    // });

});