
let descuento : number ;
let precioFinal : number;

const porcentajeDescuento : number = 0.10;

import * as readlineSync from 'readline-sync';

let precioProducto : number = readlineSync.questionInt( "Ingrese el precio del producto: ");

console.log("el precio es: $", precioProducto);

descuento = ( precioProducto * porcentajeDescuento );
precioFinal = ( precioProducto - descuento );

console.log("El precio final es: $" + precioFinal + ".");