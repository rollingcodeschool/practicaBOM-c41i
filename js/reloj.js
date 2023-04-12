function obtenerFechaHora(){
    let fechaActual = new Date();
    // console.log(fechaActual);
    // console.log(fechaActual.getDate()); // 1-31
    // console.log(fechaActual.getDay()); // 0-6
    // console.log(fechaActual.getMonth()); // 0-11
    // console.log(fechaActual.getSeconds()); // 0-11
    
    let diaSemanas = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    let mesesAnio = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    
    // console.log(diaSemanas[fechaActual.getDay()]);
    // Lunes 10 de Abril del 2023
    let parrafoFecha = document.querySelector("#fecha");
    let parrafoHora = document.querySelector("#hora");
    parrafoFecha.innerHTML = `${
      diaSemanas[fechaActual.getDay()]
    } ${fechaActual.getDate()} de ${
      mesesAnio[fechaActual.getMonth()]
    } del ${fechaActual.getFullYear()}`;
    
    let hora = fechaActual.getHours(),
      minutos = fechaActual.getMinutes(),
      segundos =fechaActual.getSeconds();
    
      if(segundos < 10){
        segundos = '0' + segundos
      }
      if(minutos < 10){
        minutos = '0' + minutos
      }
      if(hora < 10){
        hora = '0' + hora
      }
    
    parrafoHora.innerHTML = `${hora}:${minutos}:${segundos}`;
    
}

function cambiarColor(color){
    let section = document.querySelector('.fs-1');
    section.className= 'fs-1 '+ color;
}

let btnAzul = document.querySelector('#btnAzul'),
 btnVerde = document.querySelector('#btnVerde'),
 btnFucsia = document.querySelector('#btnFucsia');

 btnAzul.addEventListener('click', ()=> cambiarColor('textoAzul'));
 btnVerde.addEventListener('click', ()=> cambiarColor('textoVerde'));
 btnFucsia.addEventListener('click', ()=> cambiarColor('textoFucsia'));

setInterval(obtenerFechaHora,1000);

