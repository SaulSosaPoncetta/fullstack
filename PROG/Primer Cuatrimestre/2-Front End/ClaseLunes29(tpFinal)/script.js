function actualizarDatos() {

    let nombre = document.querySelector("p[name=nombre]");
    nombre.innerHTML = `${producto[0].nombre}`;
    let precio = document.querySelector("p[name=precio]");
    precio = `${producto[0].precio}`;
    let stock = document.querySelector("p[name=stock]");
    stock.innerHTML = `${producto[0].cantidad}`;

    let inputCantCompra = document.querySelector("#inpCantCompra");
    let stockP = producto[0].cantidad;
    inputCantCompra.setAttribute("max", stockP)
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputCantCompra = document.querySelector("#inpCantCompra");
    let stockP = producto[0].cantidad;

    if (stockP >= inputCantCompra.value) {
        producto[0].cantidad -= inputCantCompra.value;
        console.log(producto[0].cantidad);
        if (producto[0].cantidad == 0) {
            document.querySelector("#inpCantCompra").setAttribute('disabled', true);
            document.querySelector("#inpCantCompra").setAttribute('placeholder', "Fuera de Stock");
        }
    }
    actualizarDatos();
    borrarInputs();
})
actualizarDatos()
function borrarInputs() {
    let inputCantCompra = document.querySelector("#inpCantCompra");
    inputCantCompra.value = "";

}