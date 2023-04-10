let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getDate()); // 1-31
console.log(fechaActual.getDay()); // 0-6
console.log(fechaActual.getMonth()); // 0-11
console.log(fechaActual.getSeconds()); // 0-11

let diaSemanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let mesesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

console.log(diaSemanas[fechaActual.getDay()]);
// Lunes 10 de Abril del 2023
let parrafoFecha = document.querySelector('#fecha');
parrafoFecha.innerHTML = `${diaSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${mesesAnio[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`