//Implementar algoritmo burbuja en orden descendente


//compara los valores apuntados por los indices del arreglo

//Funcion para crear un numero ramdom entre 0 y numAzar
function azar(numAzar: number): number {
    return Math.floor(Math.random() * numAzar);
}

//Funcion para cargar el arreglo
function cargar(arreglo: number[], cantidad: number, numAzar: number) {
    for (let i: number = 0; i < cantidad; i++) {
        arreglo[i] = azar(numAzar);
    }
}

//En esta funcion mostramos los valores del arreglo
function escribirEnUnaLinea(arreglo: number[], cantidad: number) {

    let vector: string = "";
    for (let i: number = 0; i < cantidad; i++) {
        vector += `${arreglo[i]} `;
    }
    console.log(vector);
}

//En este arreglo vamos a poder cambiar las posiciones "i" y "j"
function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

//Compara los valores de las posiciones "i" y "j" del arreglo que pasamos por parametro
// Si queremos hacerlo descendente va como esta aca
// si queremos hacerlo ascendente intercambiamos en los if los indices de los arreglos,
// donde esta j va i y donde esta i va j.

function comparar(arreglo: number[], i: number, j: number): number {
    let comparacion: number;
    if (arreglo[j] === arreglo[i]) {
        comparacion = 0;
    } else if (arreglo[j] < arreglo[i]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}


//Aplica el algoritmo Bubble sort
function burbuja(arreglo: number[], cantidad: number) {
    for (let i: number = 0; i < cantidad; i++) {
        for (let j: number = 0; j < (cantidad - 1); j++) {
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}

// algoritmo orden
let limite: number = 10;
let arreglo: number[] = new Array(limite);

azar(9);
cargar(arreglo, limite, 100);
escribirEnUnaLinea(arreglo, limite);
burbuja(arreglo, limite);
escribirEnUnaLinea(arreglo, limite);