import * as rls from "readline-sync";
let tamanioArreglo: number = 3;
let arregloA: number[] = new Array(tamanioArreglo);
arregloA=[1,2,3,4,5,6];
//console.log(arregloA.length);
let arregloB: number[] = new Array(tamanioArreglo);
let arregloSuma: number[] = new Array(tamanioArreglo);

/*[1, 2, 3, 4,  5,  6];
[7, 8, 9, 10, 11, 12];
[8, 10,12, 14 ,16,18  ]*/
//let hastaDonde:number=arregloA.length;


for (let i = 0; i <arregloA.length; i++) {
    arregloA[i]=rls.questionInt('ingrese el valor del arreglo A en la posicion '+ i); 
    arregloB[i]=rls.questionInt('ingrese el valor del arreglo B en la posicion '+ i); 
    arregloSuma[i]=arregloA[i]+arregloB[i];
}

for (let i = 0;i < arregloSuma.length;i++) {
    console.log(arregloSuma[i]);    
}










/*pos0=arregloA[0]+arregloB[0];
pos1=arregloA[1]+arregloB[1];
pos2=arregloA[2]+arregloB[2];
pos3=arregloA[3]+arregloB[3];
pos4=arregloA[4]+arregloB[4];
pos5=arregloA[5]+arregloB[5];*/
