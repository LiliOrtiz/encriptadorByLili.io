var botonEncripta = document.querySelector(".btn-encriptar");
var botonDesencripta = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");

var ocultarH3 = document.querySelector(".noEncontrado");
var ocultarP = document.querySelector(".ingrese");
var resultadoTexto = document.querySelector(".parrafoTexto");
var ingreseTexto = document.querySelector(".text-area");


botonEncripta.onclick = encriptar;
botonDesencripta.onclick =desencriptar;
botonCopiar.onclick = copiarPortapapeles;

function encriptar(){
    var area = recuperaTexto();
    resultadoTexto.textContent = encriptaTexto(area);
}

function desencriptar(){      
    var area = recuperaTexto();
    resultadoTexto.textContent = desencriptarTexto(area);
}

function recuperaTexto(){
    var textoArea = document.querySelector(".text-area");
    return textoArea.value;
}

function ocultarCosas(){
    ocultarH3.classList.add("ocultar");
    ocultarP.classList.add("ocultar");
}

function encriptaTexto(mensaje){
    var texto = mensaje;
    var finalTexto = "";

    for(var i=0; i < texto.length; i++){
        if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){            
            alert("No puede usar Mayúsculas o caracteres especiales");
            ingreseTexto.value="";          
           return;
        }else{
            ocultarCosas();
            for(var i=0; i<texto.length; i++){
                if(texto[i] == "a"){
                    finalTexto = finalTexto + "ai";
                }
                else if(texto[i] == "e"){
                    finalTexto = finalTexto + "enter";
                }
                else if(texto[i] == "i"){
                    finalTexto = finalTexto + "imes";
                }
                else if(texto[i] == "o"){
                    finalTexto = finalTexto + "ober";
                }
                else if(texto[i] == "u"){
                    finalTexto = finalTexto + "ufat";
                }
                else{
                    finalTexto = finalTexto + texto[i];
                }
            }   
        }
    }
    

   

    return finalTexto;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var finalTexto = "";

    //HOBERLAI

    for(var i=0; i<texto.length; i++){
        if(texto[i] == "a"){
            finalTexto = finalTexto + "a";
            i = i+1;
        }
        else if(texto[i] == "e"){
            finalTexto = finalTexto + "e";
            i = i+4;
        }
        else if(texto[i] == "i"){
            finalTexto = finalTexto + "i";
            i = i+3;
        }
        else if(texto[i] == "o"){
            finalTexto = finalTexto + "o";
            i = i+3;
        }
        else if(texto[i] == "u"){
            finalTexto = finalTexto + "u";
            i = i+3;
        }
        else{
            finalTexto = finalTexto + texto[i];
        }
    }
    ingreseTexto.value ="";
    return finalTexto;
}

function copiarPortapapeles(){  
    if(resultadoTexto.value != ""){
        ingreseTexto.value= resultadoTexto.value;
        navigator.clipboard.writeText(resultadoTexto.value);       
        ingreseTexto.select();
    }
    ingreseTexto.focus();
   
}