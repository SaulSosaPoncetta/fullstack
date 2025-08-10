Algoritmo NparesNimpares
	Definir n Como Real
	Definir m Como Real
	Definir i Como Real
	Definir a Como Real
	i <- 0
	n <- 0
	Escribir 'Ingrese cantidad N de numeros a Procesar: '
	Leer n
	// i = n - 1
	Repetir
		Escribir 'Introduce un numero'
		Leer a
		Si (a>m) Entonces
			m <- a
		FinSi
		i <- i-1
	Hasta Que (i=n)
	Escribir 'El mayor es: ', m
FinAlgoritmo
