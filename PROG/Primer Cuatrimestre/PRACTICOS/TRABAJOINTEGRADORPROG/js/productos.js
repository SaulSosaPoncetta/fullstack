
    const productos = [
        { nombre: "Azucar ", precio: 1000, stock: 10, imagen: '../imgenes/azucarled.webp', descripcion: " Ledesma" },
        { nombre: "Yerba ", precio: 3500, stock: 20, imagen: '../imgenes/yerba.webp', descripcion:"Playadito" },
        { nombre: "Cafe ", precio: 5000, stock: 30, imagen: '../imgenes/cafearlistan.webp', descripcion:"Arlistan" },
        { nombre: "Te ", precio: 15000, stock: 15, imagen: '../imgenes/tebigben.webp', descripcion: "Big Ben" },
        { nombre: "Fideos ", precio: 7, stock: 75, imagen: '../imgenes/fideos.webp', descripcion: "Aitala" },
        { nombre: "Arroz ", precio: 4000, stock: 16, imagen: '../imgenes/arrozgallo.webp', descripcion: "Gallo" },
        { nombre: "Polenta ", precio: 1500, stock: 20, imagen: '../imgenes/polentaprespron.webp', descripcion: "Prestopronta" },
        { nombre: "Aceite ", precio: 6000, stock: 8, imagen: '../imgenes/aceitecañuelas.webp', descripcion: "Cañuelas" },
        { nombre: "Vinagre ", precio: 6000, stock: 20, imagen: '../imgenes/vinmarol.webp', descripcion: "Marolio" },
        { nombre: "Salsa ", precio: 5000, stock: 20, imagen: '../imgenes/salsamar.webp', descripcion: "Marolio" },
        { nombre: "Arbejas ", precio: 3000, stock: 20, imagen: '../imgenes/arbmar.webp', descripcion: "Cañuelas" },
        { nombre: "Lentejas ", precio: 10000, stock: 20, imagen: '../imgenes/lenmarolio.webp', descripcion: "Canale" },
        { nombre: "Galletitas ", precio: 3000, stock: 25, imagen: '../imgenes/gallexpres.webp', descripcion: "Express" },
        { nombre: "Pan Rallado ", precio: 3000, stock: 36, imagen: '../imgenes/panrallmar.webp', descripcion: "Marolio" },
        { nombre: "Detergente ", precio: 7000, stock: 18, imagen: '../imgenes/detala.webp', descripcion: "Ala" },
        { nombre: "Lavandina ", precio: 5000, stock: 6, imagen: '../imgenes/lavayud.webp', descripcion: "Ayudin" },
        { nombre: "Jabon Tocador ", precio: 9000, stock: 15, imagen: '../imgenes/jabtocrex.webp', descripcion: "Elvive" },
        { nombre: "Shampoo ", precio: 13000, stock: 20, imagen: '../imgenes/shamplush.webp', descripcion: "Plushbelle" },
        { nombre: "Acondicionador", precio: 16000, stock: 9, imagen: '../imgenes/acondsedal.webp', descripcion: "Sedal" },
        { nombre: "P. Higienico ", precio: 12000, stock: 10, imagen: '../imgenes/paphigsuave.webp', descripcion: "Suave" }];

    const productosDiv = document.getElementById('productos');

productos.forEach((producto, index) => {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'producto';
    productoDiv.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="productoimagen">
        <p class="producto-nombre">${producto.nombre}</p>
        <p class="productodescripcion">${producto.descripcion}</p>
        <p class="productostock"> Stock: ${producto.stock}  -   Precio: $${producto.precio.toFixed(2)}</p>
        <label for="cantidad-${index}" class="producto-label">Cantidad:</label>
        <input type="number" id="cantidad-${index}" value="0" min="0" max="${producto.stock}">
    `;
    productosDiv.appendChild(productoDiv);
});

function calcularTotal() {
    let total = 0;
    let error = false;
    let mensajeError = '';

    productos.forEach((producto, index) => {
        const cantidadInput = document.getElementById(`cantidad-${index}`);
        const cantidad = parseInt(cantidadInput.value);

        if(cantidad > 0 ){
            if (cantidad > producto.stock) {
                error = true;
                mensajeError += `No puedes seleccionar más de ${producto.stock} ${producto.nombre}. \n`;
                } else {
                    total += producto.precio * cantidad;
                }
        }
    });

    if (error) {
        alert(mensajeError.trim());
    } else {
        document.getElementById('total').innerText = `Total de la compra $: ${total.toFixed(2)}`;
    }
}