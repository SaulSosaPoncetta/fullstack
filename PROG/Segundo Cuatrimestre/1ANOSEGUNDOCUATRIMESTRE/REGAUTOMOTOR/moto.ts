import { Vehiculo } from './vehiculos';

export class Moto extends Vehiculo {
    cilindrada: number;

    constructor(
        marca: string,
        modelo: string,
        numeroMotor: string,
        numeroChasis: string,
        dominio: string,
        cilindrada: number
    ) {
        super(marca, modelo, "Moto", numeroMotor, numeroChasis, dominio);
        this.cilindrada = cilindrada;
    }

    descripcion(): string {
        return `Moto ${this.marca} ${this.modelo} con ${this.cilindrada}cc de cilindrada.`;
    }
}
