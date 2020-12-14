$('#mensajeError').hide();
$('#riesgo').hide();
$('#mensaje').hide();

async function consultar(){
    $('#mensajeError').hide();
    let dni = $('#dni-input').val();
    let socio = $('#socio-input').val();
    console.log('DNI: ', dni);
    console.log('SOCIO: ', socio);
    
    if(dni !== '' && dni.length >= 6){
        let peticion = await fetch(`https://api.racingsiempre.com.ar/Socio/DNI/${dni}`);
        let respuesta = await peticion.json();
        console.log('Respuesta: ', respuesta);
        if(!respuesta.err){
            mostrarMensaje(respuesta.socio);
        } else {
            mostrarMensajeError();
        }
    } else {
        let peticion = await fetch(`https://api.racingsiempre.com.ar/Socio/S/${socio}`);
        let respuesta = await peticion.json();
        console.log('Respuesta: ', respuesta);
        if(!respuesta.err){
            mostrarMensaje(respuesta.socio);
        } else {
            mostrarMensajeError();
        }
    }
}

function mostrarMensaje(socio) {
    // clase usuario-deshabilitado
    if(parseInt(socio.edad) >= 60){
        $('#riesgo').show();
    } else {
        $('#riesgo').hide();
    }
    let hab = socio.sexo === "M" ? 'habilitado' : 'habilitada';
    $('#usuario').text(`${socio.nombre} estas ${ hab } para votar`);
    $('#mesa').text(`${socio.mesa}`);
    $('#orden').text(`${socio.orden}`);
    $('#anios').text(`${socio.antiguedad}`);
    $('#mensaje').show();
}

function mostrarMensajeError(){
    $('#mensajeError').show();
}