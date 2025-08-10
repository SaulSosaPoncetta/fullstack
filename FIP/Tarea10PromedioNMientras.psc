Algoritmo PromedioNMientras
	Definir nota, suma, promedio Como Real
	Definir contador Como Entero
	Definir cantidadNotas Como Entero
	Escribir 'Ingrese la cantidad de notas a calcular el promedio'
	Leer cantidadNotas
	contador <- 1
	suma <- 0
	Mientras contador<=cantidadNotas Hacer
		Escribir 'Ingrese el valor de la ', contador, ' nota'
		Leer nota
		suma <- suma+nota
		contador <- contador+1
	FinMientras
	promedio <- suma/cantidadNotas
	Escribir 'El promedio de las notas es: ', promedio
FinAlgoritmo
