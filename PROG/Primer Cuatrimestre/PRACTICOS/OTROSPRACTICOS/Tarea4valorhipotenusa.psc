Algoritmo elmayordetres
	Definir valA Como Real
	Definir valB Como Real
	Definir valC Como Real
	Definir coefRaiz Como Real
	Definir hipot Como Real
	
	Escribir 'Introduce el coeficiente del termino a: '
	Leer valA
	Escribir 'Introduce el coeficiente del termino b:'
	Leer valB
	Escribir 'Introduce el coeficiente del termino c:'
	Leer valC
	
	coefRaiz = ((valB)*(valB) - (4 * valA * valC))
	termInf= (2* valA)
	
	Si (coefRaiz > 0) Entonces
		Si (termInf >0) Entonces
		termSup = ((-valB) + raiz(coefRaiz))/ (termInf)
		SiNo
			Escribir 'no es posible calcularlo'
		FinSi
	SiNo
		Escribir 'no es posible calcularlo'	
	FinSi 
	hipot = (-valB) + raiz(coefRaiz)/ (2* valA)
	
	Escribir 'El valor de la Hipotenusa es: ', hipot
FinAlgoritmo
