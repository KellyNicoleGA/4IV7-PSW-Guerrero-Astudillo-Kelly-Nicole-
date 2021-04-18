//ya que se ocuparon los id en el css, se ocuparan las clases aqui
var piezas = document.getElementsByClassName('movil');
//tenemos que definir el tamaño de las piezas
//vectores:
var tamWidth = [134,192,134,163,134,163,134,192,134];
var tamHeight = [163,134,163,134,192,134,163,134,163];

for(var i = 0; i < piezas.length; i++){
    piezas[i].setAttribute("width", tamWidth[i]);
    piezas[i].setAttribute("height", tamHeight[i]);
    //revolver las piezas
    piezas[i].setAttribute("x", Math.floor(Math.random()*10)+1);
    piezas[i].setAttribute("y", Math.floor(Math.random()*409)+1); 

    //hacer que se pueda seleccionar y mover
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt");
}

var elementoSeleccionado = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
    elementoSeleccionado = reordenar(evt);
    //posicion del navegador referente a la pieza
    currentX = evt.clientX;
    currentY = evt.clientY;
    //enviar la posicion del elemento
    currentPosX = parseFloat(elementoSeleccionado.getAttribute("x"));
    currentPosY = parseFloat(elementoSeleccionado.getAttribute("y"));
    //moverlo
    elementoSeleccionado.setAttribute("onmousemove", "moverElemento");

}

function moverElemento(evt){ 
    //obtener coordenadas del movimiento
    var dx = evt.clientX-currentX;
    var dy = evt.clientY-currentY;
    //asignar coordenadas
    currentPosX = currentPosX + dx;
    currentPosY = currentPosY + dy;
    //enviar posiciones, obtener donde se va mover
    elementoSeleccionado.setAttribute("x", currentPosX);
    elementoSeleccionado.setAttribute("y", currentPosY);
    //hacer que se quede en el lugar
    //donde lo voy a soltar
    currentX = evt.clientX;
    currentY = evt.clientY; 
    //funcion para jalarlo
    iman();

    //deseleccionar
    elementoSeleccionado.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementoSeleccionado.setAttribute("onmouseup", "deseleccionarElemento(evt)");
}

function deseleccionarElemento(evt){
    //necesita saber qué pieza se esta tomando
    testing();
    if(elementoSeleccionado != 0){
        elementoSeleccionado.removeAttribute("onmousemove");
        elementoSeleccionado.removeAttribute("onmouseout");
        elementoSeleccionado.removeAttribute("onmouseup");
        elementoSeleccionado = 0;//para poder seleccionar otro elemento
    }
}
var entorno = document.getElementsByClassName('entorno');

function reordenar (evt){
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");

    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);

    return entorno.lastChild.firstChild;


}

//necesito saber cual es la pos correcta
var origX = [200,304,466,200,333,437,200,304,466];
var origY = [100,100,100,233,204,233,237,366,337];

function iman(){
    for(var i = 0; i < piezas.length; i++){
        if(Math.abs(currentPosX - origX[i]) <15 && Math.abs(currentPosY - origY[i])<15){
            elementoSeleccionado.setAttribute("x", origX[i]);
            elementoSeleccionado.setAttribute("y", origY[i]);
        }


    }
}

function testing (){
    //si la pieza esta en su lugar
    var bien_ubicada = 0;
    var padres = document.getElementsByClassName('padre');
    
    for(var i = 0; i <piezas.length; i++){
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
        
        ide = padres[i].getAttribute("id");

        if(origX[ide] == posx && origY[ide] == posy){
            bien_ubicada = bien_ubicada +1;

        }
    
    
    }
    if(bien_ubicada==9){
        //ya ganeee (((((:
        
    }
}


