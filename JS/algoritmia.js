//problema 1

function problema1(){
    var p1_input = document.querySelector('#p1_input').value;
    //dividir la cadena y colocarla en un array para detectar el espacio
    var p1_array = p1_input.split(' ').reverse();

    var p1_res = '';
    
    p1_array.forEach(function(palabra, i){
        if(i != 0 || i != p1_array.length ) p1_res += ' ';
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent = p1_res;
    
}

//problema2
function problema2(){
    //obtener los valores de los campos de html
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x15').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y15').value;

    //construir vectores
    var v1 = (p2_x1,p2_x2,p2_x3,p2_x4,p2_x5);
    var v2 = (p2_y1,p2_x2,p2_y3,p2_y4,p2_y5);
    //ordenar los vectores
    v1 = v1.sort(function(a ,b ){
        return b-a;
    });
    v2 = v2.sort(function(a ,b ){
        return b-a;
    });
    //invertir el vector 2
    v2 = v2.reverse();
    //producto
    var p2_producto = 0;

    
    for(var i = 0; i < v1.lenghth; i++){
        p2_producto += v1 [i]*v2[i];
    }

    //imprimir resultado
    document.querySelector('#p2-output').textContent = 
    'Producto escalar minimo; ' +p2_producto;
    
}

//problema 3
/*Dada una lista de palabras, encontrar la palabra que 
                mas numeros de caracteres unicos tenga.
                <br>
                Ejemplo: CASA = 3 (c, a , s) PERRO = 4 (p, e, r o)
                <br>
                Considera solamente un alfabeto de la A-Z en mayusculas
                <br>
                Las palabras ingresadas deberan estar separads por una coma,
                no se aceptan espacios*/



function problema3(){
    var p3_input = document.querySelector('#p3_out').value;
    //encontrar coma
    var p3_array = p3_input.split(',');

    p3_respuesta = '';
    
    p3_array.forEach(function(palabra, i){
        for(i = 0; i < p3_respuesta.length; ++i){
            if(p3_respuesta.indexOf(p3_respuesta.charAt(i)) == -1){
                p3_respuesta += ','
                p3_respuesta += palabra[i];

            }
        }
        return p3_respuesta;
    });

    document.querySelector('#p3-output').textContent = p3_respuesta;
    }



