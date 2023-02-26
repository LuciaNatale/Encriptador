const encriptarMensaje = document.querySelector(".encriptar-mensaje");
const mensajeSecreto = document.querySelector(".mensaje-secreto");
const botonCopiar = document.querySelector(".boton-copiar");
copiar.style.display = "none";

function botonEncriptar(){
    const mensajeEncriptado = encriptar(encriptarMensaje.value);
    mensajeSecreto.value = mensajeEncriptado;
    encriptarMensaje.value = "";
    mensajeSecreto.style.backgroundImage="none"

}
function encriptar (stringEncriptar){
    let interpretarCifrado = [["e" , "enter"],["i" , "imes"],["a" ,"ai"],["o" , "ober"],["u" , "ufat"]]
    
    stringEncriptar = stringEncriptar.toLowerCase();
    for(let i = 0; i < interpretarCifrado.length; i++){
        if(stringEncriptar.includes(interpretarCifrado[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(interpretarCifrado[i][0], interpretarCifrado[i][1])
        }
    }
    return stringEncriptar
}

function botonDesencriptar(){
    const mensajeEncriptado = desencriptar(encriptarMensaje.value);
    mensajeSecreto.value = mensajeEncriptado;
    encriptarMensaje.value = "";

}
function desencriptar (stringDesencriptar){
    let interpretarCifrado = [["e" , "enter"],["i" , "imes"],["a" ,"ai"],["o" , "ober"],["u" , "ufat"]]
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for(let i = 0; i < interpretarCifrado.length; i++){
        if(stringDesencriptar.includes(interpretarCifrado[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(interpretarCifrado[i][1], interpretarCifrado[i][0])
        }
    }
    return stringDesencriptar
}

function botonCopiar(){ 
    let mensajeSecreto = mensajeSecreto.value
    navigator.clipboard.writeText(mensaje-Secreto.value)
    mensajeSecreto.value = "";
    alert("Texto Copiado")
}

