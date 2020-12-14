async function consultar(){
    let dni = $('#dni-input').val();
    let socio = $('#socio-input').val();
    console.log('DNI: ', dni);
    console.log('SOCIO: ', socio);
    
    if(dni !== '' && dni.length >= 6){
        let peticion = await fetch(`http://api.racingsiempre.com.ar/Socio/DNI/${dni}`);
        let respuesta = await peticion.json();
        console.log('Respuesta: ', respuesta);
    } else {
        let peticion = await fetch(`http://api.racingsiempre.com.ar/Socio/S/${socio}`);
        let respuesta = await peticion.json();
        console.log('Respuesta: ', respuesta);
    }
}