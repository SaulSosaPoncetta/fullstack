//Es un reloj o cronometro
// Tiene un bucle
// Repite el algoritmo para que actuen los acumuladores
Algoritmo Cronometro
	Definir horas Como Entero
	Definir minutos Como Entero
	Definir segu Como Entero
	Definir salir Como Entero
	horas <- 0
	minutos <- 0
	segu <- 0
	salir <- 1
	Repetir
		Escribir 'HH: ', horas, ' MM: ', minutos, ' SS: ', segu, '.'
		segu <- segu+1
		Si (segu=60) Entonces
			segu <- 0
			minutos <- minutos+1
		FinSi
		Si (minutos=60) Entonces
			minutos <- 0
			horas <- horas+1
		FinSi
		Si (horas=24) Entonces
			horas <- 0
		FinSi
	Hasta Que (salir=0)
FinAlgoritmo
