let montoConDescuento:number;
let descuento:number;
let precioTotal :number;

import * as readlineSync from 'readline-sync';

let monto= readlineSync.questionInt("Ingrese el monto: ");
let cantidad = readlineSync.questionInt("Ingrese la cantidad de articulos: ");

precioTotal = monto * cantidad;

if ( precioTotal >= 1000) {
    descuento = (precioTotal * 10) /100
    montoConDescuento = precioTotal - descuento;
    console.log("Por gastar más de 1000 Ud tiene un 10% de descuento");
    console.log("El monto a pagar es: " + montoConDescuento +".");
} else {
    console.log("Ud. no tiene descuento. El monto a pagar es: " +precioTotal+".");
}