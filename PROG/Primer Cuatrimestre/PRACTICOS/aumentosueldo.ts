import * as readlineSync from 'readline-sync';

let nuevoSueldo : number;
nuevoSueldo = 0;

let sueldoActual : number = readlineSync.questionInt("Ingrese el sueldo actual: ");
console.log("el sueldo actual es : ", sueldoActual);

if (sueldoActual < 15000) {
        nuevoSueldo = (sueldoActual * 1.20);
        console.log("Ud. tiene un aumento de 20%");
    } else {
            if (sueldoActual < 15001){
                nuevoSueldo = (sueldoActual * 1.10);
                console.log("Ud. tiene un aumento de 10%");
            } else {
                if (sueldoActual < 20000) {                        
                        nuevoSueldo = (sueldoActual * 1.05);
                        console.log("Ud. tiene un aumento de 5%");
                } else {
                        console.log("Ud. no tiene aumento.");
                       }
                   }
            }    
console.log("Su nuevo sueldo es: " + nuevoSueldo + ".");