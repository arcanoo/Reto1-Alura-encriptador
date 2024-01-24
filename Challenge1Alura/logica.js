


function encriptar() {
    
    let mensajeAencriptar = document.getElementById('inputUser').value;
    let nuevomensaje ="";
    
    for (let i = 0; i < mensajeAencriptar.length; i++) {
        let letra = mensajeAencriptar[i].toLowerCase();
        if ("a".includes(letra)) {
            // Si la letra es una vocal, agrega ciertos caracteres
            nuevomensaje += letra + 'i';
        }else if("e".includes(letra)){
            nuevomensaje += letra + 'nter'
        }
        else if("i".includes(letra)){
            nuevomensaje += letra + 'mes'
        }
        else if("o".includes(letra)){
            nuevomensaje += letra + 'ber'
        }
        else if("u".includes(letra)){
            nuevomensaje += letra + 'fat'
        }
        
        else {
            // Si no es una vocal, simplemente agrega la letra
            nuevomensaje += letra;
        }
    }
   console.log(nuevomensaje);
   let nuevo = document.getElementById('respuestas');
   nuevo.value = nuevomensaje
    return nuevomensaje;
}

function desencriptar(){
    let mensajeAencriptar = document.getElementById('inputUser').value;
    
        mensajeAencriptar = mensajeAencriptar.replace(/ai/ig, "a");
        mensajeAencriptar =  mensajeAencriptar.replace(/ober/ig, "o");
        mensajeAencriptar =  mensajeAencriptar.replace(/enter/ig, "e");
        mensajeAencriptar =  mensajeAencriptar.replace(/imes/ig, "i");
        mensajeAencriptar =  mensajeAencriptar.replace(/ufat/ig, "u");


    console.log(mensajeAencriptar);
    let nuevo = document.getElementById('respuestas');
    nuevo.value = mensajeAencriptar;
    return mensajeAencriptar;
    
}

function copiar(){
    let copio = document.getElementById('respuestas').value;
     copiarAlPortapapeles(copio); 
}
function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(function() {
      console.log('Texto copiado al portapapeles');
    }).catch(function(err) {
      console.error('Error al copiar al portapapeles: ', err);
    });
  }



