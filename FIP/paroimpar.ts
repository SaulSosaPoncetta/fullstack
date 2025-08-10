
/* Desarrollar un algoritmo que dado un número, ingresado por el usuario determine 
si el número es par o impar y le informe al usuario
En el caso de ser 0 (cero) el algoritmo deberá  informarlo

*/

Algoritmo ParImparRepetir
	Definir numIngresado Como Entero
	Repetir
		Escribir "Ingrese un número"
		Leer numIngresado
	Hasta Que numIngresado > 0
	Si numIngresado MOD 2 = 0 Entonces
		Escribir "El número es par"
	Sino
		Escribir "El número es impar"
	FinSi
FinAlgoritmo