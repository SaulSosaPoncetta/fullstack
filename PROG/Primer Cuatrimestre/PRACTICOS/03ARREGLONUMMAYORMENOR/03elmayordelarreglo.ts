/* Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
-Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola.
-Almacenar el número más grande en una variable global y pasarlo a una función para determinar.
si el número es par o impar */

// Arreglo de números
const numeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Variable global para almacenar el número más grande
let numeroMasGrande: number;

// Función para encontrar el número más grande del arreglo
function encontrarNumeroMasGrande(arr: number[]): number {
    return Math.max(...arr);
}

// Función para determinar si un número es par o impar
function esParOImpar(numero: number): string {
    if (numero % 2 === 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

// Encuentra el número más grande y almacénalo en la variable global
numeroMasGrande = encontrarNumeroMasGrande(numeros);

// Imprime el número más grande
console.log(`El número más grande del arreglo es: ${numeroMasGrande}`);

// Determina si el número más grande es par o impar
const resultado = esParOImpar(numeroMasGrande);

// Imprime si el número más grande es par o impar
console.log(`El número ${numeroMasGrande} es ${resultado}.`);


/*Explicación del código:
Definición del arreglo numeros:

El arreglo numeros contiene la lista de números proporcionada.
Variable global numeroMasGrande:

Se declara una variable global numeroMasGrande para almacenar el número más grande encontrado en el arreglo.
Función encontrarNumeroMasGrande:

Esta función toma un arreglo de números como argumento y devuelve el número más grande utilizando Math.max y el operador de propagación (...).
Función esParOImpar:

Esta función toma un número como argumento y devuelve una cadena indicando si el número es "par" o "impar".
Encuentra y almacena el número más grande:

Se llama a encontrarNumeroMasGrande con el arreglo numeros y el resultado se almacena en la variable global numeroMasGrande.
Imprime el número más grande:

Se imprime el valor de numeroMasGrande.
Determina y imprime si el número es par o impar:

Se llama a esParOImpar con numeroMasGrande y se imprime el resultado.*/
