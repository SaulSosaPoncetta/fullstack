let nombre = document.querySelector("p[name=nombre]");
let precio = document.querySelector("p[name=precio]");
let stock = document.querySelector("p[name=stock]");

function actualizarDatos() {
    nombre.innerHTML = producto[0].nombre;
    precio.innerHTML = producto[0].precio;
    stock.innerHTML = producto[0].cantidad;
}

function borrarInputs() {
    document.querySelector("#inpCantCompra").value=0;
}

actualizarDatos();



let input = document.querySelector("#inpCantCompra");
input.addEventListener("keyup",(e)=>{
    e.preventDefault();
    let cantAComprar= document.querySelector("#inpCantCompra").value;
    if(cantAComprar>producto[0].cantidad){
        document.querySelector("#inpCantCompra").value=producto[0].cantidad;
        document.querySelector("#inpCantCompra").classList.add("error")
    }else{
    console.log("todo bien");
    document.querySelector("#inpCantCompra").classList.remove("error")
    }
    if(cantAComprar<0){
        document.querySelector("#inpCantCompra").value=0;
    }
})

document.querySelector("#inpCantCompra").setAttribute("max",producto[0].cantidad)

let form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let cantAComprar= document.querySelector("#inpCantCompra").value;
    if (cantAComprar> producto[0].cantidad) {
        console.log("elija una cantidad menor");
    } else {
        producto[0].cantidad= producto[0].cantidad-cantAComprar;
        actualizarDatos();
        borrarInputs();
    }
})


