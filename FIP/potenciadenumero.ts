/*	Realice un programa que devuelva la potencia de un número.
La base y el exponente deben ser ingresados por teclado.
Sólo deben admitirse exponentes mayores o iguales a cero.
Recuerde que el resultado de un número elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.
(se resuelve con funciones)
*/

Algoritmo TablasDeMultiplicar
	Definir numTabla, limiteTabla, contador Como Entero
	Escribir "Qué tabla desea?"
	Leer numTabla
	Escribir "Hasta qué número desea?"
	Leer limiteTabla
	Definir resultado Como Entero
	Para contador = 1 Hasta limiteTabla Con Paso 1 Hacer
		resultado = numTabla * contador
		Escribir numTabla, " x ", contador, " = ", resultado
	FinPara
FinAlgoritmo