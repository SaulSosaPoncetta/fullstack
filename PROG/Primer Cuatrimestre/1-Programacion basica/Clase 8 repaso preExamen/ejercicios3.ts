// Ejercicio 3
/*let arregloNumeros: number[] = [1, 5, 4, 6, 8, 7, 6];

console.log("arreglo de  numeros antes de la funcion: ", arregloNumeros);

function cambiaValor(parametro:number[]) {
        parametro[0] = 2;
        parametro.pop();
        console.log("arreglo de numeros dentro de la funcion: ", arregloNumeros);
        parametro=[0,0,0,0,0,0];
        console.log("esto es parametro en ceros: ", parametro);
        console.log("arreglo num despues de la asignacion: ", arregloNumeros);
        parametro[0] = 99;
}

cambiaValor(arregloNumeros);
console.log("arreglo de numeros despues de la funcion: ", arregloNumeros);*/


//ejercicio promedio edades

/*El DT de los infantiles del equipo de fútbol desea saber el promedio de la edad de 
los chicos La edad de los chicos va de 3 a 7 años. 
Las edades son cargadas al azar (use la función aleatorio(menorValor, mayorValor), 
es decir aleatorio(3,7))
Muestre todas las edades y el promedio de las mismas
*/



import * as rls from "readline-sync";
let dimensionArreglo: number = rls.questionInt("Ingrese cantidad de jugadores: ");
let edadesNinios: number[] = new Array(dimensionArreglo);

function cargarJugadores(edadesNinios: number[], dimensionArreglo: number) {
    let i: number = 0;
    for (i; i < edadesNinios.length; i++) {
        edadesNinios[i] = Aleatorio(3, 7);
    }
}

//3 y 7
function Aleatorio(menorValor: number, mayorValor: number): number {
    let nuemeroADevolver: number = 0;
    nuemeroADevolver = Math.floor(Math.random() * (mayorValor - menorValor + 1) + menorValor);
    return nuemeroADevolver;
}
function mostrarJugadores(edadesNinios: number[], dimensionArreglo: number) {
    let i: number = 0;
    let jugadores: string = "";
    for (i; i < edadesNinios.length; i++) {
        jugadores += edadesNinios[i] + " - ";
    }
    console.log("los jugadores son: ", jugadores);
}

function obtenerPromedioEdadesJugadores(edadesNinios: number[], dimensionArreglo: number): number {
    let suma: number = 0;
    let i: number = 0;
    let promedio: number = 0;
    for (i; i < dimensionArreglo; i++) {
        suma = suma + edadesNinios[i];
    }
    promedio = suma / dimensionArreglo;
    return promedio;
}

cargarJugadores(edadesNinios, dimensionArreglo);
console.table(edadesNinios);

mostrarJugadores(edadesNinios, dimensionArreglo);
console.log("el promedio de edades es: ", obtenerPromedioEdadesJugadores(edadesNinios, dimensionArreglo));
/*
a[]=[0,1,2,3]
b[]=[4,5,6,7]

c[]=[4,6,8,10]

console.log("hola soy un console.log");
console.log(jugadores);

*/







