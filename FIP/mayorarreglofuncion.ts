/* Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
-Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola.
-Almacenar el número más grande en una variable global y pasarlo a una función para determinar.
si el número es par o impar */

Function NumeroMaximo (){
		Definir num, maxNum Como Entero
		Definir conIngresos Como Logico
		conIngresos = Falso
		Escribir "Ingrese un número"
		Leer num
		maxNum = num
		Mientras num <> 0 Hacer
			conIngresos = Verdadero
			Si num > maxNum Entonces
				maxNum = num
			FinSi
			Escribir "Ingrese un número"
			Leer num
		FinMientras
		Si conIngresos Entonces
			Escribir "El máximo es ", maxNum
		FinSi
}