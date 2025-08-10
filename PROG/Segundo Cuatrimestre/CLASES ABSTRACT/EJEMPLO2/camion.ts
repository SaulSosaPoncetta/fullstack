import { vehiculo } from "./vehiculo";

export class camion extends vehiculo {
    acelerar(): void {
        console.log("Acelero de cer a 100 en 120 seg");
    }
}