//obtener variables por parte de lso identificadores

let temporizador = document.getElementById('temporizador');
//otra forma de obtener el valor del elemento mediante el identificador id
let iniciar = document.getElementById('iniciar');
let resetear = document.getElementById('resetear');
let almacenarTiempos = document.getElementById('almacenarTiempos');

let tiempo = 0;
let intervalo = 0;
let verificador = false;

init();

function init(){
    //inicializar
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click',resetearContador);
    grabar.addEventListener('click', grabarContador);
}

function iniciarContador(){
    if(verificador == false){
        var intervalo = setInterval(function (){
             //funcion anonima (sin nombre)
            tiempo += 0.01;
            temporizador.innerHTML = tiempo.toFixed(2);//dos decimales
        },10);//cada 10 mili segundos se repite
    verificador = true;
    }else{
        verificador = false;
        clearInterval(intervalo);
    }
}

function resetearContador(){
    verificador = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo + '.00';
    clearInterval (intervalo);
    while(almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);

    }
    
}

function grabarContador(){
    if(temporizador.textContent === '0.00'){//iguala el tipo de dato y valor
        console.log('click para iniciar el cronometro');
    }else{
        let p = document.createElement('ul');//agregar a html una etiqueta p
        p.innerHTML = `

        <li> Tiempo: ${tiempo.toFixed(2)} </li>
        
        `;//todo lo que se coloque en estas comillas es html
        almacenarTiempos.appendChild(p);
    }
    
}