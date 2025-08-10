'set estrict'

let btn = document.getElementById("btn"); // me traigo el boton

btn.addEventListener('click', function(e)) { // agrego evento clik al boton para que responda al click de mouse.
    let tiempoBomba = 5; // define el tiempo de espera

    setTimeout(function(){
        cuentaRegresiva(tiempoBomba);
        },5000);

    }

function cuentaRegresiva(i) {
    let intervalo = setInterval(function() {
        console.log(i)
        if(i === 0){
            clearInterval(intervalo);
            alert('BOOOOOOOOOMMMMMMM!!');
        }else {
            i--;
        }
    },
1000);
}