import * as readlineSync from 'readline-sync';

const claveReal: string ='eureka';
let claveUsuario: string = readlineSync.question("Ingrese la clave: ");
let contador : number = 0;
let intentos : number = 4;
   
while ((contador <= intentos) && (claveUsuario != claveReal)){
    claveUsuario = readlineSync.question("Ingrese la clave: ");
    contador ++;
    if (claveReal != claveUsuario) {
        console.log("Has agotado tus 3 intentos");
     }else{
        console.log("La clave es incorrecta");
     }

}
