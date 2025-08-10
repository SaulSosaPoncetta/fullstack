"use strict"



function cambiarTexto() {
    let titulo = document.querySelector("#inpText").value; /* lee el contenido del cuadro de texto y lo asigna a titulo */
    document.getElementById("titulo").innerText = titulo; /* asigna al titulo el valor del cuadro de texto*/

}

