import { vehiculo } from "./vehiculo";

export class camioneta extends vehiculo {
    acelerar(): void{
        console.log("Acelero de cer a 100 en 14 seg");
    }
}