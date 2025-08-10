/* Realice un programa que devuelva la potencia de un número.
La base y el exponente deben ser ingresados por teclado.
Sólo deben admitirse exponentes mayores o iguales a cero.
Recuerde que el resultado de un número elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.
(se resuelve con funciones) */


// Función para calcular la potencia
function calcularPotencia(base: number, exponente: number): number {
    if (exponente === 0) {
        return 1;
    }
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

// Simular la entrada de base y exponente
const baseInput: string = '2';  // Cambiar estos valores para probar diferentes entradas
const exponenteInput: string = '3';

const base = Number(baseInput);
const exponente = Number(exponenteInput);

// Verificar si la entrada es válida
if (isNaN(base) || isNaN(exponente)) {
    console.log('Por favor, ingrese números válidos.');
} else if (exponente < 0) {
    console.log('Por favor, ingrese un exponente mayor o igual a 0.');
} else {
    // Calcular la potencia
    const resultado = calcularPotencia(base, exponente);
    console.log(`${base} elevado a la potencia ${exponente} es ${resultado}.`);
}
