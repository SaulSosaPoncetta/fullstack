//dimension de la matriz= N filas por M columnas. En el siguiente ejemplo será de 3x4
//El largo de este arreglo es 3 => arr=[x,x,x]       
//si pensamos que este arreglo se trata de una columna de la matriz entonces cada una de sus posiciones es una fila
//       |x|  fila 0
/*   arr=|x|  fila 1
         |x|  fila 2
ahora en cada fila declaramos un nuevo arreglo(todos de la misma longitud)
pongamos por caso que sea de 4 elementos
//       |new array(4)|  
/*   arr=|new array(4)|
         |new array(4)|
*/
//           COLUMNAS
//  F     c0  c1  c2 c3 
//  I   f0|a  b   c  d |
//  L   f1|e  f   g  h |     mat 3*4
//  A   f2|i  j   k  l |
//  S 
//  
// entonces tenemos
let filas:number=3;//=cantidad de filas
let cols:number=4;//=cantidad de columnas
let matriz:number[][]=new Array(filas);//new Array(cantidad de filas que quiero) 

//estas son las filas
matriz[0]=new Array(cols);//fila0
matriz[1]=new Array(cols);//fila1
matriz[2]=new Array (cols);//fila2

let i :number;
let j :number;
let numerador:number=0;//uso un numerador para cargar la matriz de forma ascendente
for (i= 0; i < filas; i++) {//entonces en el primer for me posiciono en una fila y en el segundo recorro las columnas
    for (j= 0; j <cols; j++) {
        matriz[i][j]=numerador;     //aclaracion!! cambié el sentido de recorrido respecto a lo que hicimos en clase para poder usar
        numerador++;     //el salto de linea '\n' (error no percibido en clase, ya que solo sirve si recorremos la matriz de forma horizontal)
    }                    //con matriz[i][j] recorremos todas las columnas de una fila y luego todas las columnas de la fila que sigue etc                 
}                        //Aclaracion 2, usar un string para mostrar la matriz concatenando sus  filas solo lo hacemos por el momento para practicar.
                        //pero no es necesario, y en la practica trabajamos directamente con la matriz
                        //Aclaracion 3, tanto el recorrido de una matriz para cargar sus datos como el recorrido para leerlos, se puede hacer 
                        //como ustedes decidan, es decir, recorriendo sus filas(me paro sobre una columna y recorro sus filas) o recorriendo sus columnas 
                        //(me paro sobre una fila y recorro las columnas)
                        //-en el ejemplo de la clase nos parabamos en una columna y recorriamos sus filas.- por esta razon veran que hay diferencias de codigo
console.table(matriz);//vemos como quedó cargada
                                      
let texto:string="";//string para concatenar 
for ( i = 0; i < filas; i++) {
    for (j = 0;j <cols; j++) {
        texto+=" "+matriz[i][j];
    }
    texto+="\n";
}

console.log(texto);// mostramos la matriz usando el texto concatenado

matriz[1][2]=-1;// aca cambiamos el valor de la fila 1 columna 2 por -1 para ver donde se produce el cambio

let texto2:string="";
for (i = 0; i < filas; i++) {
    for (j = 0;j <cols; j++) {
        texto2+=" "+matriz[i][j];
    }
    texto2+="\n";
}// recargamos el string con el nuevo valor
console.log(texto2);
console.table(matriz)
console.log(matriz);

//  EL CODIGO DE ARRIBA SIMPLIFICADO QUEDA ASI:
/* 
let filas: number = 3;//=cantidad de filas
let cols: number = 4;//=cantidad de columnas
let matriz: number[][] = new Array(filas);//new Array(cantidad de filas que quiero) 

//estas son las filas
for (let i: number = 0; i < filas; i++) {
    matriz[i] = new Array(cols);
}

function cargarMatriz(matriz: number[][], f: number, c: number) {
    let fil: number, col: number;
    for (fil = 0; fil < f; fil++) {
        for (col = 0; col < c; col++) {
            matriz[fil][col] = Math.floor(Math.random() * 2);
        }
    }
}
cargarMatriz(matriz, filas, cols);
console.table(matriz);

function mostrarMatriz(matriz: number[][], f: number, c: number) {
    let fil: number, col: number;
    for (fil = 0; fil < f; fil++) {
        let cadena: string = " ";
        for (col = 0; col < c; col++) {
            cadena += ` ${matriz[fil][col]} `;
        }
        console.log(cadena);
    }
}
mostrarMatriz( matriz,filas,cols);
*/

