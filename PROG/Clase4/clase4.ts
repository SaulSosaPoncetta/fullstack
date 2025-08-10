import * as readlineSync from 'readline-sync';

// let suma: number, nota:number, promedio:number, contador:number;

// contador = 1;
// suma=0;

// while(contador <= 10) {
//     nota = readlineSync.questionFloat("Ingrese su nota: ");
//     suma = suma + nota;

//     contador = contador + 1;
// }

// promedio = suma/10;

// console.log("El promedio del alumno es: " + promedio);


// esperar colectivo;

// let llegadaColectivo: string;

// llegadaColectivo = readlineSync.question("Llego el colectivo? (S/N)");

// while (llegadaColectivo == "N") {
//     console.log("Todavia no llego");

//     llegadaColectivo = readlineSync.question("Llego el colectivo? (S/N)");

// }

// console.log("Llego el colectivo");


//ejercicio notas con for

// let suma: number, nota: number, promedio: number, contador: number;

// suma = 0;

// for (contador = 1; contador < 11; contador++) {
//     nota = readlineSync.questionFloat("Ingrese su nota: ");
//     suma += nota;
// }

// promedio= suma/10;

// console.log("El promedio del alumno es: " + promedio);

let suma: number, nota: number, promedio: number;


suma = 0;

for (let contador: number = 1; contador < 11; contador++) {
    nota = readlineSync.questionFloat("Ingrese su nota: ");
    suma += nota;
}

promedio= suma/10;

console.log("El promedio del alumno es: " + promedio);
