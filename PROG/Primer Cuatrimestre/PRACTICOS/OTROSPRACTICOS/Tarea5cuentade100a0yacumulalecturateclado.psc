Algoritmo cuentaregresivayacumulador
	Definir varI Como Real
	Definir valS Como Real
	Definir varA Como Real
	
	varI = 10 //asigna 10 a variable I
	valS = 0 //inicializa en 0 variable S
	
	Repetir
		Leer varA  //Lee de teclado valor A
		valS = valS + varA //Acumula el valor de A en S
		varI=varI-1 //Decrementa la variable I en 1
	Hasta Que (varI = 0) //Evalua condicion y si no se cumple repite ciclo
		Escribir 'El valor alcanzado por S es:', valS //Escribe por consola el Valor acumulado de S, al salir del ciclo
FinAlgoritmo
