// Definir el número que el usuario ingresaría
const input = '4';  // Cambia este valor para probar con diferentes números
const numero = parseFloat(input);

// Verificar si la entrada es un número válido
if (isNaN(numero)) {
    console.log('Por favor, ingrese un número válido.');
} else {
    // Determinar si el número es par, impar o cero
    if (numero === 0) {
        console.log('El número es cero.');
    } else if (numero % 2 === 0) {
        console.log('El número es par.');
    } else {
        console.log('El número es impar.');
    }
}