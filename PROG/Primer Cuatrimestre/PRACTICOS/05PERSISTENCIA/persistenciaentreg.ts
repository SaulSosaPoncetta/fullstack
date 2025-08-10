// Guardar la informacion de dos arrays en un archivo precios.txt y un archivo productos.txt
// respectivamente.
// Luego recupera la informacion en forma de array nuevamente y mostrala por consola

import fs from'node:fs';

// Declaro arreglos de productos y precios respectivamente
const productos: string[] = ["Leche ","Galletitas ","Harina ","Queso "];
let contenidoProductos: string = "";

const precios: string[] = ["525 ","3500 ","400 ","1999 "];
let contenidoPrecios: string = " ";

//Paso el contenido del arreglo de productos a la variable contenidoProductos. 
for (let i:number=0; i < productos.length; i++){
    contenidoProductos += `${productos[i]}`; //template string
}

//Guardo contenido de la variable en forma de texto con espacios en el archivo productos.txt
fs.writeFileSync('./productos.txt', contenidoProductos );
console.log("Finalizado");

//leer texto de productos.txt y lo paso a un nuevo arreglo de productos
const datosProductos: string = fs.readFileSync('./productos.txt', 'utf8');
const datosProductos2: string = datosProductos.trim();
const nuevoProductosArray: string[]= datosProductos2.split(" ");
console.log(nuevoProductosArray);

//Paso el contenido del arreglo de precios a la variable contenidoPrecios.
for (let j:number=0; j < precios.length; j++){
    contenidoPrecios += `${precios[j]}`; //template string
}

//Guardo contenido de la variable en forma de texto con espacios en el archivo precios.txt
fs.writeFileSync('./precios.txt', contenidoPrecios );
console.log("Finalizado");

//leer info del archivo precios.txt y lo paso al arreglo nuevoPreciosArray
const datosPrecios: string = fs.readFileSync('./precios.txt', 'utf8');
const datosPrecios2: string = datosPrecios.trim();
const nuevoPreciosArray: string[]= datosPrecios2.split(" ");
console.log(nuevoPreciosArray);