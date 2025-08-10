Algoritmo primeros100pares
	Definir num Como Real
	Definir Contador Como Entero
	num <- 0
	Contador <- 0
	Repetir
		Escribir 'Introduce un numero'
		num <- num+1
		Si (num=0) Entonces
			Escribir 'El ', num, ' no es par ni impar'
		SiNo
			Si (num MOD 2=0) Entonces
				Escribir 'El ', num, ' es par'
				Contador <- Contador+1
			SiNo
				Escribir 'El ', ' es impar'
			FinSi
		FinSi
	Hasta Que (Contador=100)
FinAlgoritmo
