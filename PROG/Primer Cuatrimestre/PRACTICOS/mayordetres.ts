import * as readlineSync from 'readline-sync';

let numero1 : number = readlineSync.questionInt("Ingrese el numero 1: ");
console.log("el numero actual es : ", numero1);

let numero2 : number = readlineSync.questionInt("Ingrese el numero 2: ");
console.log("el numero actual es : ", numero2);

let numero3 : number = readlineSync.questionInt("Ingrese el numero 3: ");
console.log("el numero actual es : ", numero3);

if(numero1 > numero2){
    if (numero1 > numero3) {
        console.log("el numero :"+numero1+" es el mayor");
    } else {
            if (numero2 > numero3){
                console.log( "El numero :" +numero2+ " es el mayor");
                } else {
                        console.log( "El numero :" +numero3+ " es el mayor");
                }         
    }
}