let descuento : number ;
let montoConDescuento: number;
let precioTotal : number;

import * as readlineSync from 'readline-sync';
let precioProducto : number = readlineSync.questionInt( "Ingrese el precio del producto: ");
console.log("el precio es: $", precioProducto);

let cantidad : number = readlineSync.questionInt( "Ingrese la cantidad de unidades: ");
console.log("la cantidad de unidades es: ", cantidad);

let mes = readlineSync.questionInt( "Ingrese el mes: ");
console.log("el mes ingresado es: ", mes);

const mesActual = 10;

precioTotal = (precioProducto * cantidad);

if ( mes == mesActual) {
     descuento = ((precioTotal * 15) /100);
     montoConDescuento = precioTotal - descuento;
     console.log("Por comprar en el mes de Octubre Ud tiene un 15% de descuento");
     console.log("El monto a pagar es: " + montoConDescuento +".");
     } else {
         console.log("Ud. no tiene descuento. El monto a pagar es: " + precioTotal + ".");
}