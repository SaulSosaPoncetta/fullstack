Algoritmo NparesNimpares
	Definir num Como Real
	Definir Contador Como Real
	Definir multiplosImpares Como Real
	Definir acumulaPares Como Real
	Definir cantProcesar Como Entero
	multiplosImpares <- 1
	acumulaPares <- 0
	num <- 0
	Contador <- 0
	Escribir 'Ingrese cantidad  N de numeros a Procesar: '
	Leer cantProcesar
	Repetir
		Escribir 'Introduce un numero'
		num <- num+1
		Si (num=0) Entonces
			Escribir 'El ', num, ' no es par ni impar'
		SiNo
			Si (num MOD 2=0) Entonces
				Escribir 'El ', num, ' es par'
				Contador <- Contador+1
				acumulaPares <- acumulaPares+num
			SiNo
				Escribir 'El ', num, ' es impar'
				multiplosImpares <- multiplosImpares*num
			FinSi
		FinSi
	Hasta Que (Contador=cantProcesar)
	Escribir 'La suma de los pares es: ', acumulaPares
	Escribir ' '
	Escribir 'El producto de los impares es: ', multiplosImpares
FinAlgoritmo
