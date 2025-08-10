console.log("Primero");
mostrarSegundo(mostrarCuarto);
console.log("Tercero");

function mostrarSegundo(cb) {
    setTimeout(()=>{
        console.log("segundo");
    },1000)
}

function mostrarCuarto(){
    console.log("cuarto");
}