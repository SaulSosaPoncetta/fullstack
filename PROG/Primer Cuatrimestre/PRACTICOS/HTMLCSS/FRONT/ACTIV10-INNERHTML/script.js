//------------------------------Este codigo toma dos arreglos y me los muestra en pantalla (carrito de compras)

let lista = document.getElementById("lista");

const productos = ["Azucar","Yerba","Cafe","Te","Fideos","Arroz","Polenta","Mayonesa","Salsa","ketchup","QuesoRayado","Sal","Pan","Leche","Carne","Papas","Jamon"];
const precios = [1500,2000,2500,1000,750,650,1000,1000,2500,600,1000,1000,500,2000,1500,8000,3000];

function pintarProductos(arrayProductos,arrayPrecios) {

        for(let i = 0; i < arrayProductos.length; i++) {
            let li = document.createElement("li");
            let texto = document.createTextNode(`Nombre: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]}`); 
            li.appendChild(texto);
            lista.appendChild(li);
        }

}

pintarProductos(productos,precios);

//-------------otra manera de traer productos de un array a la pantalla--------------------------------------------------------

function pintarProductos2(arrayProductos,arrayPrecios) {
    for(let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML += `<li>Productos: ${arrayProductos[i]} - Precio: $ ${arrayPrecios[i]}</li>`;
    }
}

pintarProductos2(productos,precios);

//------------ funcion para crear imagenes-------------------------------------

function crearImagen(url, textoAlternativo) {
    let img = document.createElement("img");
            img.setAttribute("src", url);
            img.setAttribute("alt",textoAlternativo);
    contenedor.appendChild(img);
}

crearImagen("changuito.webp", "Imagen de JS");

//-------------------                     ------------------------------------




