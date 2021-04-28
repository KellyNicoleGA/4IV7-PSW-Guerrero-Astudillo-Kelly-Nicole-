function validar (formulario){
    //obtener valores del formulario
    if(formulario.nombre.value.length < 5){
        alert("Escribe mas de cinco caracteres en el campo nombre")
        formulario.nombre.focus();
    return false;
    }
    //validar que solo sean letras las que se ingresen en el campo nombre
    var checkOK = "QWERTYUIOPÑLKJHGFDSAZXCVBNM"
    + "qwertyuopñljhgfdazxcvbnm" + " ";
    var checkStr = formulario.nombre.value;
    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i); //tranforma la cadena en caracterers
        alert("entro al primer for")
        for(var j = 0; j < checkOK.length; j++){
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
        }
    }
        if(!allvalid){
            alert("escribe solo letras en el cmpo nombre");
            formulario.nombre.focus();
            return false;
        }
    if(formulario.edad.value.length < 0 || formulario.edad.value.length > 100 ){
            alert("Escribe mas de cinco caracteres en el campo nombre")
            formulario.nombre.focus();
        return false;
    }
    //validar entrada de numeros
    var checkOK = "1234567890";
    var checkStr = formulario.edad.value;
    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i); //tranforma la cadena en caracterers
        alert("entro al primer for")
        for(var j = 0; j < checkOK.length; j++){
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
        }
    }
        if(!allvalid){
            alert("escribe solo numeros en el campo edad");
            formulario.nombre.focus();
            return false;
        }
        if(formulario.edad.value.length < 0 || formulario.edad.value.length > 100 ){
            alert("Escribe mas de cinco caracteres en el campo nombre")
            formulario.nombre.focus();
        return false;
    }
    //validar entrada de email haciendo uso de una expresion regular
    var txt = formulario.email.value;

    //patron 
    var b = /^[^@\s] +@ [^@\.\s]+(\.[^@\.\s])+ $/;
    alert("Email " + (b.test(txt)?"" : "no " ) + "valido")
}