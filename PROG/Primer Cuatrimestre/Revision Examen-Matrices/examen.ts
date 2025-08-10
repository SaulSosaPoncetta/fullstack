//resolucion examen prog
//ejercicio 1
/*Cuenta la cantidad de A que hay en un string de 50 catracteres que el usuario ingresa */

/*Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). Cuente la cantidad de A, E y O 
que hay en ese string y almacene esas cantidades en otro arreglo de 3 elementos en el orden que usted desee.
Pegar el codigo aquí.*/ 


/*
let texto: string = "HolA estO es un Ejemplo de textO que debiAn usar para El Examen";  
let letraA:string = "A";
let letraE:string = "E";
let letraO:string = "O";
let arregloLetras:number[]=new Array(3);

function cuentaLetras(text:string,letter:string):number {
    let iterador:number=0;
    let contador:number=0;
    while (iterador<text.length) {
        if (text[iterador]==letter) {
            contador++;
        }
        iterador++;
    }
    return contador;
}
arregloLetras=[cuentaLetras(texto,letraA),cuentaLetras(texto,letraE),cuentaLetras(texto,letraO)]
console.log(arregloLetras);
*/

//Corregir los errores que encuentre: 


//Corregir los errores que encuentre: 
/*
 function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    for ( i = 0; i < arreglo.length; i++) {//let i=0
        suma += arreglo[i];
    }
    return arreglo;//return suma;
}
*/
//Corregir los errores que encuentre:
/*
function establecerColorPorNota(valor: number): string {
    if (valor >= 0 and valor <"siete") {//&&    7
        return rojo;//"rojo"
    }
    else if ( valor >=7 and valor <= 10) {//&&
        return verde;//""
    }
     return gris;""
}*/

//Corregir los errores que encuentre: 
/*
function obtenerPromedio(arr:number[]): string {    //number
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma % arr.length;//suma/arr.length
    console.log(promedio);//return ptomedio
}*/

//¿Cuál es la forma correcta de declarar una variable en Typescript?
//Marque todas las opciones correctas
/*let variable:number;
let variable2:string;
*/
  //¿Cuál es la forma correcta de declarar un array de longitud 20 en Typescript?
  //let arreglo:number[]=new Array(20);

//  ¿Cómo se llama el método que convierte una cadena en letras mayúsculas?
//.toUpperCase();    


//Recuerden, en programación hay muchos caminos para llegar al mismo destino. esto solo es un ejemplo de resolución