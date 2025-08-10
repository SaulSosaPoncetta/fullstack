import * as readlineSync from 'readline-sync';

let posicionDeLlegada : number = readlineSync.questionInt( "Ingrese puesto de llegada: ");
console.log("el puesto es: ", posicionDeLlegada);

switch (posicionDeLlegada) {
        case 1 :
                console.log('Entregar medalla de oro');
                break;
        case 2 : 
                console.log('Entregar medalla de plata');
                break;       
        case 3 : 
                console.log('Entregar medalla de bronce');
                break;
        default :
                     console.log('Entregar mención de participación');          
        }