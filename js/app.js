//setTimeout ejecuta una funcion pasado x tiempo
let contador = 1

function mensaje(){
    document.write(`<p>Practica de setInterval, N=${contador} </p>`);
    if(contador === 5){
        clearInterval(cod)
    }
    contador++;
}

// window.setTimeout(mensaje, 3000);
// setTimeout(mensaje, 3000);

setTimeout(()=>{
    document.write(`<p>Practica del segundo setTimeout</p>`);
},4000)

//setInterval - ejecuta una funcion cada cierto tiempo en milisegundos\

const cod = setInterval(mensaje, 2000);
