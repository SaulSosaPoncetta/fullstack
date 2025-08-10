import fs from'node:fs';

// import * as fs from'node:fs';
//let fs = requiere('node:fs');
//let contenido: number[] = [1,2,3,4];
//let contenidoString: string = contenido.toString();
//let contenido: number = 9;

const nombres: string[] = ["Juan ","Amalia ","Nicolas ","Carla "];
let contenido: string = "";

for (let i:number=0; i < nombres.length; i++){
    contenido += `${nombres[i]}`; //template string
}

//Guardo contenido en el txt.
fs.writeFileSync('./test.txt', contenido );
console.log("Finalizado");

//leer info de un txt
const datos: string = fs.readFileSync('./test.txt', 'utf8');
const datos2: string = datos.trim();
const nuevoArray: string[]= datos2.split(" ");
console.log(nuevoArray);