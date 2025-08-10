/* coloco dos cuadros de texto y verifico el form, luego los paso a auna funcion para operar y devuelvo un alert con el resultado.*/
"use strict"

function verificarform(event) {
    
    event.preventDefault(); // evita que la pagina se recargue con boton submit.

    let param1 = document.getElementById("inpText1").value;
    let param2 = document.getElementById("inpText2").value;

    verificarconparametros(param1, param2);
}

let btn= document.getElementById("btn1");
btn.addEventListener("click",verificarform);

function verificarconparametros(param1,param2) {
    alert("hola" +param1+" "+param2);

}